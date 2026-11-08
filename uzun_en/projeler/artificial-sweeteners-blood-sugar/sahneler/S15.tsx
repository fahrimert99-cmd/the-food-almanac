// Sahne 15 — sonuç tatlandırıcı türüne göre değişmedi; yaş, kilo ve diyabet durumuna göre biraz değişti.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(0, "not"), tType = K(0, "type"), tVar = K(1, "varied"), tAge = K(1, "age,"), tBody = K(1, "body"), tDia = K(1, "diabetes"), tId = K(1, "identical");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 90, 1760])} />
      <BaslikBlok t={t} bas={tNot} bitis={tVar - 0.2} satirlar={["NO DIFFERENCE", "BY TYPE"]} x={90} y={170} boyut={88} />
      <Etiket t={t} bas={tType} bitis={tVar - 0.2} capa={[600, 560]} konum={[760, 330]} metin="SWEETENER TYPES" renk={RENK.altin} />
      <Baslik t={t} bas={tVar} metin="VARIED SOMEWHAT" x={90} y={170} boyut={88} renk={RENK.lacivert} />
      <Liste t={t} x={1490} y={140} aralik={86} boyut={28} genislik={420} ogeler={[
        { bas: tAge, metin: "AGE", renk: RENK.altin },
        { bas: tBody, metin: "BODY WEIGHT", renk: RENK.mercan },
        { bas: tDia, metin: "DIABETES STATUS", renk: RENK.yesil },
      ]} />
      <Baslik t={t} bas={tId} metin="NOT IDENTICAL FOR EVERYONE" x={90} y={290} boyut={50} renk={RENK.koyuYesil} />
    </>
  );
};

export default S15;
