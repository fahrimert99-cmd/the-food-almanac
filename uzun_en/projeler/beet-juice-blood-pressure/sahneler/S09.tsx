// Sahne 9 — dil bakterileri: nitrat → nitrit.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNitrat = K(0, "nitrate"), tNitrit = K(0, "nitrite");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1810])}>
        {/* sahte "Bett" yazısı ve kesikli çizgi kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 966, top: 500, width: 346, height: 336,
          background: "rgb(251,249,228)", borderRadius: 40 }} />
      </Kamera>
      <Baslik t={t} bas={tNitrat} metin="NITRATE" x={1010} y={140} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNitrit} metin="→ NITRITE" x={1010} y={232} boyut={88} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "bacteria")} capa={[690, 616]} konum={[1135, 450]} metin="TONGUE BACTERIA" renk={RENK.mercan} boyut={26} />
      <Etiket t={t} bas={K(1, "step")} capa={[640, 840]} konum={[1135, 700]} metin="THE KEY STEP" renk={RENK.altin} boyut={28} />
    </>
  );
};

export default S09;
