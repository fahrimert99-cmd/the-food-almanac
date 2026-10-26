// Sahne 25 — asit azaltıcı ilaçlar: iki şişe + mide etiketleri; alttaki sahte yazılar yamayla örtülü.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// kâğıt rengi yama (görsel koordinatı)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse closest-side, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
);

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Yama x={227} y={952} w={380} h={76} />
        <Yama x={1667} y={952} w={380} h={76} />
        <Etiket t={t} bas={K(1, "PPIs")} bitis={K(2, "H2") + 1.5} capa={[640, 650]} konum={[470, 440]}
          metin="PPIs" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "H2")} capa={[807, 700]} konum={[930, 520]} metin="H2 BLOCKERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "stomach")} capa={[1560, 560]} konum={[1640, 230]} metin="LESS STOMACH ACID" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "acid-reducing")} satirlar={b.satirlar} x={90} y={150} boyut={92} hiza="sol" />
      <Not t={t} bas={K(1, "Proton-pump")} metin={b.not!} x={96} y={330} boyut={34} />
    </>
  );
};

export default S25;
