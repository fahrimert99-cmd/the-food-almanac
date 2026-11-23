// Sahne 11 — eski kâğıt, gözlük, papatya ve yıldız: çalışmanın sınırları.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// kenar sütunu hapı
const Hap2: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; no: number }> = ({ t, bas, x, y, metin, no }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
      alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
      padding: "10px 28px 10px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)", whiteSpace: "nowrap" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.altin, color: "#fff", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 26 }}>{no}</span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800]);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={w}>
        <Etiket t={t} bas={K(0, "asterisk")} bitis={K(1, "one") - 0.3} capa={[1180, 677]} konum={[1500, 700]} metin="AN ASTERISK" renk={RENK.altin} />
      </Kamera>
      <Hap2 t={t} bas={K(1, "site")} x={290} y={400} metin="ONE SITE" no={1} />
      <Hap2 t={t} bas={K(1, "60")} x={290} y={500} metin="60 PEOPLE" no={2} />
      <Hap2 t={t} bas={K(1, "extract")} x={1685} y={400} metin="EXTRACT, NOT TEA" no={3} />
      <Hap2 t={t} bas={K(1, "self-reported")} x={1685} y={500} metin="SELF-REPORTED" no={4} />
      <Baslik t={t} bas={K(2, "good")} metin="GOOD NEWS, WITH LIMITS" x={960} y={110} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S11;
