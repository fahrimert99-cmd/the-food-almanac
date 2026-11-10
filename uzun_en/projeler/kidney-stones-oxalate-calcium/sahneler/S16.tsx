// Sahne 16 — köprü: tek çalışma yetmez, sırada daha büyük ve yıllarca izleyen çalışmalar (kitap rafı).
import React from "react";
import { Baslik, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t120 = K(0, "120"), tStory = K(0, "whole story");
  const tLarger = K(1, "larger"), tYears = K(1, "for years");
  return (
    <>
      {/* sol üstteki tarama kusuru pencere dışında tutulur */}
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [270, 120, 1500], [330, 150, 1400])} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 310,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 75%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={0.2} bitis={tLarger - 0.1} metin="ONE TRIAL" x={90} y={90} boyut={100} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t120} bitis={tLarger - 0.1} vurgu="120 MEN" not="isn't the whole story" x={720} y={40} genislik={420} boyut={64} renk={RENK.altin} />
      <Baslik t={t} bas={tLarger} metin="MUCH LARGER STUDIES" x={90} y={90} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={tYears} metin="followed people for years" x={96} y={150} boyut={34} />
    </>
  );
};

export default S16;
