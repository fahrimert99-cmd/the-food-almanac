// Sahne 43 — BÖLÜM 6 kartı: "Make it a habit". Beş numaralı nokta "five" kelimesiyle sırayla yanar.
import React from "react";
import { ANTON, BolumKarti, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  const tWays = K(1, "ways");
  const aYol = eout(ilerle(t, tFive + 0.4, 0.8));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/44", kirp: [800, 60, 1760, 780] },
        { gorsel: "tam/47", kirp: [60, 360, 1020, 1080] },
        { gorsel: "tam/45", kirp: [900, 300, 1860, 1020] },
      ]} />
      {/* beş adım noktası */}
      <div style={{ position: "absolute", left: 140 + 36, top: 838, width: 4 * 112 * aYol, height: 5, background: RENK.altin, opacity: 0.6 }} />
      {[1, 2, 3, 4, 5].map((n, i) => {
        const [sc, al] = pop(t, tFive + i * 0.16, 0.45);
        const son = n === 5 ? pop(t, tWays, 0.5)[0] : 1;
        return (
          <div key={n} style={{ position: "absolute", left: 140 + i * 112, top: 802, width: 72, height: 72, borderRadius: "50%",
            background: n === 5 ? RENK.altin : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 40, opacity: al, transform: `scale(${sc * son})`, border: `4px solid ${RENK.kagitAcik}`,
            boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{n}</div>
        );
      })}
    </>
  );
};

export default S43;
