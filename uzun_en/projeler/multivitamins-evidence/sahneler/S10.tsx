// Sahne 10 — bölüm kartı: Physicians' Health Study II (PART 1).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/15", kirp: [100, 180, 1300, 1080] },
  { gorsel: "tam/12", kirp: [200, 140, 1400, 1040] },
  { gorsel: "tam/14", kirp: [40, 100, 1160, 940] },
];

// Altyazının üstündeki boşlukta tek senkron öğe: üç soru
const SORULAR = [
  { ifade: "heart,", metin: "HEART", renk: RENK.mercan },
  { ifade: "cancer", metin: "CANCER", renk: RENK.altin },
  { ifade: "eyes.", metin: "EYES", renk: RENK.yesil },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 820, display: "flex", alignItems: "center", gap: 18 }}>
        {SORULAR.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S10;
