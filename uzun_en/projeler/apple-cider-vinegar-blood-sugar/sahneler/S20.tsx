// Sahne 20 — Sağlıklı yetişkinlerde etki daha küçük: sağda başlık, "anlamlılık sınırı" şeması, sonra küçük sivri eğri.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHealthy = K(0, "volunteers,"), tSit = K(0, "sitting"), tEdge = K(0, "edge"), tSig = K(0, "statistical");
  const tIdea = K(1, "simple"), tSmall = K(1, "smaller"), tGain = K(1, "less");
  const tS1 = s.cumleler[1].bas - 0.2;
  // şema 1: eşik çizgisi + işaretçi
  const a1 = eout(ilerle(t, tSit, 0.5)) * sol(t, tS1);
  const gelis = einout(ilerle(t, tSit, tEdge - tSit + 0.2));
  const px = 980 + (1290 - 980) * gelis;
  const [sl, al] = pop(t, tSig, 0.5);
  // şema 2: küçük sivri eğri ve altın "kazanç" alanı
  const p2 = einout(ilerle(t, tSmall, 1.4));
  const x0 = 960, y0 = 790;
  const d = `M ${x0} ${y0} C ${x0 + 150} ${y0}, ${x0 + 200} ${y0 - 90}, ${x0 + 300} ${y0 - 90} C ${x0 + 400} ${y0 - 90}, ${x0 + 450} ${y0 - 4}, ${x0 + 640} ${y0 - 2}`;
  const aGain = eout(ilerle(t, tGain, 0.6));
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1800])}>
        <Etiket t={t} bas={tHealthy + 0.3} bitis={tS1} capa={[390, 700]} konum={[700, 560]} metin="VINEGAR" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tHealthy} satirlar={s.meta.baslik!.satirlar} x={1860} y={190} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {a1 > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a1 }}>
          <line x1={900} y1={720} x2={1700} y2={720} stroke={RENK.murekkep} strokeWidth={4} />
          <line x1={1300} y1={560} x2={1300} y2={740} stroke={RENK.mercan} strokeWidth={5} strokeDasharray="14 10" />
          <circle cx={px} cy={720} r={22} fill={RENK.yesil} stroke={RENK.kagitAcik} strokeWidth={5} />
          <text x={1700} y={780} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri }}>ILLUSTRATIVE</text>
        </svg>
      )}
      {al > 0 && a1 > 0 && (
        <div style={{ position: "absolute", left: 1300, top: 520, transform: `translate(-50%, -50%) scale(${sl})`, opacity: al * a1, whiteSpace: "nowrap",
          background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800,
          fontSize: 28, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>STATISTICAL SIGNIFICANCE</div>
      )}
      <Not t={t} bas={tSit + 0.2} bitis={tS1} metin="effect sits at the edge" x={1000} y={742} boyut={26} renk={RENK.gri} agirlik={700} />
      {t >= tIdea && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={x0 - 20} y1={y0 + 8} x2={x0 + 680} y2={y0 + 8} stroke={RENK.murekkep} strokeWidth={4} opacity={eout(ilerle(t, tIdea, 0.5))} />
          <path d={`${d} L ${x0 + 640} ${y0 + 8} L ${x0} ${y0 + 8} Z`} fill={RENK.altin} opacity={0.2 * aGain} />
          <path d={d} fill="none" stroke={RENK.yesil} strokeWidth={13} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p2} />
          <text x={x0 + 680} y={y0 + 56} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri, opacity: eout(ilerle(t, tIdea, 0.5)) }}>ILLUSTRATIVE</text>
        </svg>
      )}
      <Not t={t} bas={tSmall} metin="SMALLER SPIKES" x={x0 + 300} y={y0 - 150} hiza="orta" boyut={34} agirlik={800} renk={RENK.koyuYesil} />
      <Not t={t} bas={tGain} metin="LESS TO GAIN" x={x0 + 300} y={y0 + 24} hiza="orta" boyut={34} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S20;
