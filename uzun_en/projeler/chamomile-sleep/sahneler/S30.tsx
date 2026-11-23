// Sahne 30 — NIH: kanıt zayıf. Kitap yığını, çay ve papatya tabağı; NIH sayfası → tek çalışma → fayda yok.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThin = K(0, "thin.");
  const tSayfa = K(1, "chamomile page");
  const tCalisma = K(1, "one study");
  const tFayda = K(1, "no benefit");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tSayfa} bitis={tCalisma + 0.3} capa={[600, 420]} konum={[620, 300]} metin="NIH · CHAMOMILE PAGE" renk={RENK.altin} />
        <Etiket t={t} bas={tCalisma} capa={[1420, 690]} konum={[1500, 540]} metin="ONE STUDY · 2019 REVIEW" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={K(0, "National")} metin="NATIONAL INSTITUTES OF HEALTH" x={146} y={92} boyut={30} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={tThin} metin="EVIDENCE IS THIN" x={140} y={190} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tFayda} vurgu="NO BENEFIT" not="in that one study" x={1420} y={130} genislik={440} boyut={78} renk={RENK.mercan} />
    </>
  );
};

export default S30;
