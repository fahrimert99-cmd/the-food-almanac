// Sahne 5 — bölüm kartı: THE BASICS.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: 04 kavanoz+somun, 06 kavanoz+un (kusurlu köşeler dışarıda), 07 somun
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/04", kirp: [350, 200, 1350, 950] },
  { gorsel: "tam/06", kirp: [260, 100, 1460, 1000] },
  { gorsel: "tam/07", kirp: [840, 100, 1840, 850] },
];

const PILLER = [
  { ifade: "oldest", metin: "ONE OF THE OLDEST", renk: RENK.altin },
  { ifade: "misunderstood", metin: "MISUNDERSTOOD", renk: RENK.mercan },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 18, alignItems: "center" }}>
        {PILLER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999, padding: "10px 26px 10px 18px",
              fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: o.renk, flex: "none" }} />
              {o.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S05;
