// Sahne 36 — yazarların sonucu (daha yüksek risk) ve mutlak fark: yüz kişide ≈1 ek vaka. Üstteki boş kâğıt yazılara ayrılır.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const cik = c[1].bas - 0.15;
  const tIdx = K(1, "hundred");
  const [sg, ag] = pop(t, tIdx, 0.5);
  const [sv, av] = pop(t, tIdx + 0.5, 0.5);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1740])}>
        <Etiket t={t} bas={K(0, "eggs")} bitis={cik} capa={[230, 700]} konum={[300, 930]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "cholesterol")} bitis={cik} capa={[1000, 700]} konum={[1250, 900]} metin="CHOLESTEROL" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle: sonuç */}
      <Baslik t={t} bas={K(0, "concluded")} bitis={cik} metin="THE AUTHORS' CONCLUSION" x={74} y={110} boyut={30} renk={RENK.altin} font="inter" agirlik={800} aralik={4} />
      <Baslik t={t} bas={K(0, "higher")} bitis={cik} metin="HIGHER RISK" x={70} y={230} boyut={130} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "linked")} bitis={cik} metin="LINKED, NOT PROVEN" x={74} y={330} boyut={44} renk={RENK.lacivert} font="inter" agirlik={800} />
      {/* 2. cümle: mutlak fark */}
      <BaslikBlok t={t} bas={K(1, "absolute")} satirlar={["IN ABSOLUTE", "TERMS: SMALL"]} x={70} y={150} boyut={100} />
      <VurguRozet t={t} bas={K(1, "one")} vurgu="≈ 1 IN 100" not="extra case, half an egg a day" x={1130} y={150} genislik={470} boyut={72} />
      {/* 100 kişilik ızgara: biri vurgulu */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: ag }}>
        <g transform={`translate(1590 260) scale(${sg}) translate(-1590 -260)`}>
          {Array.from({ length: 100 }, (_, i) => {
            const x = 1480 + (i % 10) * 26, y = 112 + Math.floor(i / 10) * 26, hi = i === 37;
            return <circle key={i} cx={x} cy={y} r={hi ? 10 : 7} fill={hi ? RENK.mercan : RENK.lacivert} opacity={hi ? 1 : 0.35}
              transform={hi ? `translate(${x} ${y}) scale(${1 + 0.3 * av * sv}) translate(${-x} ${-y})` : undefined} />;
          })}
        </g>
      </svg>
    </>
  );
};

export default S36;
