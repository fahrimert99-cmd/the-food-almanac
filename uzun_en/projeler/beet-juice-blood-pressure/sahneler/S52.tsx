// Sahne 52 — "One last point." Çoğu çalışma suyla yapıldı; haşlanmış pancar/salata için kanıt yok.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMost = K(1, "Most"), tPlate = K(2, "plate"), tSalad = K(2, "salad"), tBoth = K(2, "both");
  const tNeeds = K(3, "needs");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={tPlate} bitis={tNeeds - 0.1} capa={[800, 700]} konum={[330, 330]} metin="BOILED BEETS?" renk={RENK.mercan} />
        <Etiket t={t} bas={tSalad} bitis={tNeeds - 0.1} capa={[1000, 380]} konum={[1010, 120]} metin="SALAD?" renk={RENK.yesil} />
        <Etiket t={t} bas={tBoth} bitis={tNeeds - 0.1} capa={[1500, 300]} konum={[1420, 125]} metin="BOTH HAVE NITRATE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tMost} bitis={tPlate - 0.1} metin="MOST TRIALS USED JUICE" x={80} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNeeds} metin="MORE RESEARCH NEEDED" x={80} y={110} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S52;
