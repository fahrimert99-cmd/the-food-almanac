// Sahne 15 — terazi: iki uyarı, sonra "aynı aralıkta" ve "yerine geçmez".
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağa yaslı hap (kâğıt zeminli)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; y: number; renk: string }> = ({ t, bas, bitis = 1e9, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = t > bitis ? Math.max(0, 1 - (t - bitis) / 0.4) : al;
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
      fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <BaslikBlok t={t} bas={K(0, "Two")} satirlar={["TWO", "CAUTIONS"]} x={1860} y={150} boyut={80} hiza="sag" bitis={4.5} />
      <Pil t={t} bas={K(1, "Four weeks")} bitis={4.5} metin="ONLY 4 WEEKS" y={340} renk={RENK.altin} />
      <Pil t={t} bas={K(1, "most volunteers")} bitis={4.5} metin="MOSTLY WOMEN" y={430} renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "turmeric")} bitis={9.6} capa={[1500, 590]} konum={[1640, 400]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "ibuprofen")} bitis={9.6} capa={[640, 610]} konum={[290, 420]} metin="IBUPROFEN" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "same range")} bitis={9.6} metin="SAME RANGE" x={1240} y={115} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
      <BaslikBlok t={t} bas={K(3, "does not show")} satirlar={["NOT A", "REPLACEMENT"]} x={1860} y={150} boyut={80} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S15;
