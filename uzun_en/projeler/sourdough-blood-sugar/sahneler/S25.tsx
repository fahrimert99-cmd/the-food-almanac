// Sahne 25 — iki ekmek yığını: Korem çalışmasının tasarımı (20 yetişkin, birer hafta).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // Kamera: alt köşelerdeki sahte yazılar (y>1040) dışarıda kalır
  const pen = kameraYolu(t, s.sure, [60, 10, 1800], [140, 40, 1640]);
  const [sa, aa] = pop(t, K(0, "two weeks"), 0.5);
  const [sb, ab] = pop(t, K(1, "blood sugar"), 0.55);
  const bas = K(0, "Twenty");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={pen}>
        <Etiket t={t} bas={K(0, "industrial white bread")} capa={[540, 450]} konum={[590, 250]} metin="WHITE BREAD · 1 WEEK" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(0, "traditional whole-grain sourdough")} capa={[1350, 480]} konum={[1350, 320]} metin="WHOLE-GRAIN SOURDOUGH · 1 WEEK" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={bas} bitis={s.cumleler[0].bas + 8.6} metin="20 ADULTS · ONE WEEK EACH" x={960} y={115} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%, -50%) scale(${sa})`, opacity: aa }}>
        <Hap metin="2 WEEKS OFF BETWEEN" renk={RENK.lacivert} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 120, transform: `translate(-50%, -50%) scale(${sb})`, opacity: ab }}>
        <Hap metin="BLOOD SUGAR + OTHER HEALTH MEASURES" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S25;
