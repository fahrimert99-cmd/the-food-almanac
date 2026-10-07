#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI Senaryo Üretici (GitHub-native, sağlam).
GEMINI_API_KEY varsa Gemini (en kaliteli/güvenilir); yoksa anahtarsız Pollinations
(POST /openai -> GET fallback). Her yol için tekrar denemeli + esnek JSON ayrıştırma.
"""
import os, re, json, time, urllib.parse, urllib.request, urllib.error

PROMPT = """Sen TUZAK AVCISI adlı tüketici farkındalığı kanalında çalışan bir YouTube yazarıısın.
BAŞLIK: {baslik}
Bu başlık için market, alışveriş, ödeme, fiyat, banka, restoran, uygulama veya hizmetlerdeki SOMUT tüketici tuzağını anlatan, akıcı ve bilimsel olarak DOĞRU bir Türkçe seslendirme metni yaz. Genel psikoloji, müzik, koku, yön bulma veya soyut bilim konusu anlatma; izleyiciye parasını ya da kararını nasıl koruyacağını göster. ~110 kelime. Metin yüksek sesle okunacaktır: kısa ve doğal cümleler kur; konuşma dilinde olmayan devrik veya aşırı uzun cümlelerden, gereksiz noktalama işaretlerinden ve arka arkaya yabancı terimlerden kaçın. Kısaltmaları mümkünse Türkçe karşılığıyla yaz (örneğin "yapay zekâ", "vayfay"); yabancı kelimeler için Türkçe karşılığı tercih et: "illusion/ilizyon" yazma, "yanılsama" yaz. Yabancı özel adları yalnızca gerçekten gerekliyse kullan. İLK CÜMLE ÇOK ÖNEMLİ: kurulumla/tanımla BAŞLAMA; doğrudan tüketiciye verilen zararı veya şaşırtıcı tuzağı söyle ki izleyici ilk 2 saniyede kaymasın (örn. "Kurulum..." değil "Aslında bu indirim..." gibi vurucu açılış). Sonda izleyicinin hemen uygulayabileceği tek bir kontrol önerisi ve kısa abonelik çağrısı ver. Uydurma istatistik/sayı verme. Emoji/başlık/madde YOK, düz paragraf. Anlatımı 10 kısa ve birbirinden farklı sahneye böl; her sahne için İNGİLİZCE sinematik bir görsel tarifi yaz. Aynı nesneyi farklı sahnelerde tekrar etme; her sahne farklı kadraj ve görsel bilgi taşısın.
ÇOK ÖNEMLİ — TÜRKÇE YAZIM: 'script', 'baslik', 'aciklama' ve sahne 'metin' alanlarını KUSURSUZ Türkçe imlâ ile yaz. Türkçe'ye özgü harfleri (ç, ğ, ı, İ, ö, ş, ü ve büyükleri) HER ZAMAN ve EKSİKSİZ kullan; ASLA ASCII karşılıklarına (c, g, i, o, s, u) sadeleştirme. Örnek: "guclu" DEĞİL "güçlü", "bilim icerigi" DEĞİL "bilim içeriği". (Yalnızca 'gorsel' alanı İngilizce olacak.)
CEVABINI SADECE geçerli JSON olarak ver. Başka hiçbir şey yazma, açıklama/kod bloğu ekleme:
{{"baslik":"...","aciklama":"2-3 cümle","etiketler":["e1","e2","e3","e4","e5"],"script":"...","sahneler":[{{"metin":"...","gorsel":"cinematic english description"}}]}}"""


def _temizle(t):
    t = (t or "").strip()
    t = re.sub(r"^```(json)?", "", t).strip()
    t = re.sub(r"```$", "", t).strip()
    i, j = t.find("{"), t.rfind("}")
    if i >= 0 and j > i:
        t = t[i:j+1]
    return t


def _openrouter_key():
    return re.sub(r"\s", "", os.environ.get("OPENROUTER_API_KEY") or "")


OPENROUTER_MODEL = os.environ.get("OPENROUTER_MODEL", "").strip() or "openrouter/free"
OPENROUTER_MAX_FALLBACKS = max(0, int(os.environ.get("OPENROUTER_MAX_FALLBACKS", "4") or "4"))
_OPENROUTER_FREE_CACHE = None


def _openrouter(prompt, key, model=None, timeout=120, max_tokens=4096):
    """OpenRouter OpenAI-uyumlu endpoint'i; varsayilan yonlendirici ucretsizdir."""
    url = "https://openrouter.ai/api/v1/chat/completions"
    body = {"model": model or OPENROUTER_MODEL, "temperature": 0.85,
            "max_tokens": max_tokens,
            "messages": [{"role": "system", "content": "Yalnizca gecerli JSON dondur."},
                         {"role": "user", "content": prompt}]}
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "Accept": "application/json",
                 "Authorization": f"Bearer {key}",
                 "HTTP-Referer": "https://github.com/fahrimert99-cmd/yt-cocuk-otomasyon",
                 "X-Title": "YT Cocuk Otomasyon"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            d = json.loads(r.read().decode())
    except urllib.error.HTTPError as he:
        raise RuntimeError(f"{he.code}: {he.read().decode()[:180]}")
    choice = (d.get("choices") or [{}])[0]
    message = choice.get("message") or {}
    content = message.get("content")
    if not isinstance(content, str) or not content.strip():
        raise RuntimeError("bos content; finish_reason=" + str(choice.get("finish_reason")) +
                           "; message_keys=" + ",".join(message.keys()))
    return content


def _openrouter_free_models(timeout=20):
    """Canli katalogdan :free metin modellerini alir; proses boyunca onbellekler."""
    global _OPENROUTER_FREE_CACHE
    if _OPENROUTER_FREE_CACHE is not None:
        return list(_OPENROUTER_FREE_CACHE)
    try:
        url = "https://openrouter.ai/api/v1/models?output_modalities=text"
        with urllib.request.urlopen(url, timeout=timeout) as r:
            models = json.loads(r.read().decode()).get("data", [])
        ids = []
        for item in models:
            model_id = item.get("id", "")
            pricing = item.get("pricing", {})
            if (model_id.endswith(":free") or
                    (pricing.get("prompt") == "0" and pricing.get("completion") == "0")):
                if model_id and model_id != "openrouter/free":
                    ids.append(model_id)
        _OPENROUTER_FREE_CACHE = ids
    except Exception:
        _OPENROUTER_FREE_CACHE = []
    return list(_OPENROUTER_FREE_CACHE)


def _openrouter_with_fallback(prompt, key, max_tokens=4096, timeout=120,
                              required_field="script"):
    """Router hata veya gecersiz JSON verirse ucretsiz modelleri sirayla dener."""
    candidates = [OPENROUTER_MODEL] + _openrouter_free_models()
    seen, errors = set(), []
    for model in candidates:
        if not model or model in seen:
            continue
        seen.add(model)
        try:
            result = _openrouter(prompt, key, model=model, timeout=timeout,
                                 max_tokens=max_tokens)
            parsed = json.loads(_temizle(result))
            if required_field and (not isinstance(parsed, dict) or
                                   not parsed.get(required_field)):
                raise RuntimeError(f"gecersiz JSON veya {required_field} alani yok")
            if model != OPENROUTER_MODEL:
                print(f"    OpenRouter fallback modeli: {model}")
            return result
        except Exception as e:
            errors.append(f"{model}: {str(e)[:100]}")
            if len(errors) >= OPENROUTER_MAX_FALLBACKS + 1:
                break
    raise RuntimeError("OpenRouter ucretsiz fallback zinciri basarisiz: " +
                       " | ".join(errors))


def _gemini(prompt, key, model="gemini-2.0-flash"):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
    body = {"contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0.9, "maxOutputTokens": 4096,
                                 "responseMimeType": "application/json"}}
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=90) as r:
        d = json.loads(r.read().decode())
    return d["candidates"][0]["content"]["parts"][0]["text"]


# --- Anthropic Claude (en kaliteli Türkçe metin) -------------------------
# Model ANTHROPIC_MODEL ile degistirilebilir (maliyet icin ornegin
# "claude-sonnet-5" veya "claude-haiku-4-5"). Varsayilan: en yetenekli Opus.
ANTHROPIC_MODEL = os.environ.get("ANTHROPIC_MODEL", "").strip() or "claude-opus-5"


def _claude_key():
    return (os.environ.get("ANTHROPIC_API_KEY") or os.environ.get("CLAUDE_API_KEY") or "").strip()


def _claude(prompt, key, model=None, max_tokens=8192):
    """Anthropic Messages API (ham HTTP, ek bagimlilik yok) ile metin uretir."""
    model = model or ANTHROPIC_MODEL
    url = "https://api.anthropic.com/v1/messages"
    body = {"model": model, "max_tokens": max_tokens,
            "thinking": {"type": "disabled"},  # duz JSON istiyoruz; dusunme kapali
            "messages": [{"role": "user", "content": prompt}]}
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"content-type": "application/json", "x-api-key": key,
                 "anthropic-version": "2023-06-01"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            d = json.loads(r.read().decode())
    except urllib.error.HTTPError as he:
        # Govdeyi mesaja ekle: 400'un nedeni (kredi, model, parametre) logda gorunsun.
        # "HTTP Error <kod>" oneki korunur (cagiranlar "429" arar).
        raise RuntimeError(f"HTTP Error {he.code}: {he.read().decode(errors='replace')[:300]}")
    # content bir blok listesidir; sadece metin bloklarini birlestir
    return "".join(b.get("text", "") for b in d.get("content", []) if b.get("type") == "text")


# --- NVIDIA NIM (build.nvidia.com) — OpenAI-uyumlu, ~260 ucretsiz model --------
# Anahtar NVIDIA_API_KEY ile gelir. Varsayilan model NVIDIA_MODEL ile degistirilebilir.
# palmyra-creative-122b: yaratici yazim icin en iyi (hook/senaryo kalitesi). JSON'a
# uymazsa zincir guclu instruct modellerine duser (nemotron-super-120b -> nemotron-70b).
NVIDIA_MODEL = os.environ.get("NVIDIA_MODEL", "").strip() or "writer/palmyra-creative-122b"


def _nvidia_modeller():
    """NVIDIA LLM deneme sirasi — JSON-URETEN adimlar icin. Once HIZLI + JSON'a
    SADIK instruct modeli (nemotron-70b: kanitli, hizli), sonra daha guclu
    yedekler; palmyra-creative EN SON (yaratici yazimda iyi ama kati JSON'da
    tutarsiz olabilir -> once denenirse yavaslatir/tekrar yaptirirdi). Senaryolar
    ayrica DeepSeek ile ELESTIRILIP guclendiriliyor (nvidia_araclar.KRITIK_MODEL),
    yani kalite orada da yukseliyor. Biri uymazsa sonrakine dusulur."""
    ms = ["nvidia/llama-3.1-nemotron-70b-instruct",
          "nvidia/nemotron-3-super-120b-a12b",
          "deepseek-ai/deepseek-v4-pro-0813",
          NVIDIA_MODEL]   # palmyra-creative (yaratici) en son yedek
    out = []
    for m in ms:
        if m and m not in out:
            out.append(m)
    return out


def _nvidia_key():
    return re.sub(r"\s", "", os.environ.get("NVIDIA_API_KEY") or "")


def _nvidia(prompt, key, model=None, timeout=120, max_tokens=4096):
    """NVIDIA NIM chat/completions (OpenAI-uyumlu). Hata govdesini okur.
    timeout: yavas/dusunen modellerde (reasoning) cagriyi sinirlamak icin."""
    import urllib.error
    model = model or NVIDIA_MODEL
    url = "https://integrate.api.nvidia.com/v1/chat/completions"
    body = {"model": model, "temperature": 0.85, "max_tokens": max_tokens,
            "messages": [{"role": "system", "content": "Yalnizca gecerli JSON dondur."},
                         {"role": "user", "content": prompt}]}
    req = urllib.request.Request(
        url, data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "Accept": "application/json",
                 "Authorization": f"Bearer {key}"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            d = json.loads(r.read().decode())
    except urllib.error.HTTPError as he:
        raise RuntimeError(f"{he.code}: {he.read().decode()[:160]}")
    return d["choices"][0]["message"]["content"]


def _poll_post(prompt):
    url = "https://text.pollinations.ai/openai"
    body = {"model": "openai", "temperature": 0.9,
            "messages": [{"role": "system", "content": "Yalnizca gecerli JSON dondur."},
                         {"role": "user", "content": prompt}]}
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json", "User-Agent": "yt"})
    with urllib.request.urlopen(req, timeout=120) as r:
        d = json.loads(r.read().decode())
    return d["choices"][0]["message"]["content"]


def _poll_get(prompt):
    q = urllib.parse.quote(prompt)
    url = f"https://text.pollinations.ai/{q}?model=openai"
    req = urllib.request.Request(url, headers={"User-Agent": "yt"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read().decode("utf-8", "ignore")


def uret(baslik):
    prompt = PROMPT.format(baslik=baslik)
    okey = _openrouter_key()
    key = os.environ.get("GEMINI_API_KEY", "").strip()
    ckey = _claude_key()
    nkey = _nvidia_key()
    yollar = []
    if okey:
        yollar.append((f"openrouter:{OPENROUTER_MODEL}",
                       lambda: _openrouter_with_fallback(prompt, okey)))
    if nkey:
        for _m in _nvidia_modeller():
            yollar.append((f"nvidia:{_m.split('/')[-1][:16]}",
                           lambda mm=_m: _nvidia(prompt, nkey, model=mm)))
    if ckey:
        yollar.append(("claude", lambda: _claude(prompt, ckey)))
    if key:
        yollar.append(("gemini", lambda: _gemini(prompt, key)))
    yollar += [("poll_post", lambda: _poll_post(prompt)),
               ("poll_get", lambda: _poll_get(prompt))]

    hatalar = []
    for ad, yol in yollar:
        denemeler = 4 if ad in ("gemini", "claude") else (2 if ad.startswith("nvidia") else 1)
        for k in range(denemeler):
            try:
                ham = yol()
                data = json.loads(_temizle(ham))
                if data.get("script"):
                    return data
                hatalar.append(f"{ad}: script bos")
                break
            except Exception as e:
                msg = str(e)
                hatalar.append(f"{ad}#{k+1}: {type(e).__name__}: {msg[:120]}")
                if "429" in msg and k < denemeler - 1:
                    time.sleep(30)      # dakika-limiti sifirlanmasini bekle
                else:
                    break
    import time as _t
    raise SystemExit("AI senaryo uretilemedi @" + _t.strftime("%H:%M:%S") +
                     " | " + " || ".join(hatalar))


if __name__ == "__main__":
    import sys
    print(json.dumps(uret(sys.argv[1] if len(sys.argv) > 1 else "Gökyüzü neden mavidir?"),
                     ensure_ascii=False, indent=2))
OPENROUTER_MAX_FALLBACKS = max(0, int(os.environ.get("OPENROUTER_MAX_FALLBACKS", "4") or "4"))
_OPENROUTER_FREE_CACHE = None
