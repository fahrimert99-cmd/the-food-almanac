import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 3 — iki soru: miktar ve pişirme; sağ boş kâğıtta kinetik başlık.
const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [a, b] = s.meta.baslik!.satirlar;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1820])}>
        <Etiket t={t} bas={K(0, "how much")} bitis={K(0, "cooking") - 0.2} capa={[1110, 790]} konum={[1450, 880]} metin="MEASURING SPOON" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cooking")} capa={[500, 430]} konum={[560, 100]} metin="OIL IN THE PAN" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "how much")} metin={a} x={1860} y={500} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "cooking")} metin={b} x={1860} y={620} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S03;
