// Sahne 11 — Cochrane nedir: sağda üç aşamalı metin, kaynak etiketi
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a1 = K(1, "2023") - 0.2, a2 = K(2, "fifty") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [60, 70, 1780])}>
        <Etiket t={t} bas={K(1, "review")} bitis={a2} capa={[920, 850]} konum={[1250, 880]} metin="THE REVIEW" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2023")} />
      {/* 1. cümle */}
      <Baslik t={t} bas={0.05} bitis={a1} metin="COCHRANE" x={1860} y={260} boyut={140} hiza="sag" renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" aralik={84} boyut={36} genislik={700} x={1130} y={380} ogeler={[
        { bas: K(0, "independent"), metin: "INDEPENDENT GROUP", renk: RENK.altin, bitis: a1 },
        { bas: K(0, "pools"), metin: "POOLS MANY TRIALS", renk: RENK.altin, bitis: a1 },
      ]} />
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "2023")} bitis={a2} metin="2023 UPDATE" x={1860} y={260} boyut={140} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "Gabrielle")} bitis={a2} metin="GABRIELLE WILLIAMS & COLLEAGUES" x={1860} y={370} boyut={34} agirlik={800} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={K(1, "updated")} bitis={a2} metin="UPDATED THE CRANBERRY REVIEW" x={1860} y={430} boyut={34} agirlik={600} hiza="sag" />
      {/* 3. cümle */}
      <Baslik t={t} bas={K(2, "fifty")} metin="50 TRIALS" x={1860} y={260} boyut={140} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "randomized")} metin="RANDOMIZED" x={1860} y={370} boyut={34} agirlik={800} hiza="sag" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(2, "8,800")} vurgu="8,800+" not="people" x={1560} y={520} genislik={420} />
    </>
  );
};
export default S11;
