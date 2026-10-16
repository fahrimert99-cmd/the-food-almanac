// Sahne 38 — küçük gruplar: altı kişilik grup, farklı ürünler, aynı araştırmacı.
import React from "react";
import { Baslik, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSmall = K(0, "small"), tSix = K(0, "six"), tDiff = K(0, "different products"), tFour = K(1, "four");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [400, 110, 1300], [440, 130, 1220])} />
      <Panel a={1} taraf="sag" genislik={820} opak={0.97} />
      <Baslik t={t} bas={tSmall} metin="SMALL TRIALS" x={1860} y={200} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      {/* altı kişi simgesi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 6 }, (_, i) => {
          const [sc, al] = pop(t, tSix + i * 0.12, 0.4);
          const cx = 1200 + i * 110, cy = 340;
          return (
            <g key={i} opacity={al} transform={`translate(${cx} ${cy}) scale(${sc})`}>
              <circle cx={0} cy={-26} r={20} fill={RENK.lacivert} />
              <path d="M-34 36 Q-34 -6 0 -6 Q34 -6 34 36 Z" fill={RENK.lacivert} />
            </g>
          );
        })}
      </svg>
      <Not t={t} bas={tSix + 0.8} metin="AS FEW AS 6 PEOPLE IN A GROUP" x={1860} y={410} boyut={32} hiza="sag" agirlik={800} />
      <Liste t={t} isaret="nokta" x={1090} y={540} aralik={100} boyut={34} genislik={780}
        ogeler={[{ bas: tDiff, metin: "DIFFERENT PRODUCTS", renk: RENK.altin }, { bas: K(0, "doses"), metin: "DIFFERENT DOSES", renk: RENK.altin }]} />
      <VurguRozet t={t} bas={tFour} vurgu="4 TRIALS" not="run by the reviewer herself" x={1480} y={740} genislik={560} boyut={84} />
    </>
  );
};

export default S38;
