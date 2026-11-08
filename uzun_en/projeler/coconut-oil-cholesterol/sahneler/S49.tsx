// Sahne 49 — bütün örüntü: doymuş → doymamış yağ, DASH / Akdeniz.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, K(1, "Think") - 0.4, 0.6));
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={K(2, "Mediterranean")} bitis={K(3, "One") + 1.5} capa={[790, 610]} konum={[900, 400]} metin="MEDITERRANEAN PLATE" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" />
      <BaslikBlok t={t} bas={K(1, "whole")} satirlar={["THE WHOLE", "PATTERN"]} x={1860} y={190} boyut={92} hiza="sag" />
      <AdimAkisi t={t} x={1500} y={470} boyut={26} numarali={false} adimlar={[
        { bas: K(2, "replacing"), metin: "SATURATED", renk: RENK.mercan },
        { bas: K(2, "unsaturated"), metin: "UNSATURATED", renk: RENK.yesil },
      ]} />
      <Liste t={t} x={1210} y={570} aralik={78} boyut={36} isaret="onay" genislik={660} ogeler={[
        { bas: K(2, "DASH"), metin: "DASH PATTERN" },
        { bas: K(2, "Mediterranean"), metin: "MEDITERRANEAN" },
      ]} />
      <Not t={t} bas={K(3, "small part")} metin="ONE OIL = A SMALL PART" x={1860} y={800} hiza="sag" boyut={36} agirlik={800} genislik={720} />
    </>
  );
};

export default S49;
