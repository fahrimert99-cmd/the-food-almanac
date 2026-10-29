// Sahne 43 — açık soru: kalp krizi ve inme ölçülmedi; birkaç mg/dL küçük bir değişim.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g1 = K(1, "The") - 0.15;
  const g2 = K(2, "And") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1740])}>
        <Etiket t={t} bas={K(0, "walnuts")} bitis={g2} capa={[1080, 590]} konum={[1260, 410]} metin="WALNUTS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "don't")} bitis={g2} metin="OPEN" x={1860} y={190} boyut={112} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "don't") + 0.2} bitis={g2} metin="QUESTION" x={1860} y={320} boyut={112} hiza="sag" renk={RENK.mercan} />
      <Chip t={t} bas={K(0, "heart")} bitis={g1} x={1860} y={500} metin="HEART ATTACKS?" renk={RENK.altin} ikon="soru" sag />
      <Chip t={t} bas={K(0, "strokes.")} bitis={g1} x={1860} y={590} metin="STROKES?" renk={RENK.altin} ikon="soru" sag />
      <Chip t={t} bas={K(1, "cholesterol,")} bitis={g2} x={1860} y={500} metin="CHOLESTEROL MEASURED" renk={RENK.yesil} ikon="onay" sag />
      <Chip t={t} bas={K(1, "not")} bitis={g2} x={1860} y={590} metin="HEART ATTACKS" renk={RENK.mercan} ikon="carpi" sag />
      <VurguRozet t={t} bas={K(2, "few")} vurgu="A FEW" not="mg/dL of LDL" x={1660} y={150} genislik={400} boyut={104} />
      <Not t={t} bas={K(2, "small")} metin="a small change" x={1860} y={400} hiza="sag" boyut={46} />
    </>
  );
};

export default S43;
