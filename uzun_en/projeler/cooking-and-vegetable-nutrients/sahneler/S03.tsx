// Sahne 3 — dört pişirme aracı; yöntem etiketleri sırayla.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [60, 150, 1800])}>
        <Etiket t={t} bas={K(0, "boil")} capa={[330, 560]} konum={[330, 200]} metin="BOIL" renk={RENK.mercan} boyut={40} />
        <Etiket t={t} bas={K(0, "steam")} capa={[750, 560]} konum={[750, 200]} metin="STEAM" renk={RENK.yesil} boyut={40} />
        <Etiket t={t} bas={K(0, "microwave")} capa={[1120, 600]} konum={[1120, 200]} metin="MICROWAVE" renk={RENK.altin} boyut={40} />
        <Etiket t={t} bas={K(0, "roast")} capa={[1560, 600]} konum={[1560, 200]} metin="ROAST" renk={RENK.lacivert} boyut={40} />
      </Kamera>
    </>
  );
};

export default S03;
