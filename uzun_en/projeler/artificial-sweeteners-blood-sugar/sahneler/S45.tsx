// Sahne 45 — laboratuvarda trombositler ve eritritol. Silindir + kâse; sağda başlık.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "erythritol")} bitis={K(1, "animal") - 0.1} capa={[1000, 640]} konum={[1250, 470]} metin="ERYTHRITOL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "platelets,")} capa={[504, 700]} konum={[860, 300]} metin="PLATELETS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "platelets,")} metin="PLATELETS" x={1840} y={170} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "more")} metin="MORE REACTIVE" x={1840} y={290} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "animal")} metin="IN ANIMAL MODELS:" x={1840} y={620} hiza="sag" boyut={34} agirlik={700} />
      <Baslik t={t} bas={K(1, "clot")} metin="CLOTS FORMED FASTER" x={1840} y={720} boyut={72} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S45;
