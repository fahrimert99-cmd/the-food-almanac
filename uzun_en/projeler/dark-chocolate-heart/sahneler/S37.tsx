// Sahne 37 — kakao yüzdesi tarifi anlatır, işlemeyi değil.
import React from "react";
import { Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [60, 120, 1800], [200, 230, 1600]);
  const [s1, a1] = pop(t, K(1, "recipe"), 0.5);
  const [s2, a2] = pop(t, K(1, "not the processing"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={pen} />
      <Etiket t={t} bas={K(0, "cacao percentage")} bitis={6.9} capa={[830, 330]} konum={[560, 190]} metin="CACAO PERCENTAGE" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "cocoa's flavanols")} bitis={6.9} capa={[1400, 690]} konum={[1540, 880]} metin="COCOA BEANS" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 160, top: 120, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="CACAO % = THE RECIPE" renk={RENK.yesil} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 120, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2, display: "flex", alignItems: "center", gap: 12 }}>
        <Hap metin="NOT THE PROCESSING" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S37;
