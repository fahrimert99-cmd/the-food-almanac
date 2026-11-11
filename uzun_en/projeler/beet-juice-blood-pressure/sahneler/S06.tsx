// Sahne 6 — şişeler arası fark: toprak, gübre, hasat zamanı; nitrat miktarı değişir.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1760])}>
        <Etiket t={t} bas={K(2, "bottled")} bitis={9.4} capa={[300, 560]} konum={[330, 120]} metin="BOTTLED JUICES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "nitrate")} capa={[1390, 780]} konum={[1500, 450]} metin="HOW MUCH NITRATE?" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "varies")} metin="NO TWO" x={1860} y={130} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "lot")} metin="BOTTLES ALIKE" x={1860} y={236} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} x={1060} y={340} boyut={34} aralik={72} isaret="nokta" genislik={760} ogeler={[
        { bas: K(1, "Soil"), metin: "SOIL", renk: RENK.altin, bitis: 5.0 },
        { bas: K(1, "fertilizer"), metin: "FERTILIZER", renk: RENK.altin, bitis: 5.0 },
        { bas: K(1, "harvest"), metin: "HARVEST TIME", renk: RENK.altin, bitis: 5.0 },
      ]} />
    </>
  );
};

export default S06;
