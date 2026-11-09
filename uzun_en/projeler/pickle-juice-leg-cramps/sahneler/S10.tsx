// Sahne 10 — ev çareleri: üç nesne etiketlenir, sonra "en bilinen çareler" başlığı.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "Today");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [120, 60, 1700], [60, 20, 1800])}>
        <Etiket t={t} bas={K(0, "pickle")} bitis={tSon - 0.2} capa={[700, 520]} konum={[270, 330]} metin="PICKLE JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "magnesium")} bitis={tSon - 0.2} capa={[1040, 520]} konum={[1180, 190]} metin="MAGNESIUM PILLS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "soap")} bitis={tSon - 0.2} capa={[1250, 700]} konum={[1560, 440]} metin="BAR OF SOAP" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "home remedies")} bitis={K(0, "pickle") - 0.15} metin="HOME REMEDIES" x={1180} y={130} boyut={90} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tSon} satirlar={["TODAY WE TEST", "THE BEST KNOWN"]} x={1180} y={130} boyut={80} />
    </>
  );
};

export default S10;
