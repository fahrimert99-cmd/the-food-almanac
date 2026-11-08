import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, MARKA, Not, Panel, RENK, SP, VurguRozet,
  eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 6 — Durulama içgüdüsü
const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = K(2, "understandable") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])}>
        <Etiket t={t} bas={K(1, "chicken")} bitis={bit} capa={[610, 600]} konum={[1100, 880]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "rinse")} bitis={bit} capa={[590, 330]} konum={[1000, 120]} metin="RUNNING WATER" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} bitis={bit} satirlar={["THE RINSE", "INSTINCT"]} x={1860} y={300} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "wash them away")} bitis={bit} metin="A GOOD RINSE SHOULD WASH GERMS AWAY" x={1860} y={500} hiza="sag" genislik={440} boyut={32} />
      <Baslik t={t} bas={K(2, "understandable")} metin="UNDERSTANDABLE" x={1870} y={300} boyut={66} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "nobody")} metin="NO SHAME" x={1870} y={390} boyut={90} hiza="sag" renk={RENK.altin} />
    </>
  );
};
export default S06;
