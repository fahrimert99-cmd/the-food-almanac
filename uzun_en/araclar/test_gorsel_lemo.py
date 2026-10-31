# -*- coding: utf-8 -*-
"""Lemo yedeği: sahne tarifinden levha nesneleri ve görsel zincirinin sırası."""
import os
import sys
import unittest
from unittest.mock import patch

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import gorsel as G  # noqa: E402


class LemoNesneler(unittest.TestCase):
    def test_tarif_sirasi_ve_cesit(self):
        self.assertEqual(G.lemo_nesneler("a bowl of oatmeal with fresh berries beside a glass of milk"),
                         [["bowl", "oats"], ["berries", None], ["glass", "milk"]])

    def test_ozel_ad_genel_adi_gecer(self):
        self.assertEqual(G.lemo_nesneler("a cruet of olive oil and a bottle of vinegar")[0], ["bottle", "oil"])
        self.assertEqual(G.lemo_nesneler("a bathroom scale with a blank dial beside a small bowl of walnuts")[:2],
                         [["dial", None], ["bowl", "walnuts"]])

    def test_en_cok_uc_ve_eslesmezse_bos(self):
        self.assertEqual(len(G.lemo_nesneler("eggs, toast, an apple, a cup of tea and a jar of honey")), 3)
        self.assertEqual(G.lemo_nesneler("a consultation desk with a stethoscope, quiet afternoon light"), [])

    def test_is_tanimi(self):
        is_ = G.lemo_is(7, {"gorsel": "a mug of coffee", "baslik": {"satirlar": ["X"]}}, "/tmp/07.jpg")
        self.assertEqual((is_["w"], is_["h"], is_["tohum"], is_["sag_bos"]), (1920, 1080, 7, True))
        self.assertFalse(G.lemo_is(7, {"gorsel": "x", "baslik": {"satirlar": ["X"]}}, "/tmp/d.jpg", w=1080, h=1920)["sag_bos"])


class Zincir(unittest.TestCase):
    def test_varsayilan_zincir_lemo_pollinations_oncesi(self):
        with patch.dict(os.environ, {"UZUN_GORSEL_SIRA": ""}):
            z = G.zincir()
        self.assertLess(z.index("lemo"), z.index("pollinations"))
        self.assertEqual(z[:3], ["nvidia", "cloudflare", "gemini"])

    def test_lemo_kalite_kapisinda_yedek_sayilir(self):
        self.assertLess(G.puan("lemo"), 90)
        self.assertGreater(G.puan("lemo"), G.puan("pollinations"))

    def test_uret_lemoyu_tek_tek_cizmez(self):
        with patch.object(G, "_pollinations", return_value=None) as pol:
            self.assertIsNone(G.uret("x", "/tmp/yok.jpg", sira=["lemo"]))
            pol.assert_not_called()


if __name__ == "__main__":
    unittest.main()
