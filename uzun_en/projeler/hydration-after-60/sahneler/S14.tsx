import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 14 — yazarların sonucu: terazi
const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "thirst")} capa={[450, 610]} konum={[230, 800]} metin="LESS THIRST" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "water intake")} capa={[1290, 580]} konum={[1560, 780]} metin="LESS WATER INTAKE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "hormone")} capa={[1330, 255]} konum={[1560, 130]} metin="HORMONE STILL WORKING" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "authors")} metin="THE AUTHORS' CONCLUSION" x={70} y={100} boyut={26} renk={RENK.altin} font="inter" agirlik={800} aralik={5} />
      <Baslik t={t} bas={K(0, "real deficit")} metin="REAL DEFICIT" x={70} y={190} boyut={100} renk={RENK.lacivert} />
    </>
  );
};
export default S14;
