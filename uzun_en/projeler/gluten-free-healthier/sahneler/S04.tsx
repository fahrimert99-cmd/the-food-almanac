// Sahne 4: buğday demeti + sağ sütunda kanal adı, sonra soru
import React from "react";
import { AbsoluteFill, ANTON, Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Liste, Not, Panel, Parcaciklar, RENK, SP,
  VurguRozet, BolumKarti, Ikon, MARKA, eout, ilerle, ikiSatir, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const marka = ikiSatir(MARKA.filigran, 12);
  const cik = c[1].bas - 0.1;
  const tWho = K(1, "who has");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <BaslikBlok t={t} bas={K(0, "Food")} satirlar={marka} x={1860} y={200} boyut={100} hiza="sag" bitis={cik}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={K(1, "gluten")} satirlar={["WHAT IS", "GLUTEN?"]} x={1860} y={180} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tWho} metin="WHO HAS A REAL MEDICAL REASON TO AVOID IT" x={1860} y={380} hiza="sag" genislik={430} boyut={34} agirlik={800}
        renk={RENK.mercan} />
    </>
  );
};
export default S04;
