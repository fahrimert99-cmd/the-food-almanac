// Sahne 29 — 500 mg şarap tek başına: dev miktar.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        {/* kadeh etiketi */}
        <Etiket t={t} bas={K(0, "wine")} capa={[1187, 700]} konum={[820, 600]} metin="RED WINE" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "500")} vurgu="500 MG" not="FROM WINE ALONE" x={420} y={150} genislik={420} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "dozens")} satirlar={["DOZENS OF LITERS", "A DAY"]} x={90} y={440} boyut={84}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.5} />
      <Ikon t={t} bas={K(1, "plainly")} ad="carpi" x={150} y={730} zemin={RENK.mercan} boyut={84} />
      <Baslik t={t} bas={K(1, "plainly") + 0.1} metin="NOT A PLAN" x={220} y={730} boyut={72} renk={RENK.mercan} />
    </>
  );
};

export default S29;
