// Sahne 13 — Toronto ekibi kontrollü çalışmaları arayıp birleştirdi (Ahmed ve ark., 2022).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2022 = K(0, "2022"), tKhan = K(0, "Tauseef"), tSiev = K(0, "John"), tUni = K(0, "University");
  const tTrials = K(0, "controlled trials"), tHoney = K(0, "honey and"), tPool = K(0, "pooled");
  const kam = kameraYolu(t, s.sure, [0, 30, 1920], [70, 60, 1780]);
  const ara = tTrials - 0.3;
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kam}>
        <Etiket t={t} bas={tTrials} capa={[330, 480]} konum={[700, 250]} metin="CONTROLLED TRIALS" renk={RENK.lacivert} />
        <Etiket t={t} bas={tHoney} capa={[1550, 780]} konum={[1250, 560]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={tPool} capa={[860, 850]} konum={[1100, 430]} metin="POOLED RESULTS" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <Baslik t={t} bas={t2022} metin="2022" x={960} y={150} boyut={130} renk={RENK.altin} hiza="orta" />
      <Not t={t} bas={tKhan} bitis={ara} metin="TAUSEEF KHAN" x={960} y={235} hiza="orta" boyut={44} agirlik={800} />
      <Not t={t} bas={tSiev} bitis={ara} metin="JOHN SIEVENPIPER" x={960} y={290} hiza="orta" boyut={44} agirlik={800} />
      <Baslik t={t} bas={tUni} bitis={ara} metin="UNIVERSITY OF TORONTO" x={960} y={375} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S13;
