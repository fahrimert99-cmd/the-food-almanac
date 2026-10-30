// Sahne 11 — tezgâhta K vitamini kaynakları: yeşillikler, brokoli; küçük miktarlar.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFish = K(1, "Fish,"), tEgg = K(1, "eggs");
  const son = tFish - 0.2;
  const [sc, al] = pop(t, K(0, "MedlinePlus,"), 0.5);
  const [s2, a2] = pop(t, tFish, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "Kale,")} bitis={son} capa={[250, 440]} konum={[230, 210]} metin="KALE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "spinach,")} bitis={son} capa={[800, 640]} konum={[1000, 900]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "collards,")} bitis={son} capa={[680, 370]} konum={[640, 215]} metin="COLLARDS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "turnip")} bitis={son} capa={[1100, 430]} konum={[1020, 215]} metin="TURNIP GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "broccoli")} bitis={son} capa={[1480, 540]} konum={[1500, 860]} metin="BROCCOLI" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tEgg} capa={[1560, 230]} konum={[1200, 110]} metin="EGGS" renk={RENK.altin} />
      </Kamera>
      {/* kaynak hapı */}
      <div style={{ position: "absolute", left: 56, top: 48, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * sol(t, son) }}>
        <Hap metin="MEDLINEPLUS · NATIONAL LIBRARY OF MEDICINE" renk={RENK.altin} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 1450, top: 800, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="FISH · MEAT · EGGS · CEREALS" renk={RENK.altin} boyut={30} />
        <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
          <Hap metin="SMALLER AMOUNTS" renk={RENK.mercan} boyut={30} />
        </div>
      </div>
    </>
  );
};

export default S11;
