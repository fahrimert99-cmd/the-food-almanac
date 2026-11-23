// Sahne 44 — kontrollü çalışmalar: karışık kanıt
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCtl = K(0, "Controlled"), tCross = K(1, "crossover"), tGin = K(1, "product"), tClot = K(1, "clotting");
  const tB = K(2, "bleeding"), tI = K(2, "INR.");
  const tEnd = K(2, "Another") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [90, 90, 1650])}>
        <Etiket t={t} bas={tCross} bitis={K(1, "healthy") + 2.2} capa={[1480, 640]} konum={[1180, 220]} metin="2005 CROSSOVER STUDY" renk={RENK.altin} />
        <Etiket t={t} bas={tGin} bitis={tEnd} capa={[970, 720]} konum={[1000, 900]} metin="GINGER PRODUCT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tCtl} bitis={tEnd} satirlar={["MIXED", "EVIDENCE"]} x={140} y={130} boyut={100} />
      <VurguRozet t={t} bas={tClot} bitis={tEnd} vurgu="NO CHANGE" not="in clotting" x={1020} y={80} genislik={420} boyut={64} renk={RENK.yesil} />
      <Liste t={t} isaret="nokta" x={140} y={110} aralik={90} boyut={38} genislik={780}
        ogeler={[{ bas: tB, metin: "LINKED TO BLEEDING", renk: RENK.mercan }, { bas: K(2, "not to"), metin: "BUT NOT TO A HIGH INR", renk: RENK.yesil }]} />
    </>
  );
};
export default S44;
