// Sahne 14 — Newsome 2014 uzman incelemesi: tutarsız terimler -> yanlış okunan tarihler -> kaçınılabilir israf.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGec = K(1, "Inconsistent") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "industry")} bitis={tGec} capa={[900, 250]} konum={[1350, 520]} metin="INDUSTRY SIDE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "expert")} bitis={tGec} satirlar={["EXPERT REVIEW", "2014"]} x={1120} y={140} boyut={80}
        renkler={[RENK.lacivert, RENK.altin]} />
      <AdimAkisi t={t} x={960} y={880} boyut={30} numarali={false} adimlar={[
        { bas: K(1, "Inconsistent"), metin: "INCONSISTENT TERMS", renk: RENK.altin },
        { bas: K(1, "misread"), metin: "MISREAD DATES", renk: RENK.mercan },
        { bas: K(1, "avoidable"), metin: "AVOIDABLE WASTE", renk: RENK.mercan },
      ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S14;
