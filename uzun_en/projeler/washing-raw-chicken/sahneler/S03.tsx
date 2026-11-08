import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 3 — Videonun vaadi
const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "simple routine"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [160, 110, 1620])}>
        <Etiket t={t} bas={K(0, "truly makes")} capa={[780, 640]} konum={[600, 890]} metin="WHAT MAKES IT SAFE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.1} metin="BY THE END" x={1180} y={74} boyut={34} renk={RENK.altin} hiza="orta" font="inter" aralik={8}
        style={{ textShadow: "0 0 12px #F6F3EC, 0 0 12px #F6F3EC" }} />
      <div style={{ position: "absolute", left: 1420, top: 200, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="A SIMPLE ROUTINE" renk={RENK.lacivert} boyut={40} />
      </div>
    </>
  );
};
export default S03;
