// Sahne 25 — sınırlar: yapboz
import React from "react";
import { Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(1, "Few women");
  const tP = K(2, "piece");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [60, 40, 1760])}>
        <Etiket t={t} bas={tP} capa={[1130, 560]} konum={[1450, 250]} metin="ONE MORE PIECE" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} isaret="nokta" x={720} y={90} aralik={72} boyut={36} genislik={900} ogeler={[
        { bas: K(0, "China"), metin: "IN CHINA", renk: RENK.altin, bitis: tW - 0.2 },
        { bas: K(0, "mostly"), metin: "MOSTLY MEN", renk: RENK.altin, bitis: tW - 0.2 },
        { bas: K(0, "drinking"), metin: "DRINKING PATTERNS DIFFER", renk: RENK.altin, bitis: tW - 0.2 },
      ]} />
      <VurguRozet t={t} bas={tW} bitis={tP - 0.2} vurgu="FEW WOMEN" not="drank: little to say about women" x={1100} y={100} genislik={620} boyut={90} renk={RENK.mercan} />
      <Not t={t} bas={K(2, "not")} metin="NOT THE FINAL WORD" x={1100} y={110} hiza="orta" boyut={52} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};
export default S25;
