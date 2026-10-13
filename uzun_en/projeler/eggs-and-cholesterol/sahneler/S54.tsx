// Sahne 54 — ipucu 5: kendi değerlerini bil, doktora danış.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const AdimNo: React.FC<{ t: number; bas: number; n: number; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - 44, top: y - 44, width: 88, height: 88, borderRadius: "50%", background: RENK.altin,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={K(2, "LDL")} capa={[280, 690]} konum={[760, 600]} metin="YOUR LDL" renk={RENK.altin} />
      </Kamera>
      <AdimNo t={t} bas={0.05} n={5} x={110} y={185} />
      <BaslikBlok t={t} bas={0.3} satirlar={["SAFETY", "FIRST"]} x={1860} y={200} boyut={110} hiza="sag" />
      <Liste t={t} x={1020} y={500} boyut={36} aralik={84} genislik={840} isaret="nokta" ogeler={[
        { bas: K(2, "LDL"), metin: "HIGH LDL?", renk: RENK.mercan },
        { bas: K(2, "statin"), metin: "ON A STATIN?", renk: RENK.mercan },
      ]} />
      <Liste t={t} x={1020} y={668} boyut={36} aralik={84} genislik={840} isaret="onay" ogeler={[
        { bas: K(2, "keep"), metin: "KEEP TAKING IT", renk: RENK.yesil },
        { bas: K(2, "talk"), metin: "TALK TO YOUR DOCTOR FIRST", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S54;
