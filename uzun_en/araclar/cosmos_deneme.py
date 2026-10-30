#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""NVIDIA Cosmos (cosmos3-nano, build.nvidia.com) ile görselden video denemesi (kullanıcı isteği, 30 Ekim 2026).

  python3 uzun_en/araclar/cosmos_deneme.py --cikti KLASOR gorsel1.jpg [gorsel2.jpg ...]

Barındırılan uç noktanın istek şeması belgelenmiş değil (model sayfası: görsel "input_reference", çıktı "b64_video").
Bu yüzden önce API belgesi yoklanıp şemayla ilgili satırlar yazdırılır, sonra her görsel için birkaç uç nokta ve gövde
biçimi denenir; hata yanıtları (ör. 422 alan listesi) günlüğe yazılır. Başarılı biçim bulununca sonraki görseller
yalnızca onunla gönderilir. Env: NVIDIA_API_KEY.
"""
import argparse, base64, io, json, os, re, sys, time, urllib.error, urllib.request, zipfile

MODEL = os.environ.get("COSMOS_MODEL", "nvidia/cosmos3-nano")
UC = [f"https://ai.api.nvidia.com/v1/cosmos/{MODEL}", f"https://ai.api.nvidia.com/v1/genai/{MODEL}"]
BELGE = ["https://docs.api.nvidia.com/nim/reference/" + MODEL.replace("/", "-"),
         "https://build.nvidia.com/" + MODEL + "/modelcard"]
ISTEM = {
    "08": "A vintage hand-painted still-life illustration of cracked eggs on a plate. The camera slowly pushes in; "
          "the egg yolk glistens and soft window light drifts across the plate. Keep the illustration style. No text.",
    "12": "A vintage hand-painted illustration of a skillet with scrambled eggs on a kitchen table. Gentle steam rises "
          "from the pan while the camera slowly pushes in. Keep the illustration style. No text.",
    "24": "A vintage hand-painted illustration of a crowd of people standing in a grassy field with a basket of eggs. "
          "A light breeze moves the grass and the people shift slightly; slow camera drift. Keep the illustration "
          "style. No text.",
}
GENEL = ("A vintage hand-painted food illustration comes gently to life with subtle natural motion and a slow camera "
         "push-in. Keep the illustration style. No text.")


def anahtar():
    return re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or "")


def belge_yokla():
    """API belgesinden şema ipuçları (alan adları) — yalnızca günlük için."""
    for u in BELGE:
        try:
            with urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"}), timeout=30) as r:
                metin = r.read().decode("utf-8", "replace")
        except Exception as e:
            print(f"belge {u}: {str(e)[:120]}")
            continue
        duz = re.sub(r"<[^>]+>", " ", metin)
        satirlar = {s.strip()[:220] for s in re.split(r"[\n\r]+|(?<=[.;])\s", duz)
                    if re.search(r"input_reference|b64_video|num_frames|resolution|negative_prompt|guidance|"
                                 r"seed|fps|duration|steps|ai\.api\.nvidia\.com|invoke_url|aspect", s, re.I)}
        print(f"belge {u}: {len(metin)} karakter, ilgili {len(satirlar)} satır")
        for s in sorted(satirlar)[:40]:
            print("   ·", s)


def istek(url, govde, zaman=1200):
    """POST; 202 ise NVCF durumunu yoklar; büyük yanıt zip olarak gelirse açar. (sözlük | bayt, süre)."""
    hdr = {"Content-Type": "application/json", "Accept": "application/json", "Authorization": f"Bearer {anahtar()}"}
    t0 = time.time()
    with urllib.request.urlopen(urllib.request.Request(url, data=json.dumps(govde).encode(), headers=hdr),
                                timeout=zaman) as r:
        durum, reqid, ham = getattr(r, "status", 200), r.headers.get("NVCF-REQID"), r.read()
    while durum == 202 and reqid and time.time() - t0 < zaman:
        time.sleep(10)
        with urllib.request.urlopen(urllib.request.Request(
                f"https://api.nvcf.nvidia.com/v2/nvcf/pexec/status/{reqid}", headers=hdr), timeout=zaman) as r:
            durum, ham = getattr(r, "status", 200), r.read()
        print(f"      … bekliyor ({time.time() - t0:.0f} sn, durum {durum})")
    if ham[:2] == b"PK":                                   # NVCF büyük yanıtı zip olarak verir
        z = zipfile.ZipFile(io.BytesIO(ham))
        for ad in z.namelist():
            if ad.endswith(".mp4"):
                return z.read(ad), time.time() - t0
            if ad.endswith(".json"):
                return json.loads(z.read(ad)), time.time() - t0
    if ham[4:8] == b"ftyp":
        return ham, time.time() - t0
    return json.loads(ham.decode()), time.time() - t0


def video_cikar(d):
    if isinstance(d, (bytes, bytearray)):
        return bytes(d)
    for anahtar_ in ("b64_video", "video", "b64_json", "base64"):
        v = d.get(anahtar_) if isinstance(d, dict) else None
        if isinstance(v, str) and len(v) > 1000:
            return base64.b64decode(v.split(",", 1)[1] if v.startswith("data:") else v)
    for liste in ("data", "artifacts", "videos"):
        if isinstance(d, dict) and isinstance(d.get(liste), list) and d[liste]:
            v = video_cikar(d[liste][0])
            if v:
                return v
    return None


def ozet(d):
    if isinstance(d, (bytes, bytearray)):
        return f"{len(d)} bayt"
    return json.dumps({k: (v if not isinstance(v, str) or len(v) < 200 else f"<{len(v)} karakter>")
                       for k, v in d.items()} if isinstance(d, dict) else d)[:600]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--cikti", required=True)
    ap.add_argument("gorseller", nargs="+")
    a = ap.parse_args()
    if not anahtar():
        sys.exit("NVIDIA_API_KEY yok")
    os.makedirs(a.cikti, exist_ok=True)
    belge_yokla()
    from PIL import Image
    calisan = None                                          # (uç nokta, gövde kurucu) — ilk başarılı biçim
    for g in a.gorseller:
        no = re.sub(r"\D", "", os.path.basename(g))[-2:]
        im = Image.open(g).convert("RGB")
        im = im.resize((720, 1280)) if im.width < im.height else im.resize((1280, 720))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=90)
        b64 = base64.b64encode(buf.getvalue()).decode()
        istem = ISTEM.get(no, GENEL)
        bicimler = [
            ("input_reference data-uri", lambda: {"prompt": istem, "input_reference": f"data:image/jpeg;base64,{b64}"}),
            ("image data-uri", lambda: {"prompt": istem, "image": f"data:image/jpeg;base64,{b64}"}),
            ("input_reference ham", lambda: {"prompt": istem, "input_reference": b64}),
        ]
        denenecek = [calisan] if calisan else [(u, b) for u in UC for b in bicimler]
        for u, (ad, kur) in denenecek:
            print(f"\n{os.path.basename(g)} -> {u} [{ad}]")
            try:
                d, sure = istek(u, kur())
            except urllib.error.HTTPError as he:
                try:
                    govde = he.read().decode("utf-8", "replace")[:700]
                except Exception:
                    govde = ""
                print(f"   HTTP {he.code}: {govde}")
                continue
            except Exception as e:
                print(f"   hata: {str(e)[:200]}")
                continue
            v = video_cikar(d)
            print(f"   yanıt ({sure:.0f} sn): {ozet(d)}")
            if v:
                yol = os.path.join(a.cikti, f"cosmos_{no}.mp4")
                with open(yol, "wb") as f:
                    f.write(v)
                print(f"   ✓ video: {yol} ({len(v) // 1024} KB)")
                calisan = (u, (ad, kur))
                break
        else:
            print(f"   ✗ {os.path.basename(g)}: hiçbir biçim video döndürmedi")
    if not any(f.endswith(".mp4") for f in os.listdir(a.cikti)):
        sys.exit("hiç video üretilemedi")


if __name__ == "__main__":
    main()
