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

    def test_kap_icerigi_ayri_nesne_olmaz(self):
        # kıyas bulguları (walnuts-heart 5, 6, 12, 26): ölçü kabı fincan, büyüteç bardak olmuyor; cevizler kabın içinde
        self.assertEqual(G.lemo_nesneler("a small kitchen scale holding a handful of walnuts, a quarter cup measure of walnut halves standing beside it"),
                         [["scale", "walnuts"], ["measure", "walnuts"]])
        self.assertEqual(G.lemo_nesneler("small golden droplets rising from the walnut halves in a bowl"), [["bowl", "walnuts"]])
        self.assertEqual(G.lemo_nesneler("a tall stack of research folders with blank covers beside a bowl of walnuts and an antique brass magnifying glass"),
                         [["notebook", "stack"], ["bowl", "walnuts"], ["magnifier", None]])
        self.assertEqual(G.lemo_nesneler("a set of old-fashioned kitchen scales with a bowl of walnuts on one tray, tape measure curled beside it"),
                         [["scale", "walnuts"], ["tape", None]])
        self.assertEqual(G.lemo_nesneler("a pair of balance scales, one pan holding eggs and the other holding a small pile of pale round particles"),
                         [["scale", "eggs"]])

    def test_yalnizca_tuketen_desen(self):
        self.assertEqual(G.lemo_nesneler("a bowl of prunes beside a paper pill bag and a small brass scale"), [["bowl", "prunes"], ["scale", None]])
        self.assertEqual(G.lemo_nesneler("a frying pan with eggs on a stove"), [["egg", None]])

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
