// Sahne 10 — buğday alerjisi: belirtiler, çölyak'tan farkı, kalıcı hasar yok.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(0, "wheat allergy");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1760])}>
        <Etiket t={t} bas={K(0, "immune")} capa={[560, 540]} konum={[1040, 430]} metin="WHEAT FLOUR" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tW} satirlar={["WHEAT", "ALLERGY"]} x={1260} y={150} boyut={110} renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1260} y={500} aralik={92} boyut={32} genislik={600} ogeler={[
        { bas: K(1, "itchy"), metin: "ITCHY EYES", renk: RENK.mercan },
        { bas: K(1, "trouble"), metin: "TROUBLE BREATHING", renk: RENK.mercan },
        { bas: K(1, "differ"), metin: "DIFFERS FROM CELIAC", renk: RENK.lacivert },
        { bas: K(1, "long-term"), metin: "NO LONG-TERM DAMAGE", renk: RENK.yesil },
      ]} isaret="nokta" />
    </>
  );
};

export default S10;
