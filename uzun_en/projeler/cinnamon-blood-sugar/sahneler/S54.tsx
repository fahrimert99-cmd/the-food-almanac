// Sahne 54 — kahvede çeyrek çay kaşığı tarçın: ~0,6 g, ~1–2 mg kumarin, 6 mg sınırın çok altında.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCeyrek = K(1, "quarter"), tGram = K(1, "0.6");
  const tMath = K(2, "math"), tIki = K(2, "one to two"), tLimit = K(2, "6 milligram");
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760]);
  // ölçek çubuğu: 0–6 mg, sınır işareti
  const BX = 1280, BY = 760, BW = 500;
  const mg = (v: number) => BX + (v / 6) * BW;
  const aBar = eout(ilerle(t, tMath, 0.6));
  const pDolgu = eout(ilerle(t, tIki, 0.8));
  const [sL, aL] = pop(t, tLimit, 0.55);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={pen}>
        <Etiket t={t} bas={tCeyrek} capa={[680, 870]} konum={[1080, 905]} metin="QUARTER TSP" renk={RENK.altin} />
        <Etiket t={t} bas={tGram} capa={[820, 430]} konum={[1020, 300]} metin="≈ 0.6 G" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={0.9} metin="COFFEE" x={1280} y={190} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={1.1} metin="PINCH" x={1280} y={320} boyut={120} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tIki} vurgu="1–2 MG" not="coumarin in a quarter teaspoon of average cassia (our estimate)"
        x={1530} y={440} genislik={500} renk={RENK.yesil} />
      {aBar > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aBar }}>
          <rect x={BX} y={BY} width={BW} height={26} rx={13} fill={RENK.kagitAcik} stroke={RENK.lacivert} strokeWidth={3} />
          <rect x={mg(0) + 2} y={BY + 2} width={(mg(2) - mg(0)) * pDolgu} height={22} rx={11} fill={RENK.yesil} />
          <g transform={`translate(${mg(6)} ${BY + 13}) scale(${sL})`} opacity={aL}>
            <line x1={0} y1={-30} x2={0} y2={44} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
            <text x={0} y={84} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, fill: RENK.mercan }}>6 MG LIMIT</text>
          </g>
          <text x={mg(0)} y={BY - 16} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, fill: RENK.lacivert }}>0</text>
        </svg>
      )}
    </>
  );
};

export default S54;
