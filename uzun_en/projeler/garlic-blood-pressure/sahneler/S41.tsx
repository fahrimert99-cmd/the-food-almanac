// Sahne 41 — güvenlik: çoğu kişi için güvenli, yaygın yan etkiler (sol panel, sağda kavanoz camı).
import React from "react";
import { BaslikBlok, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMost = K(0, "most"), tMouth = K(0, "mouth"), tSeven = K(1, "seven"), tSide = K(2, "common");
  // kavanozun yalnızca sağ kenarı: camdaki sahte yazılar kadraj dışında
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [1000, 100, 700], [1020, 110, 660])} />
      <Panel a={1} taraf="sol" genislik={1060} opak={1} />
      <BaslikBlok t={t} bas={tMost} satirlar={["SAFE FOR", "MOST PEOPLE"]} x={70} y={210} boyut={88} adim={0.2} />
      <Not t={t} bas={tMouth} metin="garlic by mouth" x={74} y={390} boyut={34} renk={RENK.gri} />
      <VurguRozet t={t} bas={tSeven} vurgu="7 YEARS" not="safe use in studies (NIH)" x={1500} y={420} genislik={560} boyut={96} />
      <Not t={t} bas={tSide} metin="COMMON SIDE EFFECTS" x={74} y={480} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="nokta" x={70} y={550} aralik={90} boyut={34} genislik={880}
        ogeler={[
          { bas: K(2, "breath"), metin: "BREATH & BODY ODOR", renk: RENK.altin },
          { bas: K(2, "stomach"), metin: "STOMACH PAIN", renk: RENK.altin },
          { bas: K(2, "gas"), metin: "GAS", renk: RENK.altin },
          { bas: K(2, "nausea"), metin: "NAUSEA", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S41;
