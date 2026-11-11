// Sahne 18 — bölüm kartı: ilaçlar (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm görsellerinden kusursuz 4:3 kırpımlar (yazı, takvim ve imza dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/19", kirp: [560, 330, 1160, 780] },
  { gorsel: "tam/20", kirp: [560, 180, 1360, 780] },
  { gorsel: "tam/22", kirp: [0, 300, 800, 900] },
];

const ILACLAR = [
  { ifade: "kinds", metin: "METFORMIN", renk: RENK.altin },
  { ifade: "medicine", metin: "ACID REDUCERS", renk: RENK.koyuYesil },
];

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "kinds") + 0.3, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ILACLAR.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 26,
                  letterSpacing: 2, color: RENK.gri }}>+</span>
              )}
              <div style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
                whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
                padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
                color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
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

export default S18;
