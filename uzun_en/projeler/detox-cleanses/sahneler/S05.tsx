// Sahne 5 — detoks vaadi + NCCIH'nin saydığı yöntemler (sağda)
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pw = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800]);
  const cik0 = K(1, "The") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={pw}>
        <Etiket t={t} bas={K(1, "juices,")} capa={[480, 650]} konum={[740, 900]} metin="JUICES" renk={RENK.yesil} bitis={K(1, "special")} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Detox")} bitis={cik0} satirlar={["THE", "PROMISE"]} x={1560} y={190} boyut={110} hiza="orta" />
      <Liste t={t} x={1210} y={420} aralik={110} boyut={40} isaret="onay" genislik={680}
        ogeler={[
          { bas: K(0, "remove"), metin: "REMOVE TOXINS", bitis: cik0 },
          { bas: K(0, "lose"), metin: "LOSE WEIGHT", bitis: cik0 },
          { bas: K(0, "promote"), metin: "PROMOTE HEALTH", bitis: cik0 },
        ]} />
      <Not t={t} bas={K(1, "National")} metin="NIH · NCCIH: WHAT DETOXES INCLUDE" x={1210} y={150} boyut={30} agirlik={800} genislik={680} />
      <Liste t={t} x={1210} y={230} aralik={88} boyut={36} isaret="nokta" genislik={680}
        ogeler={[
          { bas: K(1, "fasting,"), metin: "FASTING", renk: RENK.altin },
          { bas: K(1, "juices,") + 0.0, metin: "JUICES", renk: RENK.yesil },
          { bas: K(1, "special"), metin: "SPECIAL FOODS", renk: RENK.altin },
          { bas: K(1, "supplements,"), metin: "SUPPLEMENTS", renk: RENK.altin },
          { bas: K(1, "herbs,"), metin: "HERBS", renk: RENK.altin },
          { bas: K(1, "colon"), metin: "COLON CLEANSING", renk: RENK.mercan },
        ]} />
    </>
  );
};
export default S05;
