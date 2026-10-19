// Sahne 56 — Kapanış kartı: abone ol + yalnızca eğitim amaçlı notu.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, eout, ilerle, kelimeZamani, sol } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, metin, renk }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: 800, opacity: a, transform: `translateY(${(1 - a) * 14}px)`, display: "flex",
      alignItems: "center", gap: 18, background: renk, borderRadius: 999, padding: "12px 34px 12px 14px", color: "#fff",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
      {metin}
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tE = K(1, "This") - 0.1;
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/52", kirp: [100, 240, 1060, 960] },
        { gorsel: "tam/55", kirp: [180, 150, 1280, 975] },
        { gorsel: "tam/54", kirp: [200, 120, 1360, 990] },
      ]} />
      <Hapcik t={t} bas={K(0, "subscribe")} bitis={tE} metin={`SUBSCRIBE · ${MARKA.filigran}`} renk={RENK.mercan} />
      <Hapcik t={t} bas={K(1, "education")} metin="FOR EDUCATION ONLY" renk={RENK.lacivert} />
    </>
  );
};

export default S56;
