// Sahne 59 — kapanış kartı: abone ol + eğitim amaçlı uyarı.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [560, 180, 1760, 1080] },
  { gorsel: "tam/57", kirp: [500, 100, 1500, 850] },
  { gorsel: "tam/54", kirp: [900, 200, 1900, 950] },
];

// Altyazı altında tek senkron hap: önce SUBSCRIBE, sonra eğitim notu
const Hap: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string }> = ({ t, bas, bitis, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = t >= bitis ? 0 : al;
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEgitim = K(1, "education");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <Hap t={t} bas={K(0, "subscribe")} bitis={tEgitim - 0.1} metin="SUBSCRIBE" renk={RENK.mercan} />
      <Hap t={t} bas={tEgitim} bitis={1e9} metin="FOR EDUCATION ONLY" renk={RENK.altin} />
    </>
  );
};

export default S59;
