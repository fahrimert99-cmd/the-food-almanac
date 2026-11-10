// Sahne 24 — aynı çalışma en önemli güvenlik bulgusunu verdi; birazdan anlatılacak.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "moment"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1750])}>
        <Etiket t={t} bas={K(0, "safety")} capa={[880, 420]} konum={[420, 200]} metin="SAFETY FINDING" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "same")} satirlar={["SAME", "TRIAL"]} x={100} y={420} boyut={110} />
      <div style={{ position: "absolute", left: 1440, top: 250, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MORE IN A MOMENT" renk={RENK.altin} boyut={36} />
      </div>
    </>
  );
};
export default S24;
