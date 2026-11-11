// Sahne 5 — iki kavanoz; sağ sütunda suda ve yağda çözünenler.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const turuncu = "#D9772B";
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1840])}>
        <Etiket t={t} bas={K(1, "water")} capa={[400, 760]} konum={[170, 930]} metin="WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "dissolve")} capa={[1090, 790]} konum={[1100, 150]} metin="FAT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(1, "Vitamin")} metin="WATER-SOLUBLE" x={1860} y={170} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1380} y={250} aralik={80} boyut={34} genislik={500} ogeler={[
        { bas: K(1, "C,"), metin: "VITAMIN C", renk: RENK.lacivert },
        { bas: K(1, "folate"), metin: "FOLATE", renk: RENK.lacivert },
        { bas: K(1, "B"), metin: "B VITAMINS", renk: RENK.lacivert },
      ]} />
      <Baslik t={t} bas={K(2, "Carotenoids,")} metin="FAT-SOLUBLE" x={1860} y={600} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1380} y={680} aralik={80} boyut={34} genislik={500} ogeler={[
        { bas: K(2, "orange,"), metin: "ORANGE", renk: turuncu },
        { bas: K(2, "red"), metin: "RED", renk: RENK.mercan },
        { bas: K(2, "green"), metin: "GREEN", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S05;
