// Sahne 3 — mutfak rafı, söz: ne zaman yer hak eder, nasıl sayılır
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1760])}>
        <Etiket t={t} bas={K(0, "honey")} capa={[320, 700]} konum={[330, 250]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kitchen")} capa={[830, 710]} konum={[830, 520]} metin="SUGAR" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "earns")} metin="A PLACE" x={1860} y={250} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "earns") + 0.15} metin="IN YOUR KITCHEN?" x={1860} y={370} boyut={90} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "how")} metin="HOW TO COUNT IT" x={1860} y={520} boyut={64} hiza="sag" renk={RENK.altin} />
    </>
  );
};

export default S03;
