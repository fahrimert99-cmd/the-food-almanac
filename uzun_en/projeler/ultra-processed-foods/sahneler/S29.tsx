// Sahne 29 — diyabet riski %28–46 daha yüksek (hesaplama yöntemine bağlı).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(0, "28") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1760])}>
        <Etiket t={t} bas={K(0, "most")} bitis={tB} capa={[250, 540]} konum={[1000, 430]} metin="MOST ULTRA-PROCESSED" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(0, "diabetes")} bitis={tB} capa={[570, 620]} konum={[1130, 640]} metin="TYPE 2 DIABETES" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(0, "least,")} capa={[800, 890]} konum={[1150, 880]} metin="LEAST" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "28") - 0.15} satirlar={["28–46%", "HIGHER RISK"]} x={1860} y={290} hiza="sag" boyut={112}
        renkler={[RENK.altin, RENK.lacivert]} adim={K(0, "higher") - K(0, "28")} />
      <Not t={t} bas={K(0, "depending")} metin="DEPENDS ON HOW IT WAS CALCULATED" x={1860} y={560} hiza="sag" boyut={34} agirlik={800} />
    </>
  );
};

export default S29;
