// Sahne 25 — Feng 2022 meta-analizi: 15 deneme, 1.670 kişi; ağrıda ~1,8 puan fark (şematik, ölçek sayısı yok).
import React from "react";
import { Baslik, Etiket, Ikon, INTER, IkonYol, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGec = 9.9;
  const tCur = K(1, "curcuminoids"), tLow = K(1, "lowered"), t18 = K(1, "1.8"), tNot = K(1, "noticeable");
  const pCiz = eout(ilerle(t, tLow, 0.9));
  const pOk = eout(ilerle(t, t18 - 0.4, 0.7));
  const [sI, aI] = pop(t, tNot, 0.5);
  const yP = 620, yC = 740; // plasebo çizgisi, curcuminoid çizgisi
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Etiket t={t} bas={K(0, "randomized")} bitis={tGec} capa={[640, 500]} konum={[1480, 600]} metin="RANDOMIZED TRIALS" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "15") - 0.15} bitis={tGec} metin="15 TRIALS" x={1860} y={250} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "1,670")} bitis={tGec} vurgu="1,670" not="patients pooled together" x={1560} y={330} genislik={480} />

      <Baslik t={t} bas={tCur - 0.2} metin="CURCUMINOIDS" x={1860} y={230} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      {/* şematik: placebo düzeyi ve daha düşük ağrı düzeyi — sayı yok */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1480} x2={1480 + 380 * pCiz} y1={yP} y2={yP} stroke={RENK.gri} strokeWidth={5} strokeDasharray="14 10" />
        <line x1={1480} x2={1480 + 380 * pCiz} y1={yC} y2={yC} stroke={RENK.koyuYesil} strokeWidth={8} strokeLinecap="round" />
        {pOk > 0 && (
          <g opacity={pOk}>
            <line x1={1740} x2={1740} y1={yP + 6} y2={yP + 6 + (yC - yP - 28) * pOk} stroke={RENK.altin} strokeWidth={7} strokeLinecap="round" />
            <polyline points={`1724,${yC - 36} 1740,${yC - 14} 1756,${yC - 36}`} fill="none" stroke={RENK.altin} strokeWidth={7}
              strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
      </svg>
      <div style={{ position: "absolute", left: 1480, top: yP - 44, opacity: pCiz, fontFamily: INTER, fontWeight: 800, fontSize: 26,
        letterSpacing: 1.5, color: RENK.gri }}>PLACEBO</div>
      <div style={{ position: "absolute", left: 1480, top: yC + 14, opacity: pCiz, fontFamily: INTER, fontWeight: 800, fontSize: 26,
        letterSpacing: 1.5, color: RENK.koyuYesil }}>KNEE PAIN, LOWER</div>
      <VurguRozet t={t} bas={t18} vurgu="–1.8" not="points on a pain scale" x={1670} y={400} genislik={380} boyut={96} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1480, top: 800, opacity: pCiz * 0.8, fontFamily: INTER, fontWeight: 700, fontSize: 22,
        letterSpacing: 2, color: RENK.gri }}>ILLUSTRATIVE</div>
      <div style={{ position: "absolute", left: 1860, top: 870, transform: `translate(-100%, 0) scale(${sI})`, transformOrigin: "100% 50%",
        opacity: aI, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "8px 26px 8px 10px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={28} renk="#fff" />
        </span>
        NOTICEABLE
      </div>
    </>
  );
};

export default S25;
