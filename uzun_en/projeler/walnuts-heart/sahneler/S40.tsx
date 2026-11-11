// Sahne 40 — iyi desteklenen bulgular: LDL az düşer, kilo artışı yok, apo B de düştü.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Metin hapı: ikonlu, kâğıt zeminli
const Chip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon: "onay" | "carpi" | "soru" | "ok"; boyut?: number; sag?: boolean }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 34, sag }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.4;
  return (
    <div style={{ position: "absolute", top: y, ...(sag ? { right: 1920 - x } : { left: x }), opacity: a, transform: `scale(${sc})`,
      transformOrigin: sag ? "100% 50%" : "0% 50%", display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
      background: "#FBF8F1", border: `3px solid ${renk}`, borderRadius: 999, padding: `8px ${boyut * 0.8}px 8px 10px`,
      fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={d * 0.6} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "Apo") - 0.3;
  const pTit = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "walnuts")} bitis={gec} capa={[860, 340]} konum={[1330, 330]} metin="WALNUTS" renk={RENK.altin} />
      </Kamera>
      <div style={{ opacity: pTit }}>
        <Baslik t={t} bas={K(0, "supported:") - 0.1} bitis={gec} metin="WELL" x={1860} y={150} boyut={88} hiza="sag" renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "supported:") + 0.1} bitis={gec} metin="SUPPORTED" x={1860} y={235} boyut={88} hiza="sag" renk={RENK.koyuYesil} />
      </div>
      <Chip t={t} bas={K(0, "LDL")} bitis={gec} x={60} y={590} metin="LDL DOWN A LITTLE" renk={RENK.yesil} ikon="onay" />
      <Chip t={t} bas={K(0, "pooled")} bitis={gec} x={60} y={680} metin="POOLED TRIALS" renk={RENK.yesil} ikon="onay" />
      <Chip t={t} bas={K(0, "two-year")} bitis={gec} x={60} y={770} metin="2-YEAR TRIAL, OLDER ADULTS" renk={RENK.yesil} ikon="onay" />
      <Chip t={t} bas={K(0, "without")} bitis={gec} x={60} y={860} metin="NO WEIGHT GAIN" renk={RENK.altin} ikon="onay" />
      <Baslik t={t} bas={K(1, "Apo")} metin="APO B" x={1860} y={150} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "fell")} metin="ALSO FELL" x={1860} y={255} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Chip t={t} bas={K(1, "pooled")} x={1860} y={345} metin="POOLED TRIALS" renk={RENK.yesil} ikon="onay" sag />
    </>
  );
};

export default S40;
