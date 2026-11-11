// Sahne 30 — MCT nedir: orta zincirli trigliseritler; kısa zincir şeması (temsili).
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Zincir: React.FC<{ t: number; bas: number; n: number; y: number; renk: string; ad: string; x?: number }> = ({ t, bas, n, y, renk, ad, x = 90 }) => (
  <>
    <div style={{ position: "absolute", left: x, top: y - 62, opacity: eout(ilerle(t, bas, 0.4)), fontFamily: INTER, fontWeight: 800,
      fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>{ad}</div>
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
      <line x1={x + 15} y1={y} x2={x + 15 + (n - 1) * 36 * eout(ilerle(t, bas, 0.3 + n * 0.06))} y2={y} stroke={RENK.lacivert} strokeWidth={5} />
      {Array.from({ length: n }, (_, i) => {
        const [sc, al] = pop(t, bas + 0.05 + i * 0.06, 0.35);
        return <circle key={i} cx={x + 15 + i * 36} cy={y} r={14 * sc} fill={renk} stroke={RENK.lacivert} strokeWidth={3} opacity={al} />;
      })}
    </svg>
  </>
);

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.1;
  const aT = eout(ilerle(t, K(1, "most"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1720])}>
        <Etiket t={t} bas={K(2, "MCT")} capa={[980, 760]} konum={[1020, 340]} metin="MCT OIL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "MCT")} satirlar={["WHAT IS", "MCT?"]} x={80} y={200} boyut={100} hiza="sol" />
      <Not t={t} bas={K(0, "medium-chain")} bitis={t1} metin="MEDIUM-CHAIN TRIGLYCERIDES" x={80} y={430} boyut={38} agirlik={800} genislik={470} />
      <Zincir t={t} bas={K(1, "shorter")} n={6} y={600} renk={RENK.altin} ad="MCT" />
      <Zincir t={t} bas={K(1, "most")} n={13} y={730} renk={RENK.mercan} ad="MOST FATS IN FOOD" />
      <div style={{ position: "absolute", left: 90, top: 790, opacity: aT, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 2,
        color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "4px 14px" }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S30;
