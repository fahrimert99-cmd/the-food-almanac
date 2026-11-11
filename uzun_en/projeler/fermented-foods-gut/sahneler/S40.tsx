// Sahne 40 — laktoz toplamı şişirir; şekeri düşük yoğurt %9'dan az.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "Still,") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "lactose,")} bitis={bit} capa={[520, 330]} konum={[1130, 250]} metin="LACTOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "added")} bitis={bit} capa={[800, 740]} konum={[1330, 780]} metin="ADDED SUGAR" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "fewer than")} satirlar={["UNDER 9%", "LOW SUGAR"]} x={1860} y={330} boyut={120} hiza="sag"
        renkler={[RENK.altin, RENK.koyuYesil]} adim={K(1, "low in") - K(1, "fewer than")} />
      <Not t={t} bas={K(1, "of the")} metin="of the yogurts surveyed" x={1860} y={575} hiza="sag" boyut={36} />
    </>
  );
};

export default S40;
