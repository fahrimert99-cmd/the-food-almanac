// Sahne 14 — çalışma tasarımı: günde 1 gram, yarı yarıya kapsül/plasebo, 5,3 yıl, kör.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const satirlar = [
    { bas: K(0, "Half"), metin: "HALF: OMEGA-3", renk: RENK.altin },
    { bas: K(0, "half took"), metin: "HALF: PLACEBO", renk: RENK.gri },
    { bas: K(1, "5.3"), metin: "MEDIAN 5.3 YEARS", renk: RENK.koyuYesil },
    { bas: K(1, "neither"), metin: "NEITHER GROUP KNEW", renk: RENK.lacivert },
  ];
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 80, 1760], [60, 120, 1620])}>
        <Etiket t={t} bas={K(0, "marine")} bitis={K(1, "They")} capa={[540, 620]} konum={[1000, 330]} metin="OMEGA-3 CAPSULES" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "one gram")} metin={s.meta.baslik?.satirlar[0] ?? ""} x={1350} y={190} boyut={92} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1350, top: 340, display: "flex", flexDirection: "column", gap: 20 }}>
        {satirlar.map((g, i) => {
          const [sc, al] = pop(t, g.bas, 0.5);
          return (
            <div key={g.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, alignSelf: "flex-start",
              marginTop: i === 2 ? 36 : 0, display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik,
              border: `3px solid ${g.renk}`, borderRadius: 999, padding: "10px 26px 10px 16px", fontFamily: INTER, fontWeight: 800,
              fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: g.renk }} />{g.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S14;
