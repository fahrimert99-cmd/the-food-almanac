#!/usr/bin/env python3
"""Cloudflare Workers AI görsel tanısı (geçici): A101 sahnesiyle tek görsel."""
import os, urllib.error, belgesel_gorsel as B
os.makedirs("onizleme/cf_test", exist_ok=True)
print("token:", bool(os.environ.get("CF_API_TOKEN")), "hesap:", bool(os.environ.get("CF_ACCOUNT_ID")))
P = ("Photorealistic cinematic documentary still: long queue of shoppers waiting outside a Turkish "
     "discount supermarket at 9am, store sign reading 'A101', morning light, wide shot, 35mm film look")
def _get(u):
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers={"Authorization": f"Bearer {os.environ['CF_API_TOKEN'].strip()}"}), timeout=30)
        return r.read().decode()[:300]
    except urllib.error.HTTPError as e:
        return f"HTTP {e.code} {e.read().decode()[:300]}"
import urllib.request as _u
acc = os.environ['CF_ACCOUNT_ID'].strip()
print("hesap kimliği uzunluğu:", len(acc), "| token uzunluğu:", len(os.environ['CF_API_TOKEN'].strip()))
print("hesap tokeni doğrulama:", _get(f"https://api.cloudflare.com/client/v4/accounts/{acc}/tokens/verify"))
print("kullanıcı tokeni doğrulama:", _get("https://api.cloudflare.com/client/v4/user/tokens/verify"))
# hata ayrıntısını görmek için doğrudan çağır
import json, base64, urllib.request
url = f"https://api.cloudflare.com/client/v4/accounts/{os.environ['CF_ACCOUNT_ID'].strip()}/ai/run/{B.CF_MODEL}"
try:
    req = urllib.request.Request(url, data=json.dumps({"prompt": P, "steps": 8}).encode(),
        headers={"Authorization": f"Bearer {os.environ['CF_API_TOKEN'].strip()}", "Content-Type": "application/json"})
    d = json.loads(urllib.request.urlopen(req, timeout=120).read().decode())
    open("onizleme/cf_test/a101.jpg", "wb").write(base64.b64decode(d["result"]["image"]))
    print("CF_OK")
except urllib.error.HTTPError as e:
    print("CF_FAIL", e.code, e.read().decode()[:400])
