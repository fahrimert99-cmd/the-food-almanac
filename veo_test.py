#!/usr/bin/env python3
"""Veo (Gemini API) klip denemesi — geçici. YouTube'a YÜKLEMEZ.
Hesapta açık Veo modellerini listeler; Fast ve Lite ile aynı sahneyi 9:16, 8 sn üretir.
Çıktı: onizleme/veo/ (model.mp4, rapor.txt)"""
import json, os, time, urllib.error, urllib.request

KEY = (os.environ.get("GEMINI_API_KEY") or os.environ.get("GEMINI_KEY") or "").strip()
API = "https://generativelanguage.googleapis.com/v1beta"
CIKTI = "onizleme/veo"
os.makedirs(CIKTI, exist_ok=True)
PROMPT = ("Vertical 9:16 cinematic documentary shot inside a large Chinese electronics factory: "
          "a conveyor belt carries hundreds of tiny individually wrapped parcels, each with a pair of "
          "cheap wireless earbuds, workers in blue uniforms seal them quickly, camera slowly dollies "
          "forward along the belt, realistic lighting, shallow depth of field. "
          "No text, no letters, no logos, no captions.")


def istek(url, govde=None):
    h = {"x-goog-api-key": KEY}
    if govde is not None:
        h["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=json.dumps(govde).encode() if govde is not None else None, headers=h)
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.load(r)


def modeller():
    tum, tok = [], ""
    while True:
        d = istek(f"{API}/models?pageSize=200" + (f"&pageToken={tok}" if tok else ""))
        tum += d.get("models", [])
        tok = d.get("nextPageToken")
        if not tok:
            return [m["name"].split("/")[-1] for m in tum if "veo" in m["name"].lower()]


def uret(model):
    op = istek(f"{API}/models/{model}:predictLongRunning",
               {"instances": [{"prompt": PROMPT}],
                "parameters": {"aspectRatio": "9:16", "durationSeconds": 8, "resolution": "720p"}})
    t0 = time.time()
    while not op.get("done"):
        if time.time() - t0 > 600:
            raise RuntimeError("zaman aşımı")
        time.sleep(10)
        op = istek(f"{API}/{op['name']}")
    if "error" in op:
        raise RuntimeError(str(op["error"])[:300])
    ornek = op["response"]["generateVideoResponse"]["generatedSamples"][0]["video"]["uri"]
    req = urllib.request.Request(ornek, headers={"x-goog-api-key": KEY})
    yol = os.path.join(CIKTI, model + ".mp4")
    with urllib.request.urlopen(req, timeout=300) as r:
        open(yol, "wb").write(r.read())
    return yol, round(time.time() - t0)


rapor = []
veo = modeller()
rapor.append("Açık Veo modelleri: " + ", ".join(veo))
print(rapor[-1])
# En ucuz iki 3.1 varyantı: Fast ve Lite (Pro/standart pahalı, denenmez)
sec = [m for m in veo if "3.1" in m and "fast" in m][:1] + [m for m in veo if "3.1" in m and "lite" in m][:1]
for m in sec:
    try:
        yol, sn = uret(m)
        rapor.append(f"{m}: OK {sn} sn -> {yol}")
    except urllib.error.HTTPError as e:
        rapor.append(f"{m}: HTTP {e.code} {e.read().decode(errors='ignore')[:300]}")
    except Exception as e:
        rapor.append(f"{m}: HATA {str(e)[:300]}")
    print(rapor[-1])
open(os.path.join(CIKTI, "rapor.txt"), "w", encoding="utf-8").write("\n".join(rapor) + "\n")
