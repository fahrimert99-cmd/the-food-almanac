// Sahne 56 — kapanış kartı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[]} />
      {/* abone ol hapı: altyazının altındaki boşlukta */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 790, display: "flex", justifyContent: "center" }}>
        <div style={{ transform: `scale(${sc})`, opacity: al, background: RENK.lacivert, color: "#fff", borderRadius: 999,
          padding: "14px 38px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 4 }}>SUBSCRIBE</div>
      </div>
    </>
  );
};

export default S56;
