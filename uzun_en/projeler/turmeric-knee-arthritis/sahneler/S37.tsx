// Sahne 37 — mutfak zerdeçalı: çorba tenceresi ve kase; sonda "IN YOUR CURRY?" başlığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: ["IN YOUR", "CURRY?"], not: "" };
  const tKitchen = K(0, "kitchen turmeric");
  const tCook = K(1, "Cooking");
  const tStop = K(1, "nothing here");
  const tBaslik = K(2, "pinch");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={tKitchen} bitis={tCook - 0.2} capa={[1000, 760]} konum={[1430, 800]} metin="KITCHEN TURMERIC" renk={RENK.altin} />
        <Etiket t={t} bas={tCook} bitis={tBaslik - 0.15} capa={[520, 455]} konum={[1030, 360]} metin="COOKING WITH IT" renk={RENK.yesil} />
        <Etiket t={t} bas={tStop} bitis={tBaslik - 0.15} capa={[800, 700]} konum={[1250, 640]} metin="NOTHING SAYS STOP" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBaslik} satirlar={b.satirlar} x={1180} y={290} boyut={150} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "curry")} metin={b.not ?? ""} x={1184} y={560} boyut={38} genislik={640} />
    </>
  );
};

export default S37;
