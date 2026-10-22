// Sahne 43 — bölüm kartı: "How to use it" (PART 6).
import React from "react";
import { BolumKarti, INTER, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar (47'deki imza dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [70, 200, 970, 875] },
  { gorsel: "tam/46", kirp: [100, 60, 1100, 810] },
  { gorsel: "tam/48", kirp: [60, 273, 1013, 988] },
];

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altında tek senkron öğe: dört numaralı daire */}
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 18 }}>
        {[1, 2, 3, 4].map((n, i) => {
          const [sc, al] = pop(t, bas + 0.1 + i * 0.32, 0.45);
          return (
            <React.Fragment key={n}>
              {i > 0 && <span style={{ opacity: al * 0.7, fontFamily: ANTON, fontSize: 30, color: RENK.altin }}>→</span>}
              <div style={{ transform: `scale(${sc})`, opacity: al, width: 72, height: 72, borderRadius: "50%", background: RENK.lacivert,
                color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 40,
                border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.16)", fontWeight: 400 }}>{n}</div>
            </React.Fragment>
          );
        })}
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.gri, marginLeft: 10,
          opacity: pop(t, bas + 1.5, 0.5)[1] }}>PRACTICAL WAYS</span>
      </div>
    </>
  );
};

export default S43;
