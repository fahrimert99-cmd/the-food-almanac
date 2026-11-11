// Sahne 33 — önce besin, takviye yalnızca boşluğu doldurmak için.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.2;
  const [sc, al] = pop(t, K(0, "supplements"), 0.5);
  const a = al * (1 - eout(ilerle(t, bit, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 30, 1790])}>
        <Baslik t={t} bas={K(0, "from food")} bitis={bit} metin="FOOD" x={90} y={190} boyut={120} renk={RENK.koyuYesil} />
        <Baslik t={t} bas={K(0, "first,")} bitis={bit} metin="FIRST" x={90} y={310} boyut={120} renk={RENK.lacivert} />
        <div style={{ position: "absolute", left: 90, top: 560, opacity: a, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
          <Hap metin="SUPPLEMENTS: FILL A GAP" renk={RENK.altin} boyut={26} />
        </div>
        <Etiket t={t} bas={K(1, "food is")} capa={[760, 330]} konum={[1020, 160]} metin="MILK" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "calcium can")} capa={[980, 680]} konum={[1010, 850]} metin="CHEESE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "comfortable")} capa={[1300, 540]} konum={[1640, 720]} metin="CANNED SALMON" renk={RENK.mercan} />
      </Kamera>
    </>
  );
};

export default S33;
