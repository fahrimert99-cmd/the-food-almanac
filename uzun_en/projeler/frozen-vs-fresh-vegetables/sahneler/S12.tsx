// Sahne 12 — bölüm kartı: "The head-to-head studies" (PART 2).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
// (13: sağ alttaki imza ve termometre yazısı dışarıda).
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/13", kirp: [150, 190, 1150, 940] },
  { gorsel: "tam/14", kirp: [200, 180, 1400, 1080] },
  { gorsel: "tam/15", kirp: [100, 30, 1500, 1080] },
];

// Altyazının altındaki boşlukta tek senkron öğe: karşılaştırılan üç durum
const DURUMLAR = [
  { metin: "FRESH", renk: RENK.yesil },
  { metin: "FRESH-STORED", renk: RENK.altin },
  { metin: "FROZEN", renk: RENK.lacivert },
];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "measure");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16 }}>
        {DURUMLAR.map((o, i) => {
          const [sc, al] = pop(t, bas + i * 0.3, 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center",
              gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "10px 24px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 18, height: 18, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S12;
