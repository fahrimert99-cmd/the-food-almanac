// Sahne 2 — ana sonuç anlamlı değil; kapsül, çikolata değil
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOz = K(0, "missed statistical"), tHap = K(0, "pills"), tCik = K(0, "chocolate bars");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [60, 80, 1760])}>
        <Etiket t={t} bas={tHap} capa={[507, 487]} konum={[480, 190]} metin="CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={tCik} capa={[1067, 587]} konum={[1560, 640]} metin="CHOCOLATE BAR" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tOz} bitis={tHap - 0.1} satirlar={["MAIN RESULT", "MISSED SIGNIFICANCE"]} x={1860} y={200} boyut={66} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={tHap + 0.2} satirlar={["CAPSULES,", "NOT CHOCOLATE"]} x={1860} y={200} boyut={84} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.mercan]} />
    </>
  );
};

export default S02;
