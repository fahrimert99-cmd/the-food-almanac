// Sahne 37 — mide asidi yaşla azalır; asit azaltıcı ilaçlar da B12'yi etkileyebilir.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAcid = K(0, "stomach"), tFalls = K(0, "falls"), tRel = K(0, "release");
  const tMed = K(1, "acid-reducing"), tPril = K(1, "prilosec"), tInt = K(1, "interfere");
  const w = kameraYolu(t, s.sure, [0, 30, 1900], [60, 70, 1780]);
  const bit0 = tMed - 0.1;
  const [sc, al] = pop(t, tPril, 0.5);
  const [sc2, al2] = pop(t, tInt, 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={w} />
      <Baslik t={t} bas={tFalls - 0.1} bitis={bit0} metin="ACID FALLS WITH AGE" x={1270} y={210} boyut={60} renk={RENK.lacivert} />
      <Etiket t={t} bas={tAcid} bitis={bit0} capa={[900, 440]} konum={[1430, 110]} metin="STOMACH ACID" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tRel} bitis={bit0} capa={[830, 650]} konum={[200, 380]} metin="B12 IN FOOD" renk={RENK.mercan} boyut={26} />
      <Baslik t={t} bas={tMed} metin="ACID-REDUCING MEDICINES" x={1230} y={135} boyut={50} renk={RENK.mercan} />
      {al > 0 && <div style={{ position: "absolute", left: 1230, top: 175, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="E.G. PRILOSEC" renk={RENK.altin} boyut={26} /></div>}
      {al2 > 0 && <div style={{ position: "absolute", left: 1230, top: 232, opacity: al2, transform: `scale(${sc2})`, transformOrigin: "0% 50%" }}>
        <Hap metin="CAN INTERFERE TOO" renk={RENK.mercan} boyut={26} /></div>}
    </>
  );
};

export default S37;
