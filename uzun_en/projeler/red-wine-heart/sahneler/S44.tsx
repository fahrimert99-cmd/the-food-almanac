// Sahne 44 — Bölüm kartı: "Five practical points" + beş numaralı nokta.
import React from "react";
import { ANTON, BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/45", kirp: [800, 240, 1760, 960] },
        { gorsel: "tam/46", kirp: [60, 180, 1020, 900] },
        { gorsel: "tam/48", kirp: [840, 200, 1800, 920] },
      ]} />
      {[1, 2, 3, 4, 5].map((n, i) => {
        const [sc, al] = pop(t, tFive + i * 0.1, 0.5);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + i * 84, top: 840, width: 64, height: 64, borderRadius: "50%",
            background: i % 2 ? RENK.koyuYesil : RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 38, transform: `scale(${sc})`, opacity: al, fontWeight: 400 }}>{n}</div>
        );
      })}
    </>
  );
};
void INTER;
export default S44;
