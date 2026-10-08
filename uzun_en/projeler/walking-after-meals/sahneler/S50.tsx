// Sahne 50 — sakin deney: aynı akşam yemeği, bir akşam yürüyüşle bir akşam yürüyüşsüz.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSame = K(1, "Same dinner");
  const tMon = K(0, "glucose monitor"), tExp = K(0, "gentle experiment");
  const tCmp = K(1, "compare how");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740]);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={p}>
        {/* sensör ve telefon */}
        <Etiket t={t} bas={tMon} bitis={tSame - 0.2} capa={[1000, 775]} konum={[1000, 905]} metin="GLUCOSE MONITOR" renk={RENK.altin} />
        {/* yemek tabağı */}
        <Etiket t={t} bas={tSame} capa={[1020, 520]} konum={[860, 170]} metin="SAME DINNER" renk={RENK.lacivert} />
      </Kamera>
      <AltSis a={0.6} />
      <Baslik t={t} bas={tExp - 0.1} bitis={tSame - 0.2} metin="A GENTLE" x={100} y={200} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tExp + 0.1} bitis={tSame - 0.2} metin="EXPERIMENT" x={100} y={330} boyut={120} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" boyut={38} x={90} y={150} aralik={84} genislik={700} ogeler={[
        { bas: K(1, "with a walk") - 0.1, metin: "WITH A WALK", renk: RENK.yesil },
        { bas: K(1, "without,") - 0.1, metin: "WITHOUT A WALK", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={tCmp} metin="COMPARE" x={100} y={400} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tCmp + 0.3} metin="THE CURVE" x={100} y={510} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};

export default S50;
