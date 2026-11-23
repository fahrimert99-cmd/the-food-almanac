// Sahne 23 — kemoterapi alıyorsanız onkoloji ekibine danışın.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [50, 80, 1700])}>
        <Etiket t={t} bas={K(0, "oncology")} capa={[680, 427]} konum={[960, 190]} metin="ONCOLOGY TEAM" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "adding ginger")} capa={[840, 467]} konum={[1180, 370]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "talk") - 0.1} satirlar={b.satirlar} x={1860} y={500} boyut={112} hiza="sag" />
      <Ikon t={t} bas={K(1, "They know")} ad="onay" x={1320} y={800} />
      <Not t={t} bas={K(1, "other medicines")} metin="THEY KNOW YOUR OTHER MEDICINES" x={1860} y={770} hiza="sag" boyut={32} agirlik={800}
        genislik={420} />
    </>
  );
};

export default S23;
