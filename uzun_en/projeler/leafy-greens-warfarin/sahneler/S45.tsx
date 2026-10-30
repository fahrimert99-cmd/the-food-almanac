// Sahne 45 — tavsiye neye dayanıyor: ilaç mekanizması + INR, büyük çalışma yok
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "sensible");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <Etiket t={t} bas={K(0, "how")} bitis={t1 - 0.2} capa={[1280, 235]} konum={[1580, 400]} metin="HOW THE DRUG WORKS" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "INR")} bitis={t1 - 0.2} capa={[1140, 355]} konum={[1580, 520]} metin="INR STUDIES" renk={RENK.altin} />
      <BaslikBlok t={t} bas={t1} satirlar={["SENSIBLE,", "WELL ACCEPTED"]} x={70} y={190} boyut={86} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "not")} metin="BUT NOT TESTED IN A GIANT TRIAL" x={70} y={380} boyut={32} agirlik={800} renk={RENK.mercan} genislik={540} />
    </>
  );
};

export default S45;
