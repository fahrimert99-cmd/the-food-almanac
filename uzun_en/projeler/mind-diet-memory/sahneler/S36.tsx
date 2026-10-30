// Sahne 36 — açıklama 3: diyetisyen desteği, iki diyet arasındaki fark daralır.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGap = K(2, "narrowed");
  const [sc, al] = pop(t, tGap, 0.5);
  const ok = eout(ilerle(t, tGap + 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1760])} />
      <Baslik t={t} bas={K(0, "support")} bitis={7.8} metin="THE SUPPORT" x={140} y={150} boyut={96} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "dietitian")} capa={[1500, 610]} konum={[1400, 880]} metin="DIETITIAN COACHING" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "control")} capa={[1140, 640]} konum={[950, 840]} metin="CONTROL DIET" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "two")} capa={[440, 600]} konum={[440, 840]} metin="MIND DIET" renk={RENK.mercan} />
      {/* iki ok içe doğru: fark daralıyor */}
      <div style={{ position: "absolute", left: 870, top: 150, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ transform: `translateX(${(1 - ok) * -30}px)` }}><IkonYol ad="ok" boyut={64} renk={RENK.mercan} /></div>
        <Hap metin="GAP MAY NARROW" renk={RENK.altin} />
        <div style={{ transform: `translateX(${(1 - ok) * 30}px) scaleX(-1)` }}><IkonYol ad="ok" boyut={64} renk={RENK.mercan} /></div>
      </div>
    </>
  );
};

export default S36;
