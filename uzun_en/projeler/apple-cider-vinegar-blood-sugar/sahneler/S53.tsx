// Sahne 53 — küçük denemeler: ~%31 daha küçük yükseliş, 12 genç yetişkin. Sağ panel glukometreyi örter.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kisi: React.FC<{ x: number; y: number; sc: number; al: number }> = ({ x, y, sc, al }) => (
  <g transform={`translate(${x} ${y}) scale(${sc})`} opacity={al}>
    <circle cx={0} cy={-14} r={11} fill={RENK.lacivert} />
    <path d="M -17 18 C -17 -2 17 -2 17 18 Z" fill={RENK.lacivert} />
  </g>
);

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aP = eout(ilerle(t, 0, 0.35));
  const tOn = K(0, "twelve");
  const aEt = pop(t, tOn - 0.1, 0.5)[1];
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 60, 1800])}>
        <Etiket t={t} bas={K(0, "vinegar")} capa={[440, 560]} konum={[440, 215]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "starchy")} capa={[960, 650]} konum={[960, 430]} metin="STARCHY MEAL" renk={RENK.mercan} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={680} opak={1} />
      <Baslik t={t} bas={K(0, "small")} metin="SMALL TRIALS" x={640} y={105} boyut={76} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "31")} vurgu="≈ 31%" not="LOWER RISE AFTER THE MEAL" x={1580} y={200} genislik={460} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 12 }, (_, i) => {
          const [sc, al] = pop(t, tOn + i * 0.07, 0.4);
          return <Kisi key={i} x={1370 + (i % 6) * 86} y={620 + Math.floor(i / 6) * 90} sc={sc} al={al} />;
        })}
      </svg>
      <div style={{ position: "absolute", left: 1580, top: 770, transform: "translateX(-50%)", opacity: aEt, fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>12 YOUNG ADULTS</div>
    </>
  );
};

export default S53;
