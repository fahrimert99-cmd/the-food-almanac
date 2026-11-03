// Sahne 25 — COSMOS birleşik analiz: önce üç çalışma, sonra çubuk grafik.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop, sol } from "../kutuphane";

const CALISMALAR = ["COSMOS-CLINIC", "COSMOS-MIND", "COSMOS-WEB"];

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const tGecis = s.cumleler[1].bas - 0.1;
  const tBir = K(1, "0.06");
  const tAralik = K(1, "0.03");
  const aA = sol(t, tGecis, 0.4);
  // çubuk konumları (CubukGrafik ile aynı hesap)
  const X = 360, Y = 440, W = 1200, H = 360, MAKS = 0.12;
  const yDeg = (v: number) => Y + H - (v / MAKS) * H;
  const xr = X + (W / 2) * 1.5 + 110 + 20;
  const pAr = eout(ilerle(t, tAralik, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* A: çalışmalar bir araya geliyor */}
      <div style={{ opacity: aA }}>
        <Baslik t={t} bas={K(0, "fluke")} bitis={tGecis} metin="A FLUKE?" x={960} y={250} boyut={120} renk={RENK.lacivert} hiza="orta" />
        <div style={{ position: "absolute", left: 0, right: 0, top: 400, display: "flex", justifyContent: "center", gap: 28 }}>
          {CALISMALAR.map((m, i) => {
            const [sc, al] = pop(t, K(0, "three") + i * 0.45, 0.5);
            return (
              <div key={m} style={{ transform: `scale(${sc})`, opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
                borderRadius: 999, padding: "14px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert,
                boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{m}</div>
            );
          })}
        </div>
        <VurguRozet t={t} bas={K(0, "5,203")} bitis={tGecis} vurgu="5,203" not="OLDER ADULTS" x={960} y={560} genislik={480} boyut={120} />
      </div>
      {/* B: çubuk grafik */}
      <Baslik t={t} bas={tGecis + 0.3} metin="MULTIVITAMIN VS PLACEBO" x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <Not t={t} bas={tGecis + 0.6} metin={`${g.baslik.split(", ")[1].toUpperCase()} · ${g.alt}`} x={160} y={290} boyut={28} />
      <CubukGrafik t={t} bas={tGecis + 1.0} x={X} y={Y} w={W} h={H} maks={MAKS}
        cubuklar={[
          { ...g.cubuklar[0], renk: RENK.altin, bas: K(1, "a little higher") },
          { ...g.cubuklar[1], renk: RENK.yesil, bas: tBir - 0.1 },
        ]} />
      {/* güven aralığı: 0.03–0.10 */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }} opacity={pAr}>
        <line x1={xr} x2={xr} y1={yDeg(0.03)} y2={yDeg(0.03) - (yDeg(0.03) - yDeg(0.10)) * pAr} stroke={RENK.lacivert} strokeWidth={5} />
        <line x1={xr - 18} x2={xr + 18} y1={yDeg(0.03)} y2={yDeg(0.03)} stroke={RENK.lacivert} strokeWidth={5} />
        {pAr > 0.95 && <line x1={xr - 18} x2={xr + 18} y1={yDeg(0.10)} y2={yDeg(0.10)} stroke={RENK.lacivert} strokeWidth={5} />}
      </svg>
      <Not t={t} bas={tAralik} metin="RANGE 0.03 TO 0.10" x={xr + 34} y={(yDeg(0.03) + yDeg(0.10)) / 2 - 20} boyut={30} agirlik={800} />
      <Not t={t} bas={tBir + 0.6} metin="Higher memory scores on the multivitamin" x={960} y={885} hiza="orta" boyut={30} renk={RENK.gri} />
    </AbsoluteFill>
  );
};

export default S25;
