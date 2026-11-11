// Sahne 52 — bölüm kartı: 5 pratik ipucu
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

// Kart görselleri: 53 (somun+dilim), 55 (tabak), 56 (iki dilim; kablo ucu dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/53", kirp: [380, 100, 1400, 865] },
  { gorsel: "tam/55", kirp: [360, 50, 1560, 950] },
  { gorsel: "tam/56", kirp: [0, 300, 880, 960] },
];

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t0 = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n, i) => {
          const [sc, al] = pop(t, t0 + i * 0.22, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 74, height: 74, borderRadius: "50%", background: RENK.altin,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 44,
              boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S52;
