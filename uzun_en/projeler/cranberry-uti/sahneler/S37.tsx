// S37 — PAC dozu belirsiz
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tDose = K(0, "Dose"), tDiff = K(1, "no clear difference"), tLow = K(1, "low,"), tMod = K(1, "moderate"), tHigh = K(1, "high"), tMany = K(1, "many products");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [60, 80, 1760])} />
      <Baslik t={t} bas={tDose} metin={b.satirlar[0]} x={1860} y={170} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tDiff} metin={b.not!} x={1860} y={250} hiza="sag" genislik={560} boyut={32} />
      <Liste t={t} isaret="nokta" x={1360} y={470} aralik={86} boyut={36} genislik={500} ogeler={[
        { bas: tLow, metin: "LOW DOSE", renk: RENK.altin },
        { bas: tMod, metin: "MODERATE DOSE", renk: RENK.altin },
        { bas: tHigh, metin: "HIGH DOSE", renk: RENK.altin },
      ]} />
      <Etiket t={t} bas={tMany} capa={[975, 620]} konum={[1500, 850]} metin="PAC OFTEN UNMEASURED" renk={RENK.mercan} />
    </>
  );
};
export default S37;
