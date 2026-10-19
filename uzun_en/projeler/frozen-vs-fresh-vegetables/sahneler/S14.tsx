// Sahne 14 — dondurulmuş bezelye, brokoli ve ıspanak.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const t1 = K(0, "close"), t2 = K(0, "better"), tS = K(1, "Frozen");
  const bitis = tS - 0.15;
  const [s1, a1] = pop(t, t1 - 0.2, 0.5);
  const [s2, a2] = pop(t, t2 - 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={K(0, "peas")} bitis={t1 + 1.2} capa={[1250, 480]} konum={[1380, 250]} metin="FROZEN PEAS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "broccoli")} bitis={t1 + 1.2} capa={[500, 420]} konum={[200, 390]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "spinach")} capa={[1700, 740]} konum={[1540, 500]} metin="FROZEN SPINACH" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={b.satirlar} x={1860} y={205} boyut={84} hiza="sag" />
      <div style={{ position: "absolute", left: 70, top: 100, opacity: sol(t, bitis), transform: `scale(${s1})`, transformOrigin: "0 50%" }}>
        <div style={{ opacity: a1 }}><Hap metin="CLOSE TO SHOP-BOUGHT" renk={RENK.altin} boyut={30} /></div>
      </div>
      <div style={{ position: "absolute", left: 70, top: 196, opacity: sol(t, bitis), transform: `scale(${s2})`, transformOrigin: "0 50%" }}>
        <div style={{ opacity: a2 }}><Hap metin="BETTER THAN HOME-STORED PEAS" renk={RENK.yesil} boyut={30} /></div>
      </div>
      <VurguRozet t={t} bas={K(1, "beat")} vurgu="BEATS ALL" not="MARKET SPINACH TESTED" x={620} y={70} genislik={600} boyut={88} />
    </>
  );
};

export default S14;
