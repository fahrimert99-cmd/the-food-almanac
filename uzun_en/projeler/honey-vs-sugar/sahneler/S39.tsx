// Sahne 39 — bölüm kartı: "Calories, limits and labels" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri (kusursuz 4:3 kırpımlar; 42'de sağ kenardaki sahte yazı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [140, 330, 1140, 1080] },
  { gorsel: "tam/41", kirp: [200, 330, 1200, 1080] },
  { gorsel: "tam/42", kirp: [760, 255, 1860, 1080] },
];

// Altyazı altındaki tek senkron öğe: üç konu
const ROZETLER = [
  { ifade: "calories,", metin: "CALORIES", renk: RENK.altin },
  { ifade: "daily", metin: "DAILY LIMITS", renk: RENK.lacivert },
  { ifade: "on the jar", metin: "ON THE JAR", renk: RENK.yesil },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ROZETLER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S39;
