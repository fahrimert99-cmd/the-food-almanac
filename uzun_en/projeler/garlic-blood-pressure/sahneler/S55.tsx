// Sahne 55 — üç küçük alışkanlık: ölç, doktora sor, sarımsağı dinlendir.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSmall = K(1, "Small");
  const [s1, a1] = pop(t, K(0, "ask"), 0.5);
  const [s2, a2] = pop(t, K(0, "blood"), 0.5);
  const sol = Math.max(0, Math.min(1, (tSmall - 0.1 - t) / 0.4 + 0));
  const aD = t < tSmall - 0.1 ? 1 : sol;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={K(0, "Check")} capa={[330, 600]} konum={[330, 150]} metin="CHECK NUMBERS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "rest")} capa={[1000, 600]} konum={[900, 830]} metin="LET IT REST" renk={RENK.altin} />
      </Kamera>
      <div style={{ opacity: aD }}>
        {a1 > 0 && (
          <div style={{ position: "absolute", left: 1450, top: 800, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
            <Hap metin="ASK YOUR DOCTOR" renk={RENK.yesil} boyut={32} />
          </div>
        )}
        {a2 > 0 && (
          <div style={{ position: "absolute", left: 1450, top: 890, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
            <Hap metin="ON BLOOD THINNERS" renk={RENK.mercan} boyut={32} />
          </div>
        )}
      </div>
      <BaslikBlok t={t} bas={tSmall} satirlar={["SMALL HABITS,", "KEPT HONEST"]} x={1450} y={800} boyut={80} hiza="orta" />
    </>
  );
};

export default S55;
