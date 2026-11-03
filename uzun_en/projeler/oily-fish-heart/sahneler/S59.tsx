// Sahne 59 — balık tüketimi, AHA haftada iki porsiyon, düşük cıvalı seçenekler.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRisk = K(0, "lower"), tAha = K(0, "American"), tTwo = K(0, "two");
  const tSar = K(1, "Sardines,"), tSal = K(1, "salmon"), tTuna = K(1, "canned"), tHg = K(1, "lower-mercury");
  const pAha = eout(ilerle(t, tAha, 0.5)) * sol(t, tSar - 0.15);
  const pHg = eout(ilerle(t, tHg, 0.5));
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 20, 1800], [90, 70, 1700])}>
        <Etiket t={t} bas={tRisk} bitis={tAha - 0.1} capa={[950, 165]} konum={[1290, 150]} metin="LOWER HEART RISK" renk={RENK.mercan} />
        <Etiket t={t} bas={tSar} capa={[520, 585]} konum={[250, 330]} metin="SARDINES" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSal} capa={[800, 520]} konum={[900, 250]} metin="SALMON" renk={RENK.mercan} />
        <Etiket t={t} bas={tTuna} capa={[1480, 500]} konum={[1500, 190]} metin="CANNED LIGHT TUNA" renk={RENK.altin} />
      </Kamera>
      {pAha > 0 && (
        <div style={{ position: "absolute", left: 60, top: 130, opacity: pAha, transform: `translateY(${(1 - pAha) * -10}px)` }}>
          <Hap metin="AMERICAN HEART ASSOCIATION" renk={RENK.lacivert} boyut={26} />
        </div>
      )}
      <VurguRozet t={t} bas={tTwo} bitis={tSar - 0.15} vurgu="2×" not="SERVINGS A WEEK" x={290} y={210} genislik={400} />
      {pHg > 0 && (
        <div style={{ position: "absolute", left: 1500, top: 880, opacity: pHg, transform: `translate(-50%, -50%) translateY(${(1 - pHg) * 12}px)`,
          display: "flex", alignItems: "center", gap: 18 }}>
          <Hap metin="LOWER MERCURY" renk={RENK.yesil} boyut={34} />
        </div>
      )}
    </>
  );
};

export default S59;
