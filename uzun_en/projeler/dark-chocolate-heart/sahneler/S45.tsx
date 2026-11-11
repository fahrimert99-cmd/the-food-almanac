// Sahne 45 — bölüm kartı: beş pratik yol
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/46", kirp: [250, 10, 1650, 1060] },
        { gorsel: "tam/47", kirp: [0, 100, 1280, 1060] },
        { gorsel: "tam/48", kirp: [100, 60, 1100, 810] },
      ]} />
      {/* beş numara noktası, "five" ile gelir */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, tFive + (n - 1) * 0.12, 0.45);
          return <div key={n} style={{ width: 72, height: 72, borderRadius: "50%", background: RENK.altin, color: "#fff", display: "flex",
            alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 40, transform: `scale(${sc})`, opacity: al }}>{n}</div>;
        })}
      </div>
    </>
  );
};

export default S45;
