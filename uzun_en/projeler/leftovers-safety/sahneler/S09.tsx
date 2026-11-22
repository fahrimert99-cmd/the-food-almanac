// Sahne 9 — bölüm kartı: "The two-hour rule".
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 10 (sofra + kum saati), 11 (piknik), 12 (pilav tenceresi), kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/10", kirp: [100, 210, 1100, 960] },
  { gorsel: "tam/11", kirp: [200, 180, 1400, 1080] },
  { gorsel: "tam/12", kirp: [250, 100, 1250, 850] },
];

// Altyazı altında tek senkron öğe: SAAT, GÜN değil
const OGELER = [
  { ifade: "hours,", metin: "HOURS", renk: RENK.yesil, ikon: "saat" as const },
  { ifade: "not days", metin: "NOT DAYS", renk: RENK.mercan, ikon: "carpi" as const },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {OGELER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
              alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`,
              borderRadius: 999, padding: "10px 26px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 38, height: 38, borderRadius: "50%", background: o.renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IkonYol ad={o.ikon} boyut={24} renk="#fff" kalinlik={7} />
              </span>
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S09;
