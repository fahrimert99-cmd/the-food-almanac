// Sahne 3 — "önemli rakamlar": solda tencere ve kaplar, sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={w}>
        <Etiket t={t} bas={K(0, "cool")} capa={[960, 540]} konum={[1450, 640]} metin="SHALLOW CONTAINERS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "big pot")} capa={[300, 520]} konum={[250, 150]} metin="BIG POT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "numbers")} satirlar={["THE NUMBERS", "THAT MATTER"]} x={1200} y={290} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "how to cool")} metin="AND HOW TO COOL A BIG POT" x={1200} y={430} boyut={30} agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S03;
