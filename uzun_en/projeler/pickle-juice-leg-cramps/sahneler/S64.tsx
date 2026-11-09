// Sahne 64 — kapanış kartı: abone ol, sadece eğitim amaçlı.
import React from "react";
import { BolumKarti, INTER, IkonYol, MARKA, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const Hapi: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; ikon: "onay" | "uyari" | "ok" }> = ({ t, bas, bitis = 1e9, metin, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: 800, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a, display: "flex", alignItems: "center", gap: 16,
      background: renk, color: "#fff", borderRadius: 999, padding: "12px 34px 12px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, whiteSpace: "nowrap" }}>
      <IkonYol ad={ikon} boyut={36} renk="#fff" />
      {metin}
    </div>
  );
};

const S64: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} />
      <Hapi t={t} bas={K(0, "subscribe")} bitis={7.2} metin={`SUBSCRIBE · ${MARKA.filigran}`} renk={RENK.mercan} ikon="ok" />
      <Hapi t={t} bas={K(1, "education only")} bitis={11.8} metin="FOR EDUCATION ONLY" renk={RENK.lacivert} ikon="uyari" />
      <Hapi t={t} bas={K(2, "See you")} metin="SEE YOU IN THE NEXT ONE" renk={RENK.koyuYesil} ikon="onay" />
    </>
  );
};

export default S64;
