// Sahne 56 — kapanış kartı
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(0, "subscribe");
  const p = eout(ilerle(t, bas, 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/53", kirp: [500, 180, 1620, 1020] },
        { gorsel: "tam/54", kirp: [360, 120, 1560, 1020] },
        { gorsel: "tam/55", kirp: [250, 150, 1450, 1050] },
      ]} />
      {/* abone ol hapı: "subscribe" kelimesiyle gelir */}
      <div style={{ position: "absolute", left: 140, top: 800, opacity: p, transform: `translateY(${(1 - p) * 14}px)`,
        display: "flex", alignItems: "center", gap: 16, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "14px 34px 14px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3 }}>
        <span style={{ width: 16, height: 16, borderRadius: "50%", background: RENK.altin }} />
        SUBSCRIBE · {MARKA.filigran}
      </div>
    </>
  );
};

export default S56;
