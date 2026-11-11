// Sahne 32 — Yağ takası: FDA nitelikli sağlık iddiası (1½ yemek kaşığı / ~20 g, doymuş yağın yerine).
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYag = K(0, "fat swap"), tBir = K(1, "one and a half"), tGram = K(1, "20 grams");
  const tDoy = K(1, "saturated"), tKalp = K(1, "heart disease"), tYerine = K(1, "replacing");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={tYag} capa={[707, 590]} konum={[1010, 640]} metin="OLIVE OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={tDoy} capa={[330, 500]} konum={[330, 230]} metin="SATURATED FAT" renk={RENK.mercan} />
        <Etiket t={t} bas={tKalp} capa={[620, 300]} konum={[900, 230]} metin="HEART" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tBir} satirlar={["1½ TBSP", "A DAY"]} x={1860} y={290} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tGram} metin="about 20 grams · the amount in the FDA's qualified claim" x={1860} y={520} hiza="sag" genislik={640} boyut={32} />
      <AdimAkisi t={t} x={1390} y={800} boyut={30} numarali={false} adimlar={[
        { bas: tYerine, metin: "SATURATED FAT", renk: RENK.mercan },
        { bas: tYerine + 0.6, metin: "OLEIC-RICH OIL", renk: RENK.yesil },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "FDA")} />
    </>
  );
};

export default S32;
