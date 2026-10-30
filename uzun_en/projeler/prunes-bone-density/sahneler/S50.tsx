// Sahne 50 — "Daha çok daha iyi" yanılgısı: sol yazı, iki etiket.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDouble = K(1, "double"), tNot = K(1, "not better");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [80, 40, 1760], [0, 0, 1920])}>
        <Etiket t={t} bas={tDouble} capa={[1000, 300]} konum={[1500, 280]} metin="DOUBLE THE PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "prunes")} capa={[1230, 780]} konum={[1500, 640]} metin="SINGLE PORTION" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "more")} bitis={tDouble - 0.1} satirlar={["MORE IS", "BETTER?"]} x={80} y={300} boyut={90}
        renkler={[RENK.lacivert, RENK.altin]} />
      <Baslik t={t} bas={tNot} metin="NOT BETTER" x={80} y={300} boyut={96} renk={RENK.mercan} />
      <Ikon t={t} bas={tNot + 0.1} ad="carpi" x={640} y={300} boyut={70} zemin={RENK.mercan} />
      <Not t={t} bas={K(1, "many more")} metin="More women left the study" x={80} y={400} genislik={500} boyut={38} agirlik={700} />
    </>
  );
};

export default S50;
