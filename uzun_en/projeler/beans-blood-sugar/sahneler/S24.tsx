// Sahne 24 — GRADE: kesinlik çok düşük; küçük, farklı çalışmalar; aralık "etki yok"u içeriyor.
import React from "react";
import { Baslik, Hap, INTER, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAralik = K(1, "range");
  const tSolma = tAralik - 0.15;
  const pil = (bas: number, metin: string, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", right: 70, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al * sol(t, tSolma, 0.4) }}>
        <Hap metin={metin} renk={renk} boyut={36} />
      </div>
    );
  };
  // aralık çubuğu (şematik, sayı yok)
  const pA = einout(ilerle(t, tAralik, 0.9));
  const x0 = 1330, x1 = 1800, y = 700, sifir = 1560;
  const [sl, al] = pop(t, K(1, "likely"), 0.5);
  const [sn, an] = pop(t, K(1, "no"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1790])} />
      <Baslik t={t} bas={K(0, "certainty")} metin={s.meta.baslik!.satirlar[0]} x={1860} y={230} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "very")} metin={s.meta.baslik!.satirlar[1]} x={1860} y={350} boyut={104} hiza="sag" renk={RENK.mercan} />
      {pil(K(1, "small"), "SMALL TRIALS", 450, RENK.altin)}
      {pil(K(1, "different"), "VARIED TRIALS", 540, RENK.altin)}
      {pA > 0 && (
        <>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={x0} x2={x1} y1={y + 70} y2={y + 70} stroke={RENK.lacivert} strokeWidth={3} opacity={0.5 * pA} />
            <line x1={x0 + (x1 - x0) * 0.5 * (1 - pA)} x2={x0 + (x1 - x0) * (0.5 + 0.5 * pA)} y1={y} y2={y} stroke={RENK.altin} strokeWidth={14} strokeLinecap="round" />
            <line x1={sifir} x2={sifir} y1={y - 60} y2={y + 70} stroke={RENK.mercan} strokeWidth={5} strokeDasharray="12 9" opacity={an} />
          </svg>
          <div style={{ position: "absolute", left: (x0 + x1) / 2, top: y - 110, transform: `translate(-50%,0) scale(${sl})`, opacity: al }}>
            <Hap metin="LIKELY RANGE" renk={RENK.altin} boyut={28} />
          </div>
          <div style={{ position: "absolute", left: sifir, top: y + 90, transform: `translate(-50%,0) scale(${sn})`, opacity: an }}>
            <Hap metin="NO EFFECT" renk={RENK.mercan} boyut={28} />
          </div>
          <div style={{ position: "absolute", left: x0, top: y + 170, opacity: pA, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
        </>
      )}
    </>
  );
};

export default S24;
