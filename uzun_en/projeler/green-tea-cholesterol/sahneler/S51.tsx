// Sahne 51 — İpucu 1: fincan, kapsül değil. Fincan ve konsantre özüt kavanozu etiketlenir.
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, ANTON, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon: "onay" | "uyari"; bitis?: number }> =
  ({ t, bas, x, y, metin, renk, ikon, bitis = 1e9 }) => {
    const [sc, al] = pop(t, bas, 0.5);
    if (al <= 0) return null;
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
        padding: "8px 24px 8px 10px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 42, height: 42, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={ikon} boyut={26} renk="#fff" />
        </span>
        {metin}
      </div>
    );
  };

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.55);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [90, 50, 1740])} />
      {/* 1. ipucu rozeti (boş kâğıt alanı) */}
      <div style={{ position: "absolute", left: 150, top: 160, transform: `scale(${sb})`, opacity: ab, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 92, height: 92, borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60 }}>1</div>
      </div>
      <Etiket t={t} bas={K(1, "cup,")} capa={[900, 640]} konum={[330, 360]} metin="THE CUP" renk={RENK.yesil} />
      <Hap t={t} bas={K(2, "long safety record")} x={420} y={500} metin="LONG SAFETY RECORD" renk={RENK.yesil} ikon="onay" />
      <Etiket t={t} bas={K(3, "concentrated")} capa={[950, 300]} konum={[1520, 210]} metin="CONCENTRATED EXTRACT" renk={RENK.mercan} />
      <Hap t={t} bas={K(3, "liver")} x={1440} y={330} metin="LIVER WARNINGS" renk={RENK.mercan} ikon="uyari" />
    </>
  );
};

export default S51;
