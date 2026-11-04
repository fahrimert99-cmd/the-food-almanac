// Sahne 60 — özet: sol panelde dört onaylı öneri, sağda tencere ve tabak.
import React from "react";
import { Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [90, 50, 1740])} />
      <Panel a={eout(ilerle(t, 0, 0.5))} taraf="sol" genislik={940} opak={0.96} />
      <Liste t={t} isaret="onay" x={70} y={150} aralik={185} boyut={38} genislik={800} ogeler={[
        { bas: K(0, "steam"), metin: "STEAM OR MICROWAVE GENTLY" },
        { bas: K(0, "keep the cooking"), metin: "KEEP THE COOKING LIQUID" },
        { bas: K(0, "cook tomatoes"), metin: "TOMATOES + CARROTS WITH A LITTLE OLIVE OIL" },
        { bas: K(0, "keep eating"), metin: "KEEP EATING VEGETABLES YOU ENJOY", renk: RENK.altin },
      ]} />
      <Etiket t={t} bas={K(0, "tomatoes")} bitis={7.4} capa={[1280, 400]} konum={[1500, 150]} metin="TOMATOES" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "any way")} capa={[900, 610]} konum={[1250, 850]} metin="ANY WAY YOU ENJOY" renk={RENK.yesil} />
    </>
  );
};

export default S60;
