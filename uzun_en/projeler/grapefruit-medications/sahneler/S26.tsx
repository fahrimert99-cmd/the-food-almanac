import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGf = K(0, "grapefruit"), tNot = K(0, "does not"), tCls = K(0, "classes");
  const tSo = K(1, "so you can't"), tFam = K(1, "drug family"), tAsk = K(2, "the only way");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <AltSis a={0.5} yukseklik={140} />
      <Etiket t={t} bas={tGf} bitis={tNot} capa={[940, 700]} konum={[940, 480]} metin="GRAPEFRUIT" renk={RENK.mercan} boyut={26} />
      <BaslikBlok t={t} bas={tNot} bitis={tSo - 0.15} satirlar={["NOT EVERY", "DRUG"]} x={1860} y={190} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={tCls} bitis={tSo - 0.15} capa={[1560, 620]} konum={[1560, 430]} metin="DRUG CLASSES" renk={RENK.altin} boyut={26} />
      <BaslikBlok t={t} bas={tSo} bitis={tAsk - 0.15} satirlar={["CAN'T TELL FROM", "DRUG FAMILY ALONE"]} x={1860} y={190} boyut={72} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["THE ONLY WAY", "TO KNOW: ASK"]} x={1860} y={190} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(2, "ask")} capa={[480, 560]} konum={[560, 300]} metin="ASK" renk={RENK.yesil} boyut={34} />
    </>
  );
};
export default S26;
