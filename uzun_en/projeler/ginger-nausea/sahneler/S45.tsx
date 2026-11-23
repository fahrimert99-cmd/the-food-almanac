// Sahne 45 — adil özet ve eczacıya danış
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(1, "ask"), tCaps = K(1, "capsules"), tNever = K(2, "Never");
  const bit = tAsk - 0.3;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 80, 1750], [30, 100, 1650])}>
        <Etiket t={t} bas={tCaps} capa={[610, 520]} konum={[900, 190]} metin="GINGER CAPSULES" renk={RENK.altin} />
      </Kamera>
      <Liste t={t} isaret="nokta" x={1040} y={330} aralik={100} boyut={40} genislik={820}
        ogeler={[
          { bas: K(0, "uncertain"), metin: "UNCERTAIN", renk: RENK.altin, bitis: bit },
          { bas: K(0, "not proven"), metin: "NOT PROVEN", renk: RENK.mercan, bitis: bit },
          { bas: K(0, "concentrated"), metin: "CONCENTRATED SUPPLEMENTS", renk: RENK.koyuYesil, bitis: bit },
        ]} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR", "PHARMACIST"]} x={1860} y={430} boyut={110} hiza="sag" />
      <Not t={t} bas={tNever} metin="NEVER CHANGE YOUR MEDICINE ON YOUR OWN" x={1860} y={690} hiza="sag" genislik={640} boyut={36} agirlik={800} />
    </>
  );
};
export default S45;
