// Sahne 21 — ilk yardım çantası + steteskop + kadeh: her nedenden ölüm, yalnızca kalp değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPr = K(2, "practical part");
  const cik = K(2, "In the") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [70, 50, 1790])} />
      <Baslik t={t} bas={0.05} bitis={cik} metin="ONE MORE POINT" x={140} y={105} boyut={96} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "any cause")} bitis={cik} capa={[900, 420]} konum={[1180, 330]} metin="ALL-CAUSE DEATHS" renk={RENK.mercan} boyut={28} />
      <Etiket t={t} bas={K(1, "heart disease")} bitis={cik} capa={[1250, 700]} konum={[1190, 560]} metin="NOT HEART DISEASE ALONE" renk={RENK.lacivert} boyut={24} />
      <Baslik t={t} bas={tPr - 0.1} metin="THE PRACTICAL PART" x={140} y={105} boyut={80} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(2, "one drink")} capa={[1600, 430]} konum={[1500, 190]} metin="WHAT IS ONE DRINK?" renk={RENK.altin} boyut={28} />
    </>
  );
};

export default S21;
