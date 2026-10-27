// Sahne 36 — Okside LDL yüksek fenollü yağla düştü, düşük fenollüyle düşmedi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOx = K(0, "Oxidized"), tFell = K(0, "fell"), tNo = K(0, "did not"), tHint = K(1, "hint");
  const sat = (bas: number, y: number, ik: "ok" | "carpi", zemin: string, m: string, rot = 0) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", right: 60, top: y, opacity: al * sol(t, tHint - 0.2), transform: `scale(${sc})`, transformOrigin: "100% 50%",
        display: "flex", alignItems: "center", gap: 16 }}>
        <Hap metin={m} renk={zemin} boyut={32} />
        <div style={{ width: 84, height: 84, position: "relative" }}><Ikon t={t} bas={bas} ad={ik} x={42} y={42} boyut={84} zemin={zemin} /></div>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1820])}>
        <Etiket t={t} bas={K(0, "LDL")} bitis={tFell + 1.2} capa={[593, 640]} konum={[960, 700]} metin="LDL CHOLESTEROL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "high-phenolic")} bitis={tHint - 0.2} capa={[520, 510]} konum={[960, 380]} metin="HIGH-PHENOLIC OIL" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tOx} satirlar={["OXIDIZED", "LDL"]} x={1860} y={230} boyut={118} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      {sat(tFell, 520, "ok", RENK.yesil, "HIGH-PHENOLIC: FELL")}
      {sat(tNo, 640, "carpi", RENK.gri, "LOW-PHENOLIC: DID NOT FALL")}
      <Not t={t} bas={tHint} metin="A hint that phenolics do something beyond fat alone" x={1860} y={560} hiza="sag" genislik={760} boyut={38} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S36;
