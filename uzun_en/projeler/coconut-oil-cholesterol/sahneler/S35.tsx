import React from "react";
import { Baslik, BaslikBlok, BolumKarti, CubukGrafik, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

// S35: bölüm kartı
const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/32", kirp: [0, 100, 1200, 1000] },
        { gorsel: "tam/36", kirp: [1000, 400, 1800, 1000] },
        { gorsel: "tam/39", kirp: [700, 200, 1900, 1100] },
      ]} />
      <Not t={t} bas={K(1, "What")} metin="WHAT DO THESE STUDIES NOT SHOW?" x={140} y={810} boyut={34} agirlik={800} />
    </>
  );
};
export default S35;
