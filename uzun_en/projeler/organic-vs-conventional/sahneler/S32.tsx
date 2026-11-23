// Sahne 32 — mutlak fark %0.6: çilek kasesi solda, sağda başlık + rozet + iki not.
import React from "react";
import { Etiket, Hap, IkonYol, Kamera, BaslikBlok, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "absolute"), tRoz = K(0, "0.6"), tKucuk = K(1, "small shift"), tKanit = K(1, "associations");
  const [s1, a1] = pop(t, tKucuk, 0.5);
  const [s2, a2] = pop(t, tKanit, 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <BaslikBlok t={t} bas={tBas} satirlar={["ABSOLUTE", "DIFFERENCE"]} x={1290} y={250} boyut={96} />
      <VurguRozet t={t} bas={tRoz} vurgu="0.6%" not="OVERALL RESULT" x={1500} y={470} genislik={420} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1290, top: 740, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="A SMALL SHIFT" renk={RENK.altin} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1290, top: 830, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
        <Hap metin="ASSOCIATIONS, NOT PROOF" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};
export default S32;
