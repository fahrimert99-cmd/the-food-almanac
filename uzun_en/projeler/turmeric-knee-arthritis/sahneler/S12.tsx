// Sahne 12 — yürüyüş botları: iki kolun sonuçları yaklaşık aynı (şematik, sayısız).
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SATIRLAR = [
  { ifade: [0, "pain"], ad: "PAIN" },
  { ifade: [0, "daily-function"], ad: "DAILY FUNCTION" },
  { ifade: [2, "six"], ad: "6-MINUTE WALK" },
] as const;

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bLeg = K(0, "pain");
  const [sl, al] = pop(t, bLeg, 0.5);
  const [sn, an] = pop(t, K(1, "not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [60, 100, 1760])}>
        <Etiket t={t} bas={K(2, "walk")} capa={[330, 640]} konum={[640, 330]} metin="WALKING SHOES" renk={RENK.altin} />
      </Kamera>
      {/* iki kolun şematik çubukları: eşit uzunlukta, veri çizilmez */}
      <div style={{ position: "absolute", left: 1000, top: 360, opacity: al, transform: `scale(${sl})`, transformOrigin: "0 50%",
        display: "flex", gap: 28, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>
        <span><span style={{ color: RENK.altin }}>■</span> TURMERIC</span>
        <span><span style={{ color: RENK.lacivert }}>■</span> IBUPROFEN</span>
      </div>
      <div style={{ position: "absolute", left: 1640, top: 364, opacity: al, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 2, color: RENK.gri }}>ILLUSTRATIVE</div>
      {SATIRLAR.map((r, i) => {
        const b = K(r.ifade[0], r.ifade[1]);
        const p = eout(ilerle(t, b, 0.8));
        if (p <= 0) return null;
        const y = 415 + i * 105;
        return (
          <div key={r.ad} style={{ position: "absolute", left: 1000, top: y, width: 860, opacity: Math.min(1, p * 2) }}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert, letterSpacing: 1 }}>{r.ad}</div>
            <div style={{ height: 22, width: 640 * p, background: RENK.altin, borderRadius: 11, marginTop: 8 }} />
            <div style={{ height: 22, width: 640 * p, background: RENK.lacivert, borderRadius: 11, marginTop: 8 }} />
          </div>
        );
      })}
      <Baslik t={t} bas={K(0, "very")} metin="ABOUT THE" x={1860} y={170} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "very") + 0.18} metin="SAME" x={1860} y={282} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", left: 1560, top: 800, transform: `translate(-50%, 0) scale(${sn})`, opacity: an }}>
        <Hap metin="NOT WORSE THAN IBUPROFEN" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S12;
