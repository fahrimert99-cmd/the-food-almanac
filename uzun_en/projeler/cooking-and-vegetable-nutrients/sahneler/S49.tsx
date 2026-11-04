// Sahne 49 — Alışkanlık 1: buharda ya da mikrodalgada pişir.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Yerel yardımcılar: sayı rozeti ve hap.
const Sayi: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 52, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      border: `4px solid ${RENK.altin}`, boxSizing: "border-box", color: "#fff", fontFamily: ANTON, fontSize: 66, lineHeight: "88px",
      textAlign: "center", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon?: "onay" | "carpi" | "ok" | "saat"; boyut?: number }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 26px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      {ikon ? <IkonYol ad={ikon} boyut={boyut * 1.2} renk={renk} kalinlik={7} />
        : <span style={{ width: boyut * 0.5, height: boyut * 0.5, borderRadius: "50%", background: renk, flex: "none" }} />}
      {metin}
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBuhar = K(1, "steam"), tMik = K(1, "microwave"), tSu = K(1, "splash of water");
  const tNazik = K(1, "just until tender"), tAtla = K(2, "skip");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tBuhar} bitis={4.4} capa={[1347, 420]} konum={[1347, 190]} metin="BAMBOO STEAMER" renk={RENK.altin} />
        <Etiket t={t} bas={tMik} bitis={4.4} capa={[330, 590]} konum={[250, 400]} metin="COVERED DISH" renk={RENK.yesil} />
        <Etiket t={t} bas={tSu} bitis={6.0} capa={[667, 750]} konum={[960, 880]} metin="SPLASH OF WATER" renk={RENK.altin} />
      </Kamera>
      <Sayi t={t} n="1" />
      <Baslik t={t} bas={tBuhar - 0.1} metin="STEAM OR MICROWAVE" x={180} y={102} boyut={82} renk={RENK.koyuYesil} />
      <Pil t={t} bas={tNazik} bitis={6.0} x={1347} y={190} metin="JUST UNTIL TENDER" renk={RENK.yesil} ikon="onay" />
      <Pil t={t} bas={tAtla} x={1347} y={190} metin="SKIP THE LONG BOIL" renk={RENK.mercan} ikon="carpi" />
    </>
  );
};

export default S49;
