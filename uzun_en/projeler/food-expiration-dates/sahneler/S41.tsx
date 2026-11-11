// Sahne 41 — bölüm kartı: "The honest part" (PART 4).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 43 (terazi), 47 (süt + büyüteç), 48 (doktor masası) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/43", kirp: [380, 150, 1280, 825] },
  { gorsel: "tam/47", kirp: [500, 150, 1400, 825] },
  { gorsel: "tam/48", kirp: [300, 100, 1200, 775] },
];

// Altyazının altında: sağlam / belirsiz iki hap
const HAPLAR = [
  { ifade: "know,", metin: "WELL SUPPORTED", ad: "onay" as const, renk: RENK.yesil },
  { ifade: "don't", metin: "LESS CERTAIN", ad: "soru" as const, renk: RENK.altin },
];

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 22 }}>
        {HAPLAR.map((h) => {
          const [sc, al] = pop(t, K(1, h.ifade), 0.5);
          return (
            <div key={h.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${h.renk}`, borderRadius: 999,
              padding: "8px 26px 8px 10px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 42, height: 42, borderRadius: "50%", background: h.renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width={26} height={26} viewBox="0 0 48 48"><IkonCiz ad={h.ad} /></svg>
              </span>
              {h.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

// küçük simge çizimi (Ikon bileşeni daire zeminli olduğu için burada yol çiziliyor)
const IkonCiz: React.FC<{ ad: "onay" | "soru" }> = ({ ad }) => (
  <g fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
    {ad === "onay" ? <polyline points="9,25 20,36 39,13" /> : <><path d="M16 17 a8 8 0 1 1 11 7.5 c-2 1 -3 2.5 -3 5" /><circle cx="24" cy="37" r="0.8" /></>}
  </g>
);

export default S41;
