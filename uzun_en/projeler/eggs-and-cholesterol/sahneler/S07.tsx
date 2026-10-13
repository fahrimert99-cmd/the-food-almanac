// Sahne 7 — Kolesterolün iki kaynağı: karaciğer ve yiyecek (yalnızca hayvansal).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslikCikis = K(1, "Some") - 0.1;
  const tDiet = K(2, "dietary");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [60, 80, 1780])}>
        {/* sol alttaki anlamsız karalama kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 60, top: 800, width: 360, height: 110,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(251,245,220,1) 0%, rgba(251,245,220,1) 60%, rgba(251,245,220,0) 100%)` }} />
        <Etiket t={t} bas={K(0, "liver")} bitis={K(1, "Some") + 0.6} capa={[640, 330]} konum={[1150, 480]} metin="LIVER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "food")} bitis={tDiet + 0.4} capa={[830, 760]} konum={[1150, 700]} metin="FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "eggs")} capa={[460, 690]} konum={[1180, 740]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "meat")} capa={[600, 790]} konum={[1180, 860]} metin="MEAT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "dairy")} capa={[700, 640]} konum={[1180, 620]} metin="DAIRY" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} bitis={tBaslikCikis} satirlar={["YOUR LIVER", "MAKES MUCH"]} x={1860} y={170} boyut={96} hiza="sag" />
      <BaslikBlok t={t} bas={tDiet} satirlar={["DIETARY", "CHOLESTEROL"]} x={1860} y={170} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "found only")} metin="ONLY IN ANIMAL FOODS" x={1860} y={400} hiza="sag" boyut={38} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S07;
