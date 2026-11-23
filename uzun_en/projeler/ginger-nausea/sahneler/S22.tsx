// Sahne 22 — karışık sonuçlar: gecikmiş kusma ve bulantıyla anlamlı bağ yok.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Liste, Not, RENK, SP, Kamera, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 80, 1700], [50, 100, 1600])}>
        <Etiket t={t} bas={K(1, "ginger")} capa={[440, 560]} konum={[440, 250]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={K(0, "no significant")} metin="NO SIGNIFICANT LINK WITH" x={1860} y={150} hiza="sag" boyut={32} agirlik={800} renk={RENK.altin} genislik={560} />
      <Liste t={t} isaret="carpi" x={1330} y={215} aralik={92} boyut={36} genislik={540}
        ogeler={[
          { bas: K(0, "delayed vomiting"), metin: "DELAYED VOMITING", renk: RENK.mercan },
          { bas: K(0, "nausea"), metin: "NAUSEA ITSELF", renk: RENK.mercan },
        ]} />
      <BaslikBlok t={t} bas={K(1, "So even here")} satirlar={b.satirlar} x={1860} y={560} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(1, "clear win")} ad="soru" x={1800} y={800} zemin={RENK.altin} />
    </>
  );
};

export default S22;
