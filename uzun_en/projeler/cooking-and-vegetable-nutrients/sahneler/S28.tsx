// Sahne 28 — uyarı: salça işlenmiş üründür; taze domates ile karşılaştırma, pişmiş-çiğ değil.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ok?: boolean; bitis?: number }> = ({ t, bas, x, y, metin, renk, ok, bitis = 1e9 }) => {
  const [sc, al0] = pop(t, bas, 0.5);
  const al = al0 * sol(t, bitis);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex", alignItems: "center",
      gap: 12, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 32px 10px 14px",
      boxShadow: "0 10px 26px rgba(48,40,34,0.22)", whiteSpace: "nowrap" }}>
      {ok && <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="ok" boyut={28} renk="#fff" kalinlik={7} /></span>}
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCav = K(0, "caveat");
  const tSalca = K(1, "tomato paste");
  const tIsl = K(1, "processed");
  const tTaze = K(1, "fresh");
  const tNot = K(1, "not simply");
  const tPoints = K(2, "points");
  const tLab = K(2, "laboratory");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [100, 60, 1720], [170, 110, 1580])}>
        <Etiket t={t} bas={tSalca} bitis={tNot} capa={[960, 330]} konum={[960, 95]} metin="TOMATO PASTE" renk={RENK.mercan} />
        <Etiket t={t} bas={tTaze} bitis={tNot} capa={[520, 700]} konum={[330, 930]} metin="FRESH TOMATO" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tCav} bitis={1.5} metin="ONE CAVEAT" x={960} y={110} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      <Pill t={t} bas={tIsl} bitis={tNot} x={470} y={70} metin="PROCESSED PRODUCT" renk={RENK.altin} />
      <Baslik t={t} bas={tNot} bitis={8.2} metin="NOT COOKED VS. RAW" x={1180} y={90} boyut={84} renk={RENK.mercan} hiza="orta" />
      <Pill t={t} bas={tPoints} x={1100} y={60} metin="SAME DIRECTION" renk={RENK.yesil} ok />
      <Pill t={t} bas={tLab} x={1100} y={150} metin="AS THE LAB RESULTS" renk={RENK.yesil} />
    </>
  );
};

export default S28;
