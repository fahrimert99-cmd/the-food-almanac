// Sahne 26 — tutarlı alım salınımı azaltır; ilişki, kanıt değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={w}>
        <Etiket t={t} bas={K(0, "consistent vitamin K")} bitis={7.6} capa={[960, 625]} konum={[960, 810]} metin="CONSISTENT INTAKE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "association,")} capa={[1000, 300]} konum={[1420, 200]} metin="ASSOCIATION, NOT PROOF" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "matches")} capa={[1560, 745]} konum={[1090, 830]} metin="MATCHES EXPERIMENT" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <BaslikBlok t={t} bas={K(0, "reduce")} bitis={7.3} satirlar={["FEWER SWINGS,", "SAFER WARFARIN"]} x={150} y={250} boyut={78} />
      <Not t={t} bas={K(0, "safer.")} bitis={7.3} metin="consistent vitamin K intake" x={152} y={420} boyut={30} />
    </>
  );
};

export default S26;
