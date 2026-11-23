// Sahne 56 — portakal suyu günlük ihtiyacı karşılar; yüksek doz takviye ~2× böbrek taşı.
import React from "react";
import { Etiket, Hap, IkonYol, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "but"), 0.5);
  const [s2, a2] = pop(t, K(0, "tested,"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <Etiket t={t} bas={K(0, "Orange")} capa={[520, 420]} konum={[250, 150]} metin="ORANGE JUICE" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 250, top: 235, transform: `translate(-50%,0) scale(${s2})`, opacity: a2 }}>
        <Hap metin="NOT TESTED" renk={RENK.gri} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 480, top: 890, transform: `translate(-50%,0) scale(${s1})`, opacity: a1 }}>
        <Hap metin="MEETS DAILY NEED" renk={RENK.yesil} boyut={32} style={{ borderColor: RENK.yesil }} />
      </div>
      <Etiket t={t} bas={K(1, "supplements")} capa={[1290, 600]} konum={[1180, 100]} metin="HIGH-DOSE SUPPLEMENTS" renk={RENK.mercan} boyut={26} />
      <VurguRozet t={t} bas={K(1, "twice")} vurgu="≈ 2×" not="KIDNEY STONES · MEN" x={1680} y={90} genislik={380} renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "kidney")} capa={[1640, 640]} konum={[1640, 900]} metin="KIDNEY STONES" renk={RENK.mercan} />
    </>
  );
};

export default S56;
