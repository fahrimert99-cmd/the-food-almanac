// Sahne 3 — günlük gram hedefi ve gün içine yayma.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYay = K(0, "spread");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [40, 0, 1840], [70, 0, 1800])}>
        <Etiket t={t} bas={K(0, "grams")} capa={[690, 730]} konum={[900, 860]} metin="IN GRAMS" renk={RENK.altin} />
        <Etiket t={t} bas={tYay} capa={[1440, 640]} konum={[1440, 860]} metin="ACROSS THE DAY" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "daily")} bitis={tYay - 0.1} metin="YOUR DAILY" x={110} y={80} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "number")} bitis={tYay - 0.1} metin="NUMBER" x={110} y={165} boyut={80} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tYay} metin="SPREAD IT" x={110} y={80} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "across")} metin="ACROSS THE DAY" x={110} y={165} boyut={80} renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
