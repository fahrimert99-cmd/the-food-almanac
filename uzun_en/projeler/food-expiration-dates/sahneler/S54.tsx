// Sahne 54 — FIVE: formül tarihi kuraldır.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tS2 = s.cumleler[2].bas;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])} />
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1860} y={250} boyut={92} hiza="sag" />
      <Etiket t={t} bas={K(1, "infant")} bitis={K(1, "date") - 0.1} capa={[530, 640]} konum={[850, 130]} metin="INFANT FORMULA" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "date")} bitis={tS2 - 0.1} capa={[530, 640]} konum={[850, 130]} metin="DATE: FEDERAL RULE" renk={RENK.yesil} />
      <Liste t={t} isaret="onay" x={1290} y={520} boyut={32} genislik={590} ogeler={[
        { bas: K(1, "follow"), metin: "FOLLOW THE DATE", renk: RENK.yesil, bitis: tS2 - 0.1 }]} />
      {/* diğer her şey yargıdır */}
      <Baslik t={t} bas={tS2} metin="EVERYTHING ELSE:" x={1290} y={480} boyut={34} renk={RENK.altin} font="inter" aralik={1} />
      <Baslik t={t} bas={K(2, "judgment")} metin="JUDGMENT" x={1290} y={565} boyut={80} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={1290} y={660} aralik={76} boyut={30} genislik={590} ogeler={[
        { bas: K(2, "what"), metin: "WHAT THE FOOD IS", renk: RENK.altin },
        { bas: K(2, "how it was"), metin: "HOW IT WAS STORED", renk: RENK.altin },
        { bas: K(2, "how long"), metin: "HOW LONG IT'S BEEN KEPT", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S54;
