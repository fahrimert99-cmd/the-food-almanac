// Sahne 3 — ne kadar fincan, hangi ilaçlar: iki etiket + uyarı simgesi.
import React from "react";
import { Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIlac = K(0, "medicines");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [90, 120, 1700])}>
        <Etiket t={t} bas={K(0, "many cups")} capa={[330, 440]} konum={[460, 250]} metin="HOW MANY CUPS?" renk={RENK.yesil} />
        <Etiket t={t} bas={tIlac} capa={[1240, 400]} konum={[1300, 250]} metin="WHICH MEDICINES?" renk={RENK.mercan} />
      </Kamera>
      <Ikon t={t} bas={K(0, "clash")} ad="uyari" x={1690} y={560} zemin={RENK.mercan} boyut={92} />
    </>
  );
};

export default S03;
