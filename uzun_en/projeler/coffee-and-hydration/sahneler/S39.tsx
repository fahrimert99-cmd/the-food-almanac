// Sahne 39 — bölüm kartı: "How much caffeine is safe" (PART 7).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar (yalnızca nesneler, yazı yok)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [100, 200, 980, 860] },
  { gorsel: "tam/41", kirp: [690, 300, 1690, 1050] },
  { gorsel: "tam/42", kirp: [50, 350, 950, 1025] },
];

// Altyazı altındaki boşlukta tek senkron öğe: iki kurum
const KURUMLAR = [
  { ifade: "major agencies", metin: "FDA", renk: RENK.koyuYesil },
  { ifade: "answered", metin: "EFSA", renk: RENK.altin },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {KURUMLAR.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ opacity: al, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.gri }}>+</span>}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 28px 10px 18px",
                fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
                boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
                {o.metin}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default S39;
