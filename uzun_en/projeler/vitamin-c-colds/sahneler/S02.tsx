// Sahne 2 — "kim" ve "ne zaman": iki soru etiketi + lens üzerinde soru simgesi.
import React from "react";
import { Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [120, 30, 1680])}>
        <Ikon t={t} bas={K(0, "twist")} ad="soru" x={850} y={190} boyut={110} zemin={RENK.altin} />
        <Etiket t={t} bas={K(0, "who")} capa={[1460, 700]} konum={[1560, 470]} metin="WHO?" renk={RENK.mercan} boyut={40} />
        <Etiket t={t} bas={K(0, "when")} capa={[760, 720]} konum={[420, 430]} metin="WHEN?" renk={RENK.koyuYesil} boyut={40} />
      </Kamera>
    </>
  );
};

export default S02;
