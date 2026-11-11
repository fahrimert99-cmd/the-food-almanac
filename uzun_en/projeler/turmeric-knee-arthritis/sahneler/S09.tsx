// Sahne 9 — bölüm kartı: "Turmeric vs ibuprofen" (PART 1).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümden kusursuz 4:3 kırpımlar (10: bekleme odası, 11: kapsül tepsisi, 12: botlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/10", kirp: [20, 330, 820, 930] },
  { gorsel: "tam/11", kirp: [50, 150, 1050, 900] },
  { gorsel: "tam/12", kirp: [60, 255, 1160, 1080] },
];

const ROZETLER = [
  { ifade: "start", metin: "TURMERIC EXTRACT", renk: RENK.altin },
  { ifade: "trial", metin: "IBUPROFEN", renk: RENK.lacivert },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(0, "start") + 0.25, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ROZETLER.map((o, i) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 26,
                  letterSpacing: 2, color: RENK.gri }}>VS</span>
              )}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
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

export default S09;
