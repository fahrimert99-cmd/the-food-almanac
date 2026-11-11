// Sahne 45 — bölüm kartı: 7. bölüm, dört adım (yalnızca 1-4 numaraları, "four steps" ile).
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "four steps");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/46", kirp: [0, 120, 1200, 1020] },
        { gorsel: "tam/47", kirp: [200, 100, 1400, 1000] },
        { gorsel: "tam/41", kirp: [40, 40, 980, 745] },
      ]} />
      {[1, 2, 3, 4].map((n, i) => {
        const [sc, al] = pop(t, bas + i * 0.14, 0.45);
        return (
          <div key={n} style={{ position: "absolute", left: 140 + i * 110, top: 790, width: 84, height: 84, borderRadius: "50%",
            background: [RENK.yesil, RENK.altin, RENK.koyuYesil, RENK.lacivert][i], color: "#fff", display: "flex", alignItems: "center",
            justifyContent: "center", fontFamily: ANTON, fontSize: 52, transform: `scale(${sc})`, opacity: al,
            boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
        );
      })}
    </>
  );
};

export default S45;
