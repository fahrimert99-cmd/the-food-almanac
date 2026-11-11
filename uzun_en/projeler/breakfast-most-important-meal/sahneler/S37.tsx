// Sahne 37 — üç tabak: ABD anketi, ≥30 g proteinli öğün → daha çok bacak kası ve güç (ilişki).
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const t1081 = K(0, "1,081"), tAged = K(0, "aged"), tMeals = K(0, "meals"), t30 = K(0, "30"), tLeg = K(0, "leg"), tStr = K(0, "strength"), tAgain = K(1, "again");
  const bit = tAgain - 0.15;
  const tabaklar = [[305, 705], [940, 705], [1600, 705]];
  const aOk = eout(ilerle(t, tLeg - 0.2, 0.5));
  const a = sol(t, bit);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={p} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {tabaklar.map(([x, y], i) => {
          const q = eout(ilerle(t, tMeals + i * 0.18, 0.6));
          return q > 0 ? <ellipse key={i} cx={x} cy={y} rx={300 * q} ry={165 * q} fill="none" stroke={RENK.altin} strokeWidth={5}
            strokeDasharray="16 12" opacity={0.9} /> : null;
        })}
        {aOk > 0 && (
          <g opacity={aOk * a}>
            <line x1={1180} y1={190} x2={1180 + 110 * aOk} y2={190} stroke={RENK.altin} strokeWidth={8} strokeLinecap="round" />
            <polygon points={`${1180 + 110 * aOk + 22},190 ${1180 + 110 * aOk},176 ${1180 + 110 * aOk},204`} fill={RENK.altin} />
          </g>
        )}
      </svg>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={t1081 - 0.1} bitis={bit} metin="1,081 ADULTS" x={100} y={190} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAged - 0.1} bitis={bit} metin="US health survey · aged 50 to 85" x={100} y={262} boyut={32} />
      <VurguRozet t={t} bas={t30 - 0.1} bitis={bit} vurgu="≥ 30 G" not="protein in a meal" x={960} y={110} genislik={380} renk={RENK.altin} />
      <Baslik t={t} bas={tLeg - 0.1} bitis={bit} metin="MORE LEG MUSCLE" x={1330} y={160} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tStr - 0.1} bitis={bit} metin="MORE STRENGTH" x={1330} y={245} boyut={72} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tAgain - 0.1} metin="AGAIN: AN ASSOCIATION" x={960} y={230} boyut={100} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S37;
