// Sahne 18 — cetvel: ağrı çizgisinde ~9 mm fark, geniş aralık, benzer yan etkiler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Çizimli geniş aralık (şematik, sayısız)
const Aralik: React.FC<{ t: number; bas: number; bitis: number }> = ({ t, bas, bitis }) => {
  const p = eout(ilerle(t, bas, 0.9));
  const a = sol(t, bitis, 0.4);
  if (a <= 0 || p <= 0) return null;
  const cx = 1400, y = 860, yar = 360 * p;
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
        <line x1={cx - yar} x2={cx + yar} y1={y} y2={y} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />
        <line x1={cx - yar} x2={cx - yar} y1={y - 26} y2={y + 26} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />
        <line x1={cx + yar} x2={cx + yar} y1={y - 26} y2={y + 26} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />
        <circle cx={cx} cy={y} r={16} fill={RENK.altin} stroke="#fff" strokeWidth={4} />
      </svg>
      <div style={{ position: "absolute", left: cx, top: y - 100, transform: "translateX(-50%)", opacity: a * p, fontFamily: INTER, fontWeight: 800,
        fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap" }}>WIDE RANGE OF POSSIBLE EFFECTS</div>
      <div style={{ position: "absolute", left: cx, top: y + 40, transform: "translateX(-50%)", opacity: a * p, fontFamily: INTER, fontWeight: 700,
        fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
    </>
  );
};

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(3, "similar"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <BaslikBlok t={t} bas={K(0, "Pain")} satirlar={["PAIN FELL MORE", "WITH TURMERIC"]} x={1860} y={200} boyut={84} hiza="sag" bitis={5.0} />
      <Etiket t={t} bas={K(1, "pain line")} bitis={5.4} capa={[640, 520]} konum={[1250, 560]} metin="PAIN LINE" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "9")} vurgu={s.meta.baslik!.vurgu!} not={s.meta.baslik!.not} x={1500} y={230} genislik={560} />
      <BaslikBlok t={t} bas={K(2, "modest")} satirlar={["A MODEST", "GAIN"]} x={1860} y={560} boyut={96} hiza="sag" bitis={10.8} />
      <Aralik t={t} bas={K(2, "wide") - 0.2} bitis={10.8} />
      <div style={{ position: "absolute", left: 1400, top: 800, transform: `translateX(-50%) scale(${sc})`, opacity: al, background: RENK.kagitAcik,
        border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "12px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1.5,
        color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>SIMILAR SIDE EFFECTS</div>
    </>
  );
};

export default S18;
