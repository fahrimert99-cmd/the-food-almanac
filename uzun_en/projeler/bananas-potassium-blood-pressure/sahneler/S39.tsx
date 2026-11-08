// Sahne 39 — efsane: muz en iyi potasyum kaynağı değil; fasulye, mercimek, patates, yoğurt da listede
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMyth = K(0, "myth");
  const tBan = K(0, "bananas");
  const tGood = K(1, "good source");
  const tBut = K(1, "but");
  const tBeans = K(1, "beans");
  const tPot = K(1, "potatoes");
  const tYog = K(1, "yogurt");
  const tNkf = K(1, "National");
  const tList = K(1, "list");
  const [s1, a1] = pop(t, tMyth, 0.5);
  const [s2, a2] = pop(t, tList, 0.55);
  return (
    <>
      {/* pencere sağ alttaki imzayı (y>970) dışarıda tutar */}
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [100, 10, 1700], [130, 14, 1660])}>
        <Etiket t={t} bas={tBan} capa={[330, 540]} konum={[430, 370]} metin="BANANAS" renk={RENK.altin} />
        <Etiket t={t} bas={tBeans} capa={[860, 700]} konum={[860, 520]} metin="BEANS, LENTILS" renk={RENK.mercan} />
        <Etiket t={t} bas={tPot} capa={[1210, 740]} konum={[1210, 560]} metin="POTATOES" renk={RENK.altin} />
        <Etiket t={t} bas={tYog} capa={[1480, 690]} konum={[1480, 470]} metin="YOGURT" renk={RENK.lacivert} />
      </Kamera>
      {/* 1. cümle: efsane */}
      {t < tGood - 0.2 && (
        <div style={{ position: "absolute", left: 960, top: 70, transform: `translate(-50%, 0) scale(${s1})`, opacity: a1 }}>
          <Hap metin="MYTH" renk={RENK.mercan} boyut={38} />
        </div>
      )}
      <Baslik t={t} bas={tBan} bitis={tGood - 0.2} metin="BEST POTASSIUM FOOD?" x={960} y={200} boyut={100} renk={RENK.lacivert} hiza="orta" />
      {/* 2. cümle */}
      <Baslik t={t} bas={tGood} bitis={tBut - 0.15} metin="A GOOD SOURCE" x={960} y={200} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <BaslikBlok t={t} bas={tBut} bitis={tList - 0.2} satirlar={["NOT THE", "ONLY SOURCE"]} x={960} y={140} boyut={92} hiza="orta" />
      <div style={{ position: "absolute", left: 960, top: 150, transform: `translate(-50%, 0) scale(${s2})`, opacity: a2 }}>
        <Hap metin="HIGH POTASSIUM FOODS LIST" renk={RENK.lacivert} boyut={44} />
      </div>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tNkf} />
    </>
  );
};

export default S39;
