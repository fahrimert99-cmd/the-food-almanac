// Sahne 60 — kapanış kartı: Evidence over hype.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/59", kirp: [200, 20, 1600, 1070] },
  { gorsel: "tam/57", kirp: [330, 250, 1260, 947] },
  { gorsel: "tam/58", kirp: [240, 60, 1440, 960] },
];

const Hap2: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />
      {metin}
    </div>
  );
};

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAbone = K(0, "subscribe"), tSon = K(2, "See you");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <Hap2 t={t} bas={tAbone} bitis={tSon - 0.1} metin="SUBSCRIBE" renk={RENK.mercan} />
      <Hap2 t={t} bas={tSon} metin="SEE YOU IN THE NEXT ONE" renk={RENK.altin} />
    </>
  );
};

export default S60;
