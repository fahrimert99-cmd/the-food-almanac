// Sahne 14 — Maioli 2008: 16 yetişkin, bozulmuş glikoz toleransı, yaş 52–75.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const son0 = c[1].bas - 0.1;
  const tYas = K(1, "fifty-two");
  const p = eout(ilerle(t, tYas, 0.9));
  const [s52, a52] = pop(t, tYas, 0.5);
  const [s75, a75] = pop(t, K(1, "seventy-five."), 0.5);
  return (
    <>
      {/* pencere sağdaki cihazı (bozuk tuş yazıları) dışarıda bırakır */}
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [40, 350, 1280], [70, 320, 1230])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2008,")} bitis={K(0, "sixteen") - 0.1} metin="2008" x={470} y={230} boyut={130} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "sixteen")} metin="16 ADULTS" x={470} y={215} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "impaired")} bitis={son0} x={474} y={300} metin="IMPAIRED GLUCOSE TOLERANCE" boyut={40} agirlik={800} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "stage")} bitis={son0} x={474} y={362} metin="a stage before diabetes" boyut={34} renk={RENK.gri} />
      <Baslik t={t} bas={K(1, "ages")} metin="AGES 52 TO 75" x={470} y={345} boyut={84} renk={RENK.altin} />
      {/* yaş aralığı çizgisi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {p > 0 && <line x1={490} y1={470} x2={490 + 640 * p} y2={470} stroke={RENK.altin} strokeWidth={8} strokeLinecap="round" />}
        <circle cx={490} cy={470} r={14 * s52} fill={RENK.lacivert} opacity={a52} />
        <circle cx={1130} cy={470} r={14 * s75} fill={RENK.lacivert} opacity={a75} />
      </svg>
    </>
  );
};

export default S14;
