// Sahne 59 — AREDS2 vitaminleri kimler için, kimler için değil.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAreds = K(0, "AREDS2");
  const tOrta = K(0, "intermediate");
  const tBir = K(0, "advanced");
  const tNot = K(1, "not");
  const tSaglikli = K(1, "healthy");
  const tBeta = K(1, "beta-carotene");
  const tAkciger = K(1, "lung");
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [150, 80, 1650])}>
        <Etiket t={t} bas={tAreds} bitis={tNot - 0.15} capa={[860, 480]} konum={[1300, 170]} metin="AREDS2 EYE VITAMINS" renk={RENK.altin} />
        <Etiket t={t} bas={tSaglikli} capa={[1380, 850]} konum={[1500, 690]} metin="NOT FOR HEALTHY EYES" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} isaret="onay" x={1120} y={300} aralik={92} boyut={36} genislik={720}
        ogeler={[{ bas: tOrta, metin: "INTERMEDIATE DISEASE", bitis: tNot - 0.2 }, { bas: tBir, metin: "ADVANCED IN ONE EYE", bitis: tNot - 0.2 }]} />
      <Liste t={t} isaret="carpi" x={1120} y={300} aralik={92} boyut={36} genislik={720}
        ogeler={[{ bas: tBeta, metin: "BETA-CAROTENE DROPPED", renk: RENK.mercan }, { bas: tAkciger, metin: "LUNG CANCER RISK", renk: RENK.mercan }]} />
    </>
  );
};
export default S59;
