import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 5 — Bölüm 1: kırmızı kan hücreleri ve sinir
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [70, 50, 1800])}>
        <Etiket t={t} bas={K(0, "red")} capa={[700, 540]} konum={[700, 400]} metin="RED BLOOD CELLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "nerves")} capa={[1560, 550]} konum={[1500, 330]} metin="NERVES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "B12")} satirlar={["NERVES AND", "RED CELLS"]} x={160} y={190} boyut={96}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "small")} metin="A SMALL VITAMIN WITH A BIG JOB" x={960} y={790} hiza="orta" boyut={52} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S05;
