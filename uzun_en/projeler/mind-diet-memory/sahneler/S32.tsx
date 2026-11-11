// Sahne 32 — eşit teraziyle "MIND diyeti kontrolü geçemedi".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])} />
      <BaslikBlok t={t} bas={K(0, "not")} satirlar={["DID NOT", "BEAT CONTROL"]} x={1860} y={150} boyut={92} hiza="sag" />
      <Etiket t={t} bas={K(0, "MIND")} capa={[420, 440]} konum={[250, 250]} metin="MIND DIET" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "control")} capa={[1010, 450]} konum={[1400, 470]} metin="CONTROL DIET" renk={RENK.altin} />
      <Not t={t} bas={K(1, "researchers")} metin="The researchers said so plainly." x={1860} y={570} hiza="sag" genislik={440} boyut={36} />
    </>
  );
};

export default S32;
