// Sahne 45 — Akşam içecekleri: kafein, alkol; ilk adım akşam sıvılarını azaltmak.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "caffeine")} capa={[693, 650]} konum={[1230, 640]} metin="CAFFEINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "alcohol")} capa={[547, 600]} konum={[1230, 500]} metin="ALCOHOL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={s.meta.baslik!.satirlar} x={1850} y={170} boyut={110} hiza="sag" />
      <Liste t={t} isaret="sayi" x={1010} y={780} aralik={90} boyut={34} genislik={840}
        ogeler={[
          { bas: K(1, "cutting"), metin: "CUT BACK EVENING FLUIDS", renk: RENK.yesil },
          { bas: K(1, "before"), metin: "ANY MEDICINE", renk: RENK.gri },
        ]} />
    </>
  );
};
export default S45;
