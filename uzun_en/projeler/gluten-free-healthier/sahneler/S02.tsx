// Sahne 2: masa + sol üstte kitle, sağda süre ve sürpriz
import React from "react";
import { AbsoluteFill, ANTON, Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Liste, Not, Panel, Parcaciklar, RENK, SP,
  VurguRozet, BolumKarti, Ikon, MARKA, eout, ilerle, ikiSatir, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(0, "26");
  const [sc, al] = pop(t, K(0, "least"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Baslik t={t} bas={K(0, "Harvard")} metin="HARVARD STUDY" x={90} y={110} boyut={34} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "110,000")} metin="110,000 PEOPLE" x={86} y={225} boyut={120} renk={RENK.lacivert} />
      <Ikon t={t} bas={tYil} ad="saat" x={1500} y={290} zemin={RENK.koyuYesil} />
      <Baslik t={t} bas={tYil + 0.1} metin="26 YEARS" x={1500} y={450} boyut={130} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 1500, top: 580, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin="LEAST GLUTEN" renk={RENK.yesil} boyut={32} />
      </div>
      <Baslik t={t} bas={K(0, "surprise")} metin="A SURPRISE" x={1500} y={740} boyut={110} renk={RENK.mercan} hiza="orta" />
    </>
  );
};
export default S02;
