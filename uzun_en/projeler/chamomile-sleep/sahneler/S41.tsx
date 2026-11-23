// S41 — papatya ailesi alerjisi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gecis = K(2, "Reactions") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "likely safe")} bitis={K(1, "But") - 0.1} capa={[720, 800]} konum={[1250, 820]} metin="LIKELY SAFE IN TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "daisy")} capa={[860, 275]} konum={[1330, 130]} metin="DAISY FAMILY" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "belongs")} satirlar={["DAISY-FAMILY", "ALLERGY"]} x={1860} y={290} boyut={100} hiza="sag" />
      <Liste t={t} x={1040} y={560} aralik={78} boyut={34} isaret="nokta" ogeler={[
        { bas: K(1, "ragweed"), metin: "RAGWEED", renk: RENK.mercan, bitis: gecis },
        { bas: K(1, "chrysanthemums"), metin: "CHRYSANTHEMUMS", renk: RENK.mercan, bitis: gecis },
        { bas: K(1, "marigolds"), metin: "MARIGOLDS", renk: RENK.mercan, bitis: gecis },
        { bas: K(1, "daisies"), metin: "DAISIES", renk: RENK.mercan, bitis: gecis },
      ]} />
      <Liste t={t} x={1040} y={560} aralik={90} boyut={34} isaret="nokta" ogeler={[
        { bas: K(2, "nausea"), metin: "NAUSEA", renk: RENK.altin },
        { bas: K(2, "severe"), metin: "RARE: SEVERE ALLERGIC SHOCK", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S41;
