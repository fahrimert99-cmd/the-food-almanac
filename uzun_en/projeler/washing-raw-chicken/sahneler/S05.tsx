import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 5 — Anneden kalan alışkanlık
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tListe = K(2, "feels clean");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "rinsing chicken")} bitis={c[1].bas} capa={[880, 770]} konum={[1150, 900]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "parent")} bitis={c[2].bas - 0.1} capa={[290, 500]} konum={[270, 840]} metin="A PARENT'S HABIT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "habit")} bitis={c[1].bas + 0.3} satirlar={["A HABIT", "PASSED", "DOWN"]} x={1440} y={300} boyut={86} adim={0.25}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1425} y={330} aralik={150} boyut={34} isaret="onay" genislik={470} ogeler={[
        { bas: tListe, metin: "FEELS CLEAN" },
        { bas: K(2, "washing a vegetable"), metin: "LIKE WASHING A VEGETABLE" },
        { bas: K(2, "careful"), metin: "FEELS CAREFUL" },
      ]} />
    </>
  );
};
export default S05;
