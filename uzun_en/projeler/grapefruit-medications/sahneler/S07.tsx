// Sahne 7 — CYP3A4 bekçi: bağırsak duvarı.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "wall")} bitis={K(0, "CYP3A4.") - 0.2} capa={[640, 520]} konum={[1150, 520]} metin="INTESTINAL WALL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "intestine")} bitis={K(0, "CYP3A4.") - 0.2} capa={[420, 250]} konum={[1000, 150]} metin="SMALL INTESTINE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "CYP3A4.")} satirlar={[b.satirlar[0]]} x={1860} y={330} boyut={168} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(1, "gatekeeper")} satirlar={[b.satirlar[1]]} x={1860} y={480} boyut={92} hiza="sag" renkler={[RENK.koyuYesil]} />
      <AdimAkisi t={t} x={1400} y={720} boyut={30} numarali={false}
        adimlar={[{ bas: K(1, "medicines"), metin: "MEDICINE", renk: RENK.altin }, { bas: K(1, "before"), metin: "GATEKEEPER", renk: RENK.mercan },
          { bas: K(1, "bloodstream."), metin: "BLOODSTREAM", renk: RENK.yesil }]} />
    </>
  );
};

export default S07;
