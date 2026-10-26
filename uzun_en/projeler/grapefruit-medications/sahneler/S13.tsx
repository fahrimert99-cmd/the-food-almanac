// Sahne 13 — grafik: ilaç düzeyi, suya göre (su = %100).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const X = 300, Y = 400, W = 1320, H = 360, MAKS = 284 * 1.15;

const S13: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  const tFelo = K(0, "284"), tNife = K(1, "134");
  const bas = [0.9, tNife - 0.05, tFelo - 0.05];
  const renkler = [RENK.gri, RENK.altin, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: bas[i] }));
  const yRef = Y + H - (100 / MAKS) * H;
  const aRef = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={210} boyut={76} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 270, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34,
        color: RENK.lacivert }}>{g.alt}</div>
      {/* su = %100 başvuru çizgisi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aRef }}>
        <line x1={X} x2={X + W * aRef} y1={yRef} y2={yRef} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="14 10" />
      </svg>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={X} y={Y} w={W} h={H} maks={MAKS} />
      <Not t={t} bas={K(1, "separate")} metin="6 healthy men" x={X + 660} y={846} hiza="orta" boyut={26} genislik={380} />
      <Not t={t} bas={tFelo + 0.3} metin="6 men with borderline hypertension" x={X + 1100} y={846} hiza="orta" boyut={26} genislik={380} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 932, textAlign: "center", opacity: aK, fontFamily: INTER,
        fontWeight: 500, fontSize: 22, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S13;
