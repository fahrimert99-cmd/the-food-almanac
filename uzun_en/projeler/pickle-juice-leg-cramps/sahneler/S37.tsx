// Sahne 37 — terazi: fark haftada çeyrek kramptan az; aralık "fayda yok"u da içeriyor.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDif = K(0, "difference"), tQ = K(0, "quarter"), tRange = K(0, "range");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1740]);
  const [sH, aH] = pop(t, tRange, 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={p} />
      <Etiket t={t} bas={tDif} capa={[960, 200]} konum={[960, 80]} metin="NEARLY LEVEL" renk={RENK.altin} boyut={28} />
      <VurguRozet t={t} bas={tQ} vurgu="< 1/4" not="cramp per week" x={290} y={730} genislik={400} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1490, top: 800, transform: `translate(-50%,-50%) scale(${sH})`, opacity: aH }}>
        <Hap metin="RANGE INCLUDES NO BENEFIT" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S37;
