// Sahne 59 — ıspanak ve göz: kanıt daha zayıf; iki bulgu çarpı maddeleriyle.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <Etiket t={t} bas={K(0, "spinach")} capa={[620, 330]} konum={[260, 150]} metin="SPINACH" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "eyes,")} bitis={4.8} capa={[1330, 600]} konum={[1500, 460]} metin="EYES" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(0, "evidence")} bitis={4.8} satirlar={["THINNER", "EVIDENCE"]} x={1850} y={150} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} isaret="carpi" x={1010} y={190} aralik={150} boyut={36} genislik={840} ogeler={[
        { bas: K(1, "lutein"), metin: "NO CHANGE IN LUTEIN ABSORPTION", renk: RENK.mercan },
        { bas: K(1, "no"), metin: "NO SIGNIFICANT BENEFIT IN SUPPLEMENT TRIAL", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S59;
