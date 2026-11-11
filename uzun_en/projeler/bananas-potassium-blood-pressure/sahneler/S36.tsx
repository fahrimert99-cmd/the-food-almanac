// Sahne 36 — müze örneği gibi muz: denenenler, ama muz tek başına denenmedi
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(0, "tested");
  const tNone = K(1, "None");
  const tBan = K(1, "bananas");
  const tReas = K(2, "reasonable");
  const tNot = K(2, "not a proven");
  const cik1 = tNone - 0.2;
  const OGE = [
    { bas: K(0, "potassium pills"), metin: "POTASSIUM PILLS" },
    { bas: K(0, "salt substitutes"), metin: "SALT SUBSTITUTES" },
    { bas: K(0, "whole diets"), metin: "WHOLE DIETS" },
  ];
  return (
    <>
      {/* pencere sol alttaki imzayı (x<310) dışarıda tutar */}
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [330, 60, 1500], [380, 100, 1400])}>
        <Etiket t={t} bas={tReas + 0.4} bitis={tNot - 0.2} capa={[1180, 640]} konum={[1130, 330]} metin="REASONABLE SOURCE" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: denenenler (üstte hap sırası) */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 120, display: "flex", justifyContent: "center", gap: 20, alignItems: "center" }}>
        {OGE.map((o) => {
          if (t > cik1) return null;
          const [sc, al] = pop(t, o.bas, 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, opacity: al, whiteSpace: "nowrap", background: RENK.kagitAcik,
              border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "12px 28px", fontFamily: INTER, fontWeight: 800,
              fontSize: 34, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{o.metin}</div>
          );
        })}
      </div>
      <Baslik t={t} bas={tTest} bitis={cik1} metin="TESTED:" x={960} y={60} boyut={34} renk={RENK.altin} hiza="orta" font="inter" aralik={8} />
      {/* 2. cümle */}
      <Baslik t={t} bas={tNone} bitis={tReas - 0.2} metin="NONE TESTED" x={960} y={150} boyut={104} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tBan} bitis={tReas - 0.2} metin="BANANAS BY THEMSELVES" x={960} y={245} boyut={46} renk={RENK.lacivert} hiza="orta" />
      {/* 3. cümle */}
      <Baslik t={t} bas={tReas} bitis={tNot - 0.2} metin="A REASONABLE SOURCE" x={960} y={150} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tNot} metin="NOT A PROVEN TREATMENT" x={960} y={150} boyut={96} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S36;
