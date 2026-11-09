// Sahne 23 — doktor masası: yüksek doz hap, genişletilmiş göz muayenesi
import React from "react";
import { BaslikBlok, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string }> = ({ t, bas, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800,
      fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 50, 1800])} />
      {t < 2.45 && <Pil t={t} bas={K(0, "high-dose")} metin="HIGH-DOSE PILLS, NOT FOOD" y={130} renk={RENK.altin} />}
      <Pil t={t} bas={K(1, "advice")} metin="RESEARCHERS' ADVICE" y={130} renk={RENK.altin} />
      <Pil t={t} bas={K(1, "everyone")} metin="EVERYONE OVER 55" y={225} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(1, "dilated")} satirlar={["DILATED", "EYE EXAM"]} x={1860} y={400} boyut={112} hiza="sag" />
      <Not t={t} bas={K(1, "dilated") + 0.6} metin="recommended for everyone over 55" x={1860} y={590} hiza="sag" genislik={560} boyut={30} />
      <Pil t={t} bas={K(1, "supplement")} metin="SUPPLEMENT: HIGHER RISK" y={720} renk={RENK.yesil} />
    </>
  );
};

export default S23;
