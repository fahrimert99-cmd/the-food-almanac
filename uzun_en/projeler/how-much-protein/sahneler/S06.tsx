// Sahne 6 — günlük işlevler: sandalye, merdiven, market torbası, düşmemek.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tC = K(0, "catching");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={K(0, "standing")} bitis={K(0, "climbing") - 0.1} capa={[640, 600]} konum={[170, 700]} metin="CHAIR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "climbing")} bitis={K(0, "carrying") - 0.1} capa={[1400, 690]} konum={[1620, 470]} metin="STAIRS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "carrying")} bitis={tC - 0.1} capa={[950, 850]} konum={[150, 860]} metin="GROCERIES" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "practical")} bitis={tC - 0.1} metin="PRACTICAL THINGS" x={90} y={90} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tC} metin="CATCHING YOURSELF" x={90} y={90} boyut={72} renk={RENK.mercan} />
    </>
  );
};

export default S06;
