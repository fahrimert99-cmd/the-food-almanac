// Sahne 42 — Witkowski 2023: 1.157 hasta, 3 yıl. Kalp + şişe + steteskop görseli, sağda sayı ve liste.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1780])}>
        <Etiket t={t} bas={K(0, "erythritol")} bitis={K(0, "heart") - 0.3} capa={[645, 395]} konum={[760, 190]} metin="ERYTHRITOL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "heart")} capa={[360, 400]} konum={[340, 180]} metin="HEART RISK CHECKS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "1,157") - 0.05} metin="1,157 PATIENTS" x={1840} y={200} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "levels")} metin="HIGHER ERYTHRITOL LEVELS" x={1840} y={285} hiza="sag" boyut={32} agirlik={800} renk={RENK.koyuYesil} />
      <Liste t={t} x={1060} y={360} aralik={88} boyut={40} isaret="nokta" genislik={780} ogeler={[
        { bas: K(1, "heart"), metin: "MORE HEART ATTACKS", renk: RENK.mercan },
        { bas: K(1, "strokes"), metin: "MORE STROKES", renk: RENK.mercan },
        { bas: K(1, "deaths"), metin: "MORE DEATHS", renk: RENK.mercan },
      ]} />
      <Baslik t={t} bas={K(1, "three")} metin="3 YEARS" x={1840} y={720} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S42;
