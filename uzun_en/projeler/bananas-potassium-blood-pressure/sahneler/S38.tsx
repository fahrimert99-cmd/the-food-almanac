// Sahne 38 — ölçü: mütevazı etki, ≈5 puan; reçeteli tedavinin yerini tutmaz
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEff = K(0, "effect");
  const tFive = K(1, "five points");
  const tTop = K(1, "top number");
  const tReal = K(1, "real change");
  const tNot = K(1, "does not replace");
  const [s1, a1] = pop(t, tReal, 0.55);
  const [s2, a2] = pop(t, tNot, 0.55);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [30, 100, 1700])}>
        <Etiket t={t} bas={tTop} capa={[353, 650]} konum={[250, 330]} metin="TOP NUMBER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tNot + 0.3} capa={[580, 520]} konum={[960, 300]} metin="PRESCRIBED TREATMENT" renk={RENK.mercan} />
        {/* şişe etiketindeki anlamsız yazıyı örten yama */}
        <div style={{ position: "absolute", left: 534, top: 598, width: 94, height: 80, borderRadius: 8, background: "#8c3b33",
          boxShadow: "inset 0 0 14px rgba(40,10,10,0.4)" }} />
      </Kamera>
      <BaslikBlok t={t} bas={tEff} satirlar={["A MODEST", "EFFECT"]} x={1860} y={180} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={tFive} vurgu="≈ 5" not="points on the top number" x={1560} y={440} genislik={440} />
      <div style={{ position: "absolute", left: 1560, top: 700, transform: `translate(-50%, 0) scale(${s1})`, opacity: a1 }}>
        <Hap metin="A REAL CHANGE" renk={RENK.yesil} boyut={38} />
      </div>
      <div style={{ position: "absolute", left: 1560, top: 790, transform: `translate(-50%, 0) scale(${s2})`, opacity: a2 }}>
        <Hap metin="NOT A REPLACEMENT" renk={RENK.mercan} boyut={38} />
      </div>
      <Ikon t={t} bas={tNot} ad="carpi" x={1262} y={815} boyut={64} zemin={RENK.mercan} />
    </>
  );
};

export default S38;
