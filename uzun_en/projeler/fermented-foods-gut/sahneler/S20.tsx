// Sahne 20 — 19 belirteç düştü: sağ panelde başlık, IL-6 etiketi, 4 bağışıklık hücresi rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kelimeZamani, VurguRozet } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(0, "19"), tKan = K(0, "blood"), tIl = K(1, "interleukin"), tSig = K(1, "signal"), tDort = K(2, "four");
  const aP = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/20" pencere={[0, 0, 1920]} />
      <Panel a={aP} taraf="sag" genislik={1000} />
      <Etiket t={t} bas={tKan} bitis={tIl - 0.1} capa={[590, 600]} konum={[1200, 720]} metin="IN THE BLOOD" renk={RENK.mercan} />
      <Etiket t={t} bas={tIl} bitis={tDort - 0.2} capa={[592, 358]} konum={[1230, 640]} metin="INTERLEUKIN-6" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tNo} satirlar={["19 MARKERS", "LOWER"]} x={1860} y={260} boyut={104} hiza="sag" />
      <Not t={t} bas={tSig} bitis={tDort - 0.2} metin="a signal linked with chronic conditions" x={1860} y={710} hiza="sag" boyut={34} genislik={620} />
      <VurguRozet t={t} bas={tDort} vurgu="4" not="immune cell types: less activation" x={1500} y={590} genislik={520} />
    </>
  );
};

export default S20;
