import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, IkonYol, INTER, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sahne 7 — kavanoz solda; sağda üç yağ asidinin çubukları (değerler anlatımdan)
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(2, "dominate")} capa={[400, 640]} konum={[880, 190]} metin="SATURATED FATS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lauric")} metin="LAURIC ACID" x={1860} y={140} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "lauric") + 0.4} metin="the largest part of coconut oil" x={1860} y={210} hiza="sag" genislik={640} boyut={30} agirlik={800} />
      <CubukGrafik t={t} bas={K(0, "42")} x={1150} y={400} w={710} h={370} maks={50}
        cubuklar={[
          { etiket: "LAURIC", deger: 42, metin: "42 g", renk: RENK.mercan, bas: K(0, "42") },
          { etiket: "MYRISTIC", deger: 17, metin: "17 g", renk: RENK.altin, bas: K(1, "17") },
          { etiket: "PALMITIC", deger: 9, metin: "9 g", renk: RENK.altin, bas: K(1, "9") },
        ]} />
    </>
  );
};
export default S07;
