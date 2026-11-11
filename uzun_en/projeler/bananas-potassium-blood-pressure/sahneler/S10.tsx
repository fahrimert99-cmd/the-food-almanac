// Sahne 10 — bölüm kartı: potasyum ve sodyum.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: böbrekler (moleküllerin yazıları dışarıda), tahterevalli, terazi/muz
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [380, 230, 1010, 702] },
  { gorsel: "tam/12", kirp: [260, 180, 1460, 1080] },
  { gorsel: "tam/13", kirp: [960, 300, 1760, 900] },
];

const ADIMLAR = [
  { ifade: "idea", metin: "THE IDEA", renk: RENK.altin },
  { ifade: "evidence", metin: "THE EVIDENCE", renk: RENK.yesil },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sv, av] = pop(t, K(1, "idea") + 0.25, 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {ADIMLAR.map((o, i) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && (
                <span style={{ transform: `scale(${sv})`, opacity: av, fontFamily: INTER, fontWeight: 800, fontSize: 30,
                  color: RENK.altin }}>→</span>
              )}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12,
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

export default S10;
