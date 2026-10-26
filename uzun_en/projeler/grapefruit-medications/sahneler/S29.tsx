import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/30", kirp: [0, 360, 960, 1080] },
        { gorsel: "tam/31", kirp: [0, 360, 960, 1080] },
      ]} />
      <AdimAkisi t={t} x={570} y={830} boyut={26} numarali={false} adimlar={[
        { bas: K(1, "morning"), metin: "PILL: MORNING", renk: RENK.altin },
        { bas: K(1, "lunch"), metin: "GRAPEFRUIT: LUNCH", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S29;
