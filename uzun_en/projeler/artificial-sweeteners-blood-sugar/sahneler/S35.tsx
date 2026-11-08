// Sahne 35 — koşullu öneri, vücut yağında uzun vadeli fayda yok, gözlemsel çalışmalar. Terazi + bardak.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const RISKLER = [
  { ifade: "type 2", metin: "TYPE 2 DIABETES" },
  { ifade: "heart disease", metin: "HEART DISEASE" },
  { ifade: "death", metin: "DEATH" },
];

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit0 = c[1].bas - 0.1, bit1 = c[2].bas - 0.1;
  const tGozlem = K(2, "Observational");
  const [sg, ag] = pop(t, tGozlem, 0.5);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        {/* 2. cümle: vücut yağı = terazi kadranı ve mezura */}
        <Etiket t={t} bas={K(1, "no long-term")} bitis={bit1} capa={[790, 430]} konum={[800, 270]} metin="NO LONG-TERM BENEFIT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "body fat")} bitis={bit1} capa={[330, 745]} konum={[250, 620]} metin="BODY FAT" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: başlık */}
      <BaslikBlok t={t} bas={0.1} bitis={bit0} satirlar={["CONDITIONAL", "RECOMMENDATION"]} x={90} y={110} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* 3. cümle: gözlemsel çalışmalar, üstte hap sırası */}
      <div style={{ position: "absolute", left: 90, top: 56, opacity: ag, transform: `scale(${sg})`, transformOrigin: "0% 50%", fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 4, color: RENK.altin, whiteSpace: "nowrap" }}>
        OBSERVATIONAL STUDIES · POSSIBLE HIGHER RISK
      </div>
      <div style={{ position: "absolute", left: 90, top: 118, display: "flex", gap: 18 }}>
        {RISKLER.map((r) => {
          const [sc, al] = pop(t, K(2, r.ifade), 0.5);
          return (
            <div key={r.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
              background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER,
              fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{r.metin}</div>
          );
        })}
      </div>
    </>
  );
};

export default S35;
