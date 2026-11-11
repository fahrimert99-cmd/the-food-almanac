// Sahne 54 — AHA önerisi: içmiyorsan başlama; kadeh kalp planı değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAha = K(0, "american"), tDont = K(0, "if you"), tStart = K(0, "don't start"), tStay = K(1, "stay within"),
    tNo = K(1, "no level"), tPleasure = K(2, "pleasure"), tPlan = K(2, "heart plan");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [40, 100, 1760])} />
      <KaynakEtiketi t={t} bas={tAha} metin="AMERICAN HEART ASSOCIATION" />
      <BaslikBlok t={t} bas={tDont} satirlar={["IF YOU DON'T DRINK,", "DON'T START"]} x={1860} y={220} boyut={80} hiza="sag"
        adim={tStart - tDont} />
      <Liste t={t} isaret="onay" boyut={36} x={1180} y={500} genislik={680} aralik={96}
        ogeler={[
          { bas: tStay, metin: "STAY WITHIN THE LIMITS", bitis: 1e9 },
          { bas: tNo, metin: "NO LEVEL IS RISK-FREE", renk: RENK.mercan, bitis: 1e9 },
        ]} />
      <Etiket t={t} bas={tPleasure} capa={[330, 330]} konum={[480, 170]} metin="A PLEASURE" renk={RENK.altin} boyut={32} />
      <Etiket t={t} bas={tPlan} capa={[620, 450]} konum={[940, 410]} metin="NOT A HEART PLAN" renk={RENK.mercan} boyut={34} />
    </>
  );
};

export default S54;
