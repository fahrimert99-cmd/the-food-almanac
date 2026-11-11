// Sahne 9 — Health ABC sonucu: en yüksek ve en düşük beşte birlik dilimde 3 yılda kaybedilen yağsız kütle.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, CubukGrafik, Hap, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const [lo, hi] = [g.cubuklar[0], g.cubuklar[1]];
  // anlatım sırası: önce en yüksek, sonra en düşük dilim
  const cubuklar = [
    { ...hi, renk: RENK.yesil, bas: K(1, "half a kilogram") - 0.05 },
    { ...lo, renk: RENK.mercan, bas: K(2, "nine tenths") - 0.05 },
  ];
  const tAlt = K(0, "protein intake");
  const [sc, al] = pop(t, K(0, "body scans"), 0.55);
  const aBas = eout(ilerle(t, 0.15, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      {/* sol sütun: başlık, alt başlık, yöntem hapı */}
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <BaslikBlok t={t} bas={0.3} satirlar={["LEAN MASS LOST", "OVER 3 YEARS"]} x={156} y={235} boyut={84} />
      <Not t={t} bas={tAlt} metin={g.alt} x={160} y={430} genislik={620} boyut={32} agirlik={500} />
      <div style={{ position: "absolute", left: 160, top: 610, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="BODY SCANS · LEAN MASS" renk={RENK.altin} boyut={26} />
      </div>
      {/* sağda çubuklar */}
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={920} y={400} w={860} h={380} maks={1.0} birimEtiketi="kilograms" />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center", fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S09;
