// Sahne 61 — kapanış kartı: abone ol, eğitim amaçlıdır, görüşürüz.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

// Altyazının altındaki tek küçük hap; metin anlatımla değişir.
const Hap2: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string }> = ({ t, bas, bitis, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis, 0.35);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: 800, opacity: a, transform: `scale(${sc})`, transformOrigin: "0 50%",
      display: "flex", alignItems: "center", gap: 14, background: renk, color: "#fff", borderRadius: 999,
      padding: "12px 32px 12px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 16, height: 16, borderRadius: "50%", background: RENK.kagit }} />{metin}
    </div>
  );
};

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "subscribe"), t2 = K(1, "education"), t3 = K(2, "See");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/54", kirp: [1060, 400, 1820, 970] },
        { gorsel: "tam/55", kirp: [230, 290, 1270, 1070] },
      ]} />
      <Hap2 t={t} bas={t1} bitis={t2 - 0.1} metin="SUBSCRIBE" renk={RENK.mercan} />
      <Hap2 t={t} bas={t2} bitis={t3 - 0.1} metin="EDUCATION ONLY" renk={RENK.lacivert} />
      <Hap2 t={t} bas={t3} bitis={1e9} metin="SEE YOU NEXT TIME" renk={RENK.koyuYesil} />
    </>
  );
};

export default S61;
