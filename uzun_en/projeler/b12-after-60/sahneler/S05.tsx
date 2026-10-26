// Sahne 5 — kırmızı hücreler ve sinirler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 120, 1920], [60, 150, 1800]);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={p}>
        <Etiket t={t} bas={K(0, "red blood")} capa={[600, 575]} konum={[600, 330]} metin="RED CELLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "nerves")} capa={[1560, 520]} konum={[1560, 250]} metin="NERVES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Vitamin") + 0.2} satirlar={["NERVES AND", "RED CELLS"]} x={960} y={790} boyut={96} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "small")} metin="A SMALL VITAMIN, A BIG JOB" x={960} y={170} hiza="orta" boyut={44} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S05;
