// Sahne 25 — yiyecek nereden geldi: %61 mağaza, %17 fast food/pizza, %11 garsonlu restoran.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhere = K(0, "where the food"), t61 = K(1, "61"), t17 = K(2, "17"), t11 = K(2, "11"), tWait = K(2, "waitstaff");
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const Y = 120;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={pen}>
        <Etiket t={t} bas={tWait - 0.4} capa={[1520, 650]} konum={[1330, 900]} metin="WAITSTAFF" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tWhere} satirlar={["MOSTLY", "STORE-BOUGHT"]} x={1030} y={Y + 20} boyut={70} />
      <VurguRozet t={t} bas={t61} vurgu="61%" not="STORES" x={1150} y={275} genislik={270} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t17} vurgu="17%" not="FAST FOOD & PIZZA" x={1440} y={275} genislik={270} boyut={84} renk={RENK.altin} />
      <VurguRozet t={t} bas={t11} vurgu="11%" not="WAITSTAFF RESTAURANTS" x={1730} y={275} genislik={270} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S25;
