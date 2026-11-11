// Sahne 20 — kimlerdi bu erkekler: üç fincan = günde 3–6 fincan; sınırlılık notu.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLimit = K(2, "limit");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [0, 40, 1920])}>
        <Etiket t={t} bas={K(1, "regular")} capa={[960, 660]} konum={[960, 880]} metin="REGULAR DRINKERS" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={0.1} bitis={1.6} metin="WHO THESE MEN WERE" x={90} y={120} boyut={90} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "three")} bitis={tLimit - 0.15} vurgu="3–6 CUPS" not="already, every day" x={400} y={60} genislik={440} boyut={86} />
      <Baslik t={t} bas={tLimit} metin="ALSO A LIMIT" x={90} y={120} boyut={96} renk={RENK.altin} />
      <Not t={t} bas={K(2, "honest")} metin="we'll return to it in the honest part" x={96} y={190} boyut={34} />
    </>
  );
};

export default S20;
