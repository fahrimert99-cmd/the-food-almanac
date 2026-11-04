// Sahne 55 — Tek tabakta tüm fikirler.
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

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTabak = K(0, "dinner plate"), tFasulye = K(0, "steamed"), tHavuc = K(0, "roasted"), tYag = K(0, "olive oil");
  const tSos = K(0, "simmered"), tEt = K(0, "favorite protein");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={tFasulye} capa={[560, 430]} konum={[340, 300]} metin="STEAMED GREEN BEANS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tHavuc} capa={[1067, 300]} konum={[1130, 150]} metin="ROASTED CARROTS" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tSos} capa={[960, 730]} konum={[360, 800]} metin="SIMMERED TOMATO SAUCE" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tEt} capa={[1150, 600]} konum={[1250, 850]} metin="FAVORITE PROTEIN" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tTabak} metin="ONE DINNER PLATE" x={80} y={105} boyut={82} renk={RENK.koyuYesil} />
      <Pil t={t} bas={tYag} x={1768} y={300} metin="+ OLIVE OIL" renk={RENK.yesil} boyut={22} />
    </>
  );
};

export default S55;
