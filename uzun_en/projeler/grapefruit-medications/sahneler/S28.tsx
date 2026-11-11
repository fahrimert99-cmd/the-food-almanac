import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

// kâğıt rengi yama (kusur örtüsü)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSer = K(0, "potentially serious"), tGf = K(0, "grapefruit"), t17 = K(0, "17"), t43 = K(0, "43");
  const t08 = K(0, "2008"), t12 = K(0, "2012,"), tNew = K(0, "newer medicines");
  const b = s.meta.baslik!;
  const pOk = eout(ilerle(t, K(0, "to"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])}>
        <Yama x={960} y={1030} w={760} h={130} />
      </Kamera>
      <AltSis a={0.4} yukseklik={120} />
      <Not t={t} bas={tSer} metin={b.not!.toUpperCase()} x={960} y={100} hiza="orta" boyut={30} genislik={1500} />
      <Etiket t={t} bas={tGf} bitis={t17 - 0.2} capa={[470, 640]} konum={[560, 430]} metin="GRAPEFRUIT" renk={RENK.mercan} boyut={26} />
      <Baslik t={t} bas={t17} metin="17" x={600} y={290} boyut={210} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={t43} metin="43" x={1320} y={290} boyut={210} renk={RENK.mercan} hiza="orta" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pOk > 0 && (
          <g>
            <line x1={830} y1={290} x2={830 + 130 * pOk} y2={290} stroke={RENK.altin} strokeWidth={10} strokeLinecap="round" />
            <polygon points={`${830 + 130 * pOk + 26},290 ${830 + 130 * pOk},274 ${830 + 130 * pOk},306`} fill={RENK.altin} />
          </g>
        )}
      </svg>
      <Baslik t={t} bas={t08} metin="2008" x={600} y={440} boyut={44} renk={RENK.gri} hiza="orta" font="inter" agirlik={800} aralik={4} />
      <Baslik t={t} bas={t12} metin="2012" x={1320} y={440} boyut={44} renk={RENK.gri} hiza="orta" font="inter" agirlik={800} aralik={4} />
      <Etiket t={t} bas={tNew} capa={[1400, 880]} konum={[1560, 700]} metin="NEWER MEDICINES" renk={RENK.altin} boyut={26} />
    </>
  );
};
export default S28;
