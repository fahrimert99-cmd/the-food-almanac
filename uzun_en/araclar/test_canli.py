# -*- coding: utf-8 -*-
"""canli.py: başlık/açıklama sınırları, kart çizimi ve bölüm adaylarının (yalnızca slotu geçmiş) seçimi."""
import os, sys, tempfile, unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import canli as C  # noqa: E402


class TestCanli(unittest.TestCase):
    def setUp(self):
        self.b = [{"slug": f"s{i}", "id": f"id{i}", "baslik": "Is 1 Egg a Day Bad for Your Heart?" * 2, "sure": 600}
                  for i in range(12)]

    def test_baslik_aciklama(self):
        for mod in ("tam", "deneme"):
            b, a = C.baslik_aciklama({"mod": mod, "bolumler": self.b})
            self.assertLessEqual(len(b), 100)
            self.assertLessEqual(len(a), 5000)
            self.assertEqual(b.startswith("[TEST]"), mod == "deneme")
            self.assertIn("https://youtu.be/id0", a)
            self.assertNotIn("<", a + b)          # YouTube başlık/açıklamada < > kabul etmez

    def test_kartlar(self):
        from PIL import Image
        with tempfile.TemporaryDirectory() as d:
            C.kart_acilis(self.b, os.path.join(d, "a.png"))
            C.kart_siradaki(self.b[0], 1, 12, None, os.path.join(d, "s.png"))
            C.kart_kapanis(os.path.join(d, "k.png"))
            C.rozet(1, 12, os.path.join(d, "r.png"))
            C.kucuk_resim(self.b, [], os.path.join(d, "t.jpg"))
            for f in ("a.png", "s.png", "k.png", "r.png", "t.jpg"):
                self.assertEqual(Image.open(os.path.join(d, f)).size, (C.W, C.H))

    def test_adaylar_yalnizca_gecmis_slot(self):
        simdi = __import__("datetime").datetime.now(__import__("datetime").timezone.utc).isoformat()
        for a in C.adaylar():
            self.assertLessEqual(a["slot"], simdi)
            self.assertTrue(a["id"])


if __name__ == "__main__":
    unittest.main()
