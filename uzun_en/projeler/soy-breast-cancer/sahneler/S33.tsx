// Sahne 33 — deneyler: tüpler ve defter etiketli, sağ üstte sonuç, sol üstte kaynak.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Etiket t={t} bas={K(0, "Trials")} capa={[700, 330]} konum={[860, 160]} metin="TRIALS" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "markers")} capa={[1400, 560]} konum={[1180, 300]} metin="RISK MARKERS" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(0, "haven't")} satirlar={["NO SIGNIFICANT", "EFFECT EITHER WAY"]} x={1860} y={140} boyut={62} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "according")} />}
    </>
  );
};

export default S33;
