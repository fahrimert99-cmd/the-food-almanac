"""Marka serisi (seri=marka) senaryolarının hepsinin kod video tarifi olmalı ve
tarifler kod_video şablonlarıyla hatasız çizilebilmeli."""
import json
import os

os.environ.setdefault("KOD_VIDEO_SESSIZ", "1")
import kod_video as K

S = json.load(open("senaryolar.json", encoding="utf-8-sig"))
T = json.load(open("kod_sahneler.json", encoding="utf-8"))
marka = [s for s in S if s.get("seri") == "marka"]
eksik = [s["baslik"] for s in marka if s["baslik"] not in T]
assert not eksik, f"tarifi olmayan marka senaryosu: {eksik}"
for s in marka:
    tan = T[s["baslik"]]
    assert len(tan["sahneler"]) == len(s["sahneler"]), s["baslik"]
    for sp in tan["sahneler"]:
        assert sp.get("tip") in K.SABLONLAR, (s["baslik"], sp.get("tip"))
        for t in (0.0, 1.0, 2.5, 4.0):
            img, d = K.arka_plan(t)
            K.sahne_ciz(d, t, 4.5, sp)
    img, d = K.arka_plan(0.5)
    K.sb_kanca(d, 0.5, 1.1, tan["kanca"])
print(f"OK: {len(marka)} marka senaryosunun kod video tarifi geçerli")
