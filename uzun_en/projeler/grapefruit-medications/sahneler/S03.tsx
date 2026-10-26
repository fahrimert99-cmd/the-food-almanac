// Sahne 3 — meyve kasesi: videonun vaadi.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [150, 90, 1620])}>
        <Etiket t={t} bas={K(0, "medicines")} capa={[520, 790]} konum={[380, 580]} metin="MEDICINES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "fruits")} capa={[1220, 540]} konum={[1640, 470]} metin="FRUITS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "end,")} metin="BY THE END, YOU'LL KNOW" x={960} y={110} boyut={30} renk={RENK.altin} hiza="orta" font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "lower")} metin="LOWER RISK" x={1860} y={215} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S03;
