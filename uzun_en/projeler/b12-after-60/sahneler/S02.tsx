import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 2 — mide tek neden değil; hap tepsisi
const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [90, 60, 1750])}>
        <Etiket t={t} bas={K(1, "pills")} capa={[585, 735]} konum={[900, 905]} metin="COMMON PILLS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "play")} capa={[1395, 650]} konum={[1500, 880]} metin="PLAY A PART" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "stomach")} satirlar={["NOT ONLY", "THE STOMACH"]} x={1860} y={180} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S02;
