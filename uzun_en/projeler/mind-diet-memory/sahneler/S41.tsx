// Sahne 41 — meta-analiz: sekiz çalışma, 26,103 kişi, MIND puanı → düşünme puanı, küçük bağ + belirsizlik aralığı.
import React from "react";
import { AdimAkisi, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSekiz = K(0, "eight");
  const cik0 = c[1].bas - 0.1;
  const tAralik = K(2, "range");
  const [sK, aK] = pop(t, K(2, "tiny"), 0.5);
  const pAr = eout(ilerle(t, tAralik, 0.7));
  const [sN, aN] = pop(t, K(2, "no effect"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "analysis")} />
      {/* sekiz çalışma: sırayla yanan sekiz hap */}
      {Array.from({ length: 8 }, (_, i) => {
        const [sc, al] = pop(t, tSekiz + 0.12 * i, 0.4);
        const a = al * sol(t, cik0, 0.4);
        if (a <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 130 + i * 92, top: 150, width: 74, height: 74, borderRadius: "50%", opacity: a,
            transform: `scale(${sc})`, background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: INTER, fontWeight: 800, fontSize: 34, boxShadow: "0 6px 16px rgba(48,40,34,0.22)" }}>{i + 1}</div>
        );
      })}
      <VurguRozet t={t} bas={K(0, "26,103")} vurgu="26,103" not="people pooled" x={1380} y={50} genislik={340} boyut={90} bitis={cik0 + 0.2} />
      {/* 2. cümle: MIND puanı → düşünme puanı */}
      <AdimAkisi t={t} x={960} y={178} boyut={32} numarali={false} adimlar={[
        { bas: K(1, "MIND"), metin: "HIGHER MIND SCORE", renk: RENK.altin },
        { bas: K(1, "better"), metin: "BETTER THINKING SCORES", renk: RENK.yesil },
      ]} />
      {/* 3. cümle: küçük bağ ve belirsizlik aralığı (şematik, sayısız) */}
      {aK > 0 && (
        <div style={{ position: "absolute", left: 1150, top: 760, width: 690, height: 180, borderRadius: 22, background: "rgba(252,248,236,0.95)",
          border: `3px solid ${RENK.altin}`, boxShadow: "0 10px 26px rgba(48,40,34,0.18)", opacity: aK }}>
          <div style={{ position: "absolute", left: 24, top: 10, transform: `scale(${sK})`, transformOrigin: "0 0", fontFamily: INTER,
            fontWeight: 800, fontSize: 26, letterSpacing: 1, color: RENK.lacivert }}>LINK TO SLOWER DECLINE: TINY</div>
          <svg width={690} height={180} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={345} x2={345} y1={56} y2={132} stroke={RENK.murekkep} strokeWidth={3} strokeDasharray="8 7" />
            <line x1={345 - 190 * pAr} x2={345 + 190 * pAr} y1={96} y2={96} stroke={RENK.koyuYesil} strokeWidth={10} strokeLinecap="round" />
            <circle cx={375} cy={96} r={11} fill={RENK.koyuYesil} opacity={pAr} />
          </svg>
          <div style={{ position: "absolute", left: 345, top: 134, transform: `translateX(-50%) scale(${sN})`, opacity: aN, fontFamily: INTER,
            fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.mercan, whiteSpace: "nowrap" }}>NO EFFECT</div>
          <div style={{ position: "absolute", right: 18, top: 138, fontFamily: INTER, fontWeight: 700, fontSize: 18, letterSpacing: 2, color: RENK.gri }}>ILLUSTRATIVE</div>
        </div>
      )}
    </>
  );
};

export default S41;
