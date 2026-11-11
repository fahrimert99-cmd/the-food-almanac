// Sahne 53 — ipucu 1: tam tahıllı ekşi mayalı
import React from "react";
import { BaslikBlok, BolumKarti, Etiket, Hap, Ikon, Kamera, Liste, Panel, RENK, ANTON, INTER, SP, VurguRozet, KaynakEtiketi,
  Baslik, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Zıplayarak gelen hap
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

// Numara rozeti (ipucu sırası)
const No: React.FC<{ t: number; bas: number; n: string; x: number; y: number; bitis?: number }> = ({ t, bas, n, x, y, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.6);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, textAlign: "center" }}>
      <div style={{ width: 130, height: 130, borderRadius: "50%", background: RENK.altin, border: `5px solid ${RENK.kagitAcik}`,
        boxShadow: "0 10px 26px rgba(48,40,34,0.25)", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 96, color: "#fff", lineHeight: 1 }}>{n}</div>
      <div style={{ marginTop: 8, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.lacivert }}>TIP</div>
    </div>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "whole")} bitis={K(2, "pooled") - 0.2} capa={[640, 520]} konum={[880, 90]} metin="WHOLE GRAIN SOURDOUGH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "strongest")} capa={[1280, 480]} konum={[1450, 170]} metin="STRONGEST POOLED RESULTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <No t={t} bas={0.0} n="1" x={140} y={190} />
    </>
  );
};
export default S53;
