// Sahne 49 — "Reverse osteoporosis?" abartı düzeltmesi: başlık + yavaşlayan kayıp listesi.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(1, "Nothing");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* kâseyi gösteren etiket */}
        <Etiket t={t} bas={K(0, "prunes") - 0.1} bitis={tNot - 0.1} capa={[830, 700]} konum={[900, 500]} metin="PRUNES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "reverse") - 0.1} satirlar={["REVERSE", "OSTEOPOROSIS?"]} x={1860} y={250} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={tNot} ad="carpi" x={800} y={340} zemin={RENK.mercan} />
      <Not t={t} bas={tNot + 0.2} metin="not shown in these trials" x={1860} y={450} hiza="sag" genislik={640} boyut={36} agirlik={700} />
      <Liste t={t} x={1160} y={560} aralik={84} boyut={38} isaret="onay" genislik={700} ogeler={[
        { bas: K(2, "slower"), metin: "SLOWER HIP BONE LOSS" },
        { bas: K(2, "over a year"), metin: "OVER A YEAR" },
        { bas: K(2, "in women"), metin: "IN WOMEN" },
        { bas: K(2, "measured"), metin: "MEASURED BY BONE DENSITY" },
      ]} />
    </>
  );
};

export default S49;
