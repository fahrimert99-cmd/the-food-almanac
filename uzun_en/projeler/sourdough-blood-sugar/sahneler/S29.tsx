// Sahne 29 — meta-analiz: 18 çalışma birleştirildi; temsili (ILLUSTRATIVE) çubuk karşılaştırması.
import React from "react";
import { BaslikBlok, Etiket, Hap, INTER, ANTON, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const tk = K(1, "glucose rose less");
  const kart = eout(ilerle(t, tk - 0.2, 0.6));
  // Temsili çubuklar: yalnızca sıralama, sayı yok
  const cub = [
    { ad: "SOURDOUGH", h: 0.55, renk: RENK.yesil, bas: K(1, "after sourdough") },
    { ad: "INDUSTRIAL BREAD", h: 0.85, renk: RENK.altin, bas: K(1, "industrial bread") },
    { ad: "GLUCOSE", h: 1.0, renk: RENK.mercan, bas: K(1, "or glucose") },
  ];
  const [s6, a6] = pop(t, K(1, "sixty"), 0.5);
  const [s12, a12] = pop(t, K(1, "one hundred twenty"), 0.5);
  const x0 = 960, yb = 560, hm = 150;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={pen}>
        {/* ölçerin üstündeki anlamsız yazıyı kapat */}
        <div style={{ position: "absolute", left: 1484, top: 809, width: 136, height: 20, background: "#F1EFD9", borderRadius: 6 }} />
        <Etiket t={t} bas={K(0, "pooled")} capa={[400, 330]} konum={[440, 190]} metin="POOLED TRIALS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "sourdough")} capa={[880, 800]} konum={[1020, 765]} metin="SOURDOUGH" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2024")} />
      <BaslikBlok t={t} bas={K(1, "eighteen")} satirlar={["18 STUDIES", "POOLED"]} x={1840} y={170} boyut={80} hiza="sag" />
      <div style={{ position: "absolute", left: 900, top: 330, width: 940, height: 380, opacity: kart, background: "#FCF8EC",
        border: `3px solid ${RENK.lacivert}`, borderRadius: 24, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }} />
      {kart > 0 && (
        <>
          <div style={{ position: "absolute", left: 930, top: 346, opacity: kart, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.lacivert }}>
            GLUCOSE AFTER EATING
          </div>
          <div style={{ position: "absolute", left: 1500, top: 346, opacity: kart, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.altin,
            border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "4px 16px", background: "#FCF6E6" }}>ILLUSTRATIVE</div>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={x0 - 20} x2={1810} y1={yb} y2={yb} stroke={RENK.lacivert} strokeWidth={4} opacity={kart} />
            {cub.map((c, i) => {
              const p = eout(ilerle(t, c.bas, 0.6));
              const cx = x0 + 160 + i * 290, h = c.h * hm * p;
              return (
                <g key={c.ad}>
                  <rect x={cx - 70} y={yb - h} width={140} height={h} rx={8} fill={c.renk} />
                  <text x={cx} y={yb + 30} textAnchor="middle" opacity={p} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, fill: RENK.lacivert }}>{c.ad}</text>
                </g>
              );
            })}
          </svg>
          <div style={{ position: "absolute", left: 930, top: 628, display: "flex", gap: 14 }}>
            <div style={{ transform: `scale(${s6})`, opacity: a6, transformOrigin: "0 50%" }}><Hap metin="AT 60 MIN" renk={RENK.lacivert} boyut={24} /></div>
            <div style={{ transform: `scale(${s12})`, opacity: a12, transformOrigin: "0 50%" }}><Hap metin="AND 120 MIN" renk={RENK.lacivert} boyut={24} /></div>
          </div>
        </>
      )}
    </>
  );
};

export default S29;
