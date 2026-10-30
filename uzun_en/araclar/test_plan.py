#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""plan.py için birim testleri (diskteki gerçek dosyalara dokunmaz)."""
import datetime as dt, os, sys, unittest
from unittest.mock import patch

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import plan  # noqa: E402
import x as X  # noqa: E402


MARKA = {"yayin": {"gunler": [1, 4], "saat_utc": "14:00"}, "onde_uretim_azami": 2}


class TestPlan(unittest.TestCase):
    def test_slug_gecerli(self):
        self.assertTrue(plan.slug_gecerli("garlic-blood-pressure"))
        self.assertTrue(plan.slug_gecerli("food-101"))
        self.assertFalse(plan.slug_gecerli(""))
        self.assertFalse(plan.slug_gecerli("a"))
        self.assertFalse(plan.slug_gecerli("-baslangic-tire"))
        self.assertFalse(plan.slug_gecerli("Buyuk-Harf"))
        self.assertFalse(plan.slug_gecerli("tirnak'li"))
        self.assertFalse(plan.slug_gecerli("../ust-dizin"))
        self.assertFalse(plan.slug_gecerli(None))

    @patch("ortak.marka", return_value=MARKA)
    def test_slotlar_sali_cuma(self, _m):
        bas = dt.datetime(2026, 10, 26, 12, 0, tzinfo=dt.timezone.utc)  # Pazartesi
        s = plan.slotlar(bas, gun=14)
        self.assertEqual(len(s), 4)
        self.assertEqual([x.weekday() for x in s], [1, 4, 1, 4])
        self.assertEqual(plan.iso(s[0]), "2026-10-27T14:00:00Z")

    @patch("ortak.marka", return_value=MARKA)
    def test_aktif_proje_sablon_esigi(self, _m):
        simdi = dt.datetime(2026, 10, 27, 4, 0, tzinfo=dt.timezone.utc)  # slota 10 saat (< SABLON_ESIK=14)
        d = {"aktif": "test-video", "videolar": {
            "test-video": {"slot": "2026-10-27T14:00:00Z", "asama": "sahne", "sahne_deneme": 0}
        }}
        slug, asama, _slot, sablon, _neden = plan.karar(d, simdi)
        self.assertEqual(slug, "test-video")
        self.assertEqual(asama, "render")
        self.assertTrue(sablon)

    @patch("ortak.marka", return_value=MARKA)
    def test_gorsel_kotasi_bitince_bekler(self, _m):
        simdi = dt.datetime(2026, 10, 30, 14, 0, tzinfo=dt.timezone.utc)
        d = {"aktif": "test-video", "videolar": {
            "test-video": {"slot": "2026-12-11T14:00:00Z", "asama": "varlik", "sahne_deneme": 0,
                           "gorsel_bekle": "2026-10-30T17:00:00Z"}
        }}
        slug, _asama, _slot, _sablon, neden = plan.karar(d, simdi)
        self.assertIsNone(slug)
        self.assertIn("görsel kotası", neden)
        slug, asama, *_ = plan.karar(d, simdi + dt.timedelta(hours=4))     # bekleme bitti: kaldığı yerden
        self.assertEqual((slug, asama), ("test-video", "varlik"))

    @patch("ortak.marka", return_value=MARKA)
    def test_kacan_slot_kaydirilir(self, _m):
        simdi = dt.datetime(2026, 10, 27, 15, 0, tzinfo=dt.timezone.utc)  # Salı 14:00 slotu kaçmış
        d = {"aktif": "test-video", "videolar": {
            "test-video": {"slot": "2026-10-27T14:00:00Z", "asama": "varlik", "sahne_deneme": 0}
        }}
        slug, asama, yeni_slot, _sablon, _neden = plan.karar(d, simdi)
        self.assertEqual(slug, "test-video")
        self.assertEqual(asama, "varlik")
        self.assertEqual(yeni_slot, "2026-10-30T14:00:00Z")             # Cuma slotuna kaydı

    @patch("ortak.marka", return_value=MARKA)
    def test_onde_uretim_siniri_doluyken_bekler(self, _m):
        simdi = dt.datetime(2026, 10, 26, 12, 0, tzinfo=dt.timezone.utc)
        d = {"aktif": None, "videolar": {
            "v1": {"slot": "2026-10-27T14:00:00Z", "asama": "yuklendi"},
            "v2": {"slot": "2026-10-30T14:00:00Z", "asama": "yuklendi"},
        }}
        slug, asama, _slot, _sablon, neden = plan.karar(d, simdi)
        self.assertIsNone(slug)
        self.assertIsNone(asama)
        self.assertIn("yeterli", neden)

    @patch("plan.konu_isaretle")
    @patch("ortak.json_oku", return_value={"konular": [
        {"slug": "gecersiz'slug", "durum": "bekliyor"},
        {"slug": "temiz-konu", "durum": "bekliyor"},
    ]})
    @patch("ortak.marka", return_value=MARKA)
    def test_gecersiz_slug_atlanir_yenisi_secilir(self, _m, _oku, _isaretle):
        simdi = dt.datetime(2026, 10, 26, 12, 0, tzinfo=dt.timezone.utc)
        d = {"aktif": None, "videolar": {}}
        slug, asama, slot, _sablon, _neden = plan.karar(d, simdi)
        self.assertEqual(slug, "temiz-konu")
        self.assertEqual(asama, "senaryo")
        self.assertEqual(slot, "2026-10-27T14:00:00Z")

    def test_x_metin_280_siniri(self):
        r = {
            "proje": "garlic-blood-pressure",
            "no": 1,
            "baslik": "Does Garlic Lower Blood Pressure? What Trials Found",
            "uzun_url": "https://youtu.be/5QYM4NhE2b8",
        }
        m = X.metin_hazirla(r)
        self.assertLessEqual(len(m), 280)
        self.assertIn("https://youtu.be/5QYM4NhE2b8", m)


if __name__ == "__main__":
    unittest.main()
