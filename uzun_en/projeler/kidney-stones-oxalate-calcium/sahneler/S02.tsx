// S02 — sıra halinde masa: kazanan diyet kalsiyumdan fazlasını değiştirdi
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWin = K(0, "winning"), tMore = K(0, "more than"), tCa = K(0, "calcium.");
  const w = kameraYolu(t, s.sure, [40, 40, 1880], [120, 80, 1700]);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={w}>
        <Etiket t={t} bas={tCa} capa={[380, 400]} konum={[760, 310]} metin="CALCIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tWin} metin="THE WINNING DIET" x={960} y={140} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Ikon t={t} bas={tMore} ad="soru" x={1560} y={330} boyut={110} renk={RENK.lacivert} zemin={RENK.kagitAcik} />
    </>
  );
};

export default S02;
