// Sahne 44 — bölüm kartı: "How to use it" (PART 7) + beş yol sayacı.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri sıra ile: sebze (45 salata kasesi), protein (46 balık-yumurta-peynir), karbonhidrat (47 tabak; cep saati ve çatal-bıçak dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/45", kirp: [200, 320, 1053, 960] },
  { gorsel: "tam/46", kirp: [710, 270, 1790, 1080] },
  { gorsel: "tam/47", kirp: [560, 90, 1500, 795] },
];

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // "five" -> 1..5 numaralı daireler sırayla; arkalarında altın çizgi uzar
  const tBes = K(1, "five");
  const D = 56, ARA = 26;
  const pCizgi = eout(ilerle(t, tBes, 0.12 * 4 + 0.4));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, width: 5 * D + 4 * ARA, height: D }}>
        <div style={{ position: "absolute", left: D / 2, top: D / 2 - 2, height: 4, width: 4 * (D + ARA) * pCizgi,
          background: RENK.altin, borderRadius: 2 }} />
        {[1, 2, 3, 4, 5].map((n, i) => {
          const [sc, al] = pop(t, tBes + i * 0.12, 0.45);
          return (
            <div key={n} style={{ position: "absolute", left: i * (D + ARA), top: 0, width: D, height: D, borderRadius: "50%",
              background: RENK.lacivert, border: `4px solid ${RENK.kagitAcik}`, boxSizing: "border-box", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 30,
              transform: `scale(${sc})`, opacity: al, boxShadow: "0 6px 16px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S44;
