// Sahne 14 — Japonya ipucu: yüksek soya, düşük meme kanseri oranı; sağ panelde iki madde ve soru.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(1, "might protect") ;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])}>
        <Etiket t={t} bas={K(1, "soy")} capa={[450, 500]} konum={[330, 220]} metin="TOFU" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "intake")} capa={[870, 560]} konum={[900, 300]} metin="EDAMAME" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.7))} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={K(1, "japan")} satirlar={s.meta.baslik!.satirlar} x={1290} y={250} boyut={100} />
      <Liste t={t} x={1290} y={480} aralik={100} boyut={32} isaret="onay" genislik={580} ogeler={[
        { bas: K(1, "high"), metin: "HIGH SOY INTAKE" },
        { bas: K(1, "low"), metin: "LOW BREAST CANCER RATES" },
      ]} />
      <Ikon t={t} bas={tSoru} ad="soru" x={1330} y={790} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={tSoru + 0.1} metin="MIGHT SOY PROTECT?" x={1400} y={762} boyut={34} agirlik={800} />
    </>
  );
};
export default S14;
