// Sahne 39 — bölüm kartı: "Who should be careful" (PART 6).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (40: yalnızca yarım pancar; 41: kitaplar ve gözlük; 41: pancar ve suyu)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [180, 320, 780, 770] },
  { gorsel: "tam/41", kirp: [120, 520, 780, 1015] },
  { gorsel: "tam/41", kirp: [1060, 440, 1860, 1040] },
];

// Altyazının altındaki boşlukta iki senkron hap: dikkat edilecekler ve bilinmeyenler
const HAPLAR = [
  { ifade: "careful", metin: "WHO SHOULD BE CAREFUL", renk: RENK.mercan },
  { ifade: "not", metin: "WHAT WE DON'T KNOW", renk: RENK.altin },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {HAPLAR.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
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

export default S39;
