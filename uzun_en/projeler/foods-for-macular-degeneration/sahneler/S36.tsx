// Sahne 36 — tek başına lutein: Cochrane düşük kesinlik, çinko faydalı
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLit = K(1, "little");
  const tZinc = K(2, "Zinc");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={K(0, "lutein")} capa={[713, 660]} konum={[330, 270]} metin="LUTEIN" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lutein")} metin="LUTEIN ALONE" x={1860} y={190} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "six")} bitis={tLit - 0.1} vurgu="6 TRIALS" not="PLACEBO-CONTROLLED" x={1600} y={340} genislik={440} />
      <Liste t={t} x={1340} y={340} aralik={120} boyut={30} isaret="nokta" genislik={520} ogeler={[
        { bas: tLit, metin: "LITTLE OR NO CLEAR DIFFERENCE", renk: RENK.altin },
        { bas: K(1, "rated"), metin: "CERTAINTY: LOW", renk: RENK.mercan },
      ]} />
      <Liste t={t} x={1340} y={620} boyut={32} isaret="onay" genislik={520} ogeler={[
        { bas: tZinc, metin: "ZINC ALONE: A BENEFIT", renk: RENK.yesil },
      ]} />
      <Not t={t} bas={K(1, "rated")} metin="unclear benefit, low-certainty evidence" x={1340} y={760} boyut={28} genislik={520} />
    </>
  );
};

export default S36;
