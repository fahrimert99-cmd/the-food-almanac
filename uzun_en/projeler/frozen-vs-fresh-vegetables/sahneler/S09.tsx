// Sahne 9 — blanşlama: haşla, soğut, dondur.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(1, "blanching,")} bitis={K(1, "cooled") + 0.6} capa={[430, 590]} konum={[900, 400]} metin="BLANCHING" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cooled")} capa={[930, 800]} konum={[1000, 640]} metin="ICE WATER" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Commercial") + 0.2} satirlar={b.satirlar} x={1860} y={170} boyut={92} hiza="sag" />
      <Liste t={t} x={1250} y={440} aralik={96} boyut={34} genislik={620} ogeler={[
        { bas: K(1, "picked,"), metin: "PICKED", renk: RENK.yesil },
        { bas: K(1, "briefly"), metin: "HEATED BRIEFLY", renk: RENK.mercan },
        { bas: K(1, "cooled"), metin: "COOLED QUICKLY", renk: RENK.altin },
        { bas: K(1, "frozen."), metin: "FROZEN", renk: RENK.lacivert },
      ]} />
    </>
  );
};

export default S09;
