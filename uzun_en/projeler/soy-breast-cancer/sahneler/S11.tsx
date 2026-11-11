// Sahne 11 — fare ≠ insan, yoğun bileşik ≠ tofu porsiyonu: terazi görseli üstünde iki etiket.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={K(1, "mouse")} capa={[560, 560]} konum={[380, 900]} metin="A MOUSE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "serving")} capa={[1400, 650]} konum={[1500, 900]} metin="A SERVING OF TOFU" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "findings")} metin="TAKEN SERIOUSLY" x={70} y={120} boyut={78} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "concentrated")} metin="NOT A PERSON · NOT A CONCENTRATED COMPOUND" x={70} y={190} boyut={26} renk={RENK.altin} agirlik={800} />
    </>
  );
};
export default S11;
