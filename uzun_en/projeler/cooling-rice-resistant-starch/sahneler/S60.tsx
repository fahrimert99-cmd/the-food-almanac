// Sahne 60 — kapanış kartı: abone ol, bilgilendirme amaçlıdır.
import React from "react";
import { BolumKarti, INTER, MARKA, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [120, 230, 840, 770] },
  { gorsel: "tam/59", kirp: [330, 200, 1030, 725] },
  { gorsel: "tam/58", kirp: [560, 330, 1360, 930] },
];

const Hap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: renk }} />
      {metin}
    </div>
  );
};

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEdu = K(1, "education");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <Hap t={t} bas={K(0, "subscribe")} bitis={tEdu - 0.2} metin={`SUBSCRIBE · ${MARKA.filigran}`} renk={RENK.mercan} />
      <Hap t={t} bas={tEdu} metin="FOR EDUCATION ONLY" renk={RENK.altin} />
    </>
  );
};

export default S60;
