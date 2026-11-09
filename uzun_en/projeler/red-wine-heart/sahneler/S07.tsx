// Sahne 7 — damar tüpü: trombositler ve "biraz daha az yapışkan". İmza kamera dışında.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [190, 70, 1700], [260, 100, 1500]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={w} sinirla={false}>
        <Etiket t={t} bas={K(1, "Alcohol")} capa={[1217, 490]} konum={[1520, 380]} metin="ALCOHOL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "platelets,")} capa={[507, 677]} konum={[480, 480]} metin="PLATELET" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "platelets,") + 0.35} capa={[707, 595]} konum={[900, 470]} metin="PLATELET" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "offered")} bitis={c[1].bas} metin="A PROPOSED" x={230} y={160} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "mechanism.")} bitis={c[1].bas} metin="MECHANISM" x={230} y={270} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "start")} metin="PLATELETS: CELLS THAT START CLOTS" x={230} y={150} boyut={34} renk={RENK.altin} font="inter" aralik={3} />
      <Baslik t={t} bas={K(1, "less")} metin="LESS STICKY" x={226} y={250} boyut={120} renk={RENK.koyuYesil} />
    </>
  );
};

export default S07;
