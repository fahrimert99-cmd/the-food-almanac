// Sahne 1 — 1 dakikalık onaylı demodan uyarlandı.
import React from "react";
import { AbsoluteFill, AltSis, ANTON, Baslik, Etiket, GorselKart, Img, INTER, Kamera, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, kis, pop, random, staticFile } from "../kutuphane";

// --- 1. Aynı öğün ---------------------------------------------------------------
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tPanel = c[2].bas - 0.45;
  const pPan = einout(ilerle(t, tPanel, 1.0));
  const zoom = ilerle(t, 0, s.sure);
  // yavaş yakınlaşma; panelde görüntü sola kayar
  const w = 1840 - 90 * zoom - 60 * pPan;
  const x = 40 + 30 * zoom + 270 * pPan;
  const cikis = c[2].bas - 0.55;
  const pGiris = 1 - eout(ilerle(t, c[1].bas - 0.2, 0.5));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={[x, 20 + 25 * zoom, w]} sinirla={false}>
        <Etiket t={t} bas={K(1, "Grilled chicken")} bitis={cikis} capa={[1060, 640]} konum={[1655, 700]} metin="GRILLED CHICKEN" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "green salad")} bitis={cikis} capa={[690, 450]} konum={[250, 420]} metin="GREEN SALAD" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "steamed broccoli")} bitis={cikis} capa={[790, 745]} konum={[250, 800]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "slice of bread")} bitis={cikis} capa={[1000, 300]} konum={[660, 110]} metin="BREAD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "orange juice")} bitis={cikis} capa={[1345, 180]} konum={[1700, 330]} metin="ORANGE JUICE" renk={RENK.mercan} />
      </Kamera>
      {/* Giriş: sol sütunda başlık (çatal bölgesi hafifçe örtülür) */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 700, opacity: pGiris * eout(ilerle(t, K(0, "same lunch") - 0.3, 0.5)),
        background: `linear-gradient(to right, ${kagit(0.95)} 0%, ${kagit(0.9)} 62%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "same lunch") - 0.25} bitis={c[1].bas - 0.2} metin="PICTURE THIS" x={54} y={386} boyut={26} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "same lunch")} bitis={c[1].bas - 0.2} metin="SAME LUNCH," x={50} y={462} boyut={78} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "two different days")} bitis={c[1].bas - 0.2} metin="TWO DAYS." x={50} y={562} boyut={78} renk={RENK.koyuYesil} />
      {/* Kapanış: sağ panelde "SAME ..." */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 820, opacity: pPan,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(0.95)} 26%, ${kagit(0.98)} 100%)` }} />
      {(["SAME FOOD.", "SAME PORTIONS.", "SAME PERSON."] as const).map((m, k) => (
        <Baslik key={m} t={t} bas={c[2 + k].bas} metin={m} x={1860} y={380 + k * 118} boyut={96} hiza="sag"
          renk={k === 2 ? RENK.altin : RENK.lacivert} />
      ))}
    </>
  );
};

export default S01;
