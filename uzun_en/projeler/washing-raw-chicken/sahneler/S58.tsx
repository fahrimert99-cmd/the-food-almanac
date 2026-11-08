// Sahne 58 — pişmeyecek yiyecekleri çiğ tavuktan ayır
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cizgi = eout(ilerle(t, K(0, "away"), 0.7));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "salad,")} capa={[1000, 530]} konum={[1000, 330]} metin="SALAD" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "fruit,")} capa={[260, 440]} konum={[260, 280]} metin="FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "bread,")} capa={[620, 190]} konum={[800, 90]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "chicken")} capa={[1540, 590]} konum={[1560, 380]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={1222} x2={1222} y1={300} y2={300 + 560 * cizgi} stroke={RENK.mercan} strokeWidth={6} strokeDasharray="16 12" strokeLinecap="round" />
        </svg>
      </Kamera>
      <Baslik t={t} bas={K(0, "away")} metin="KEEP APART" x={1560} y={190} boyut={84} hiza="orta" renk={RENK.mercan} />
    </>
  );
};
export default S58;
