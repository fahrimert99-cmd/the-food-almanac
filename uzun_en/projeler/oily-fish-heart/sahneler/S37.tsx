// Sahne 37 — her +20 g balık için ~%4 düşük risk: terazi solda, sağda rozet + başlık + temsili basamaklar.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik;
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tBas = K(1, "build");
  const [st, at] = pop(t, tBas - 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={pencere}>
        <Etiket t={t} bas={K(0, "fish a day") - 0.1} capa={[470, 262]} konum={[880, 140]} metin="EXTRA FISH" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "4 percent") - 0.1} vurgu="–4%" not={m?.not ?? ""} x={1400} y={110} boyut={100} genislik={540} renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(0, "20 grams") - 0.05} satirlar={m?.satirlar ?? []} x={960} y={540} boyut={96} />
      <Not t={t} bas={K(1, "a little under")} metin="a little under an ounce" x={964} y={690} boyut={36} />
      {at > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: at }}>
          {[40, 75, 110, 145].map((h, i) => {
            const p = eout(ilerle(t, tBas + 0.1 + i * 0.3, 0.5));
            return <rect key={i} x={1000 + i * 120} y={930 - h * p} width={96} height={h * p} rx={6} fill={RENK.yesil} opacity={0.55 + i * 0.15} />;
          })}
          <line x1={990} y1={932} x2={1500} y2={932} stroke={RENK.lacivert} strokeWidth={3} opacity={0.6} />
          <g transform={`translate(1540 840) scale(${st})`}>
            <rect x={0} y={0} width={230} height={46} rx={23} fill={RENK.kagitAcik} stroke={RENK.altin} strokeWidth={3} />
            <text x={115} y={31} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, fill: RENK.altin }}>ILLUSTRATIVE</text>
          </g>
        </svg>
      )}
    </>
  );
};

export default S37;
