// Sahne 47 — bölüm kartı: "Spend where it counts"
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "Five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/48", kirp: [900, 240, 1700, 840] },
        { gorsel: "tam/50", kirp: [100, 180, 1100, 930] },
        { gorsel: "tam/51", kirp: [500, 100, 1400, 775] },
      ]} />
      {/* beş fikir: numaralı noktalar, "Five practical ideas" ile gelir */}
      {[1, 2, 3, 4, 5].map((n) => {
        const [sc, al] = pop(t, bas + 0.1 + (n - 1) * 0.16, 0.45);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + (n - 1) * 84, top: 740, width: 62, height: 62, borderRadius: "50%",
            background: n === 1 ? RENK.koyuYesil : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: ANTON, fontSize: 36, transform: `scale(${sc})`, opacity: al }}>{n}</div>
        );
      })}
    </>
  );
};

export default S47;
