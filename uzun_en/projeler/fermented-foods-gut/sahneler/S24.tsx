// Sahne 24 — küçük deneme: 18 + 18 kişi; laboratuvar işaretleri, hastalık değil.
import React from "react";
import { ANTON, Baslik, Etiket, Ikon, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// küçük insan simgesi (baş + gövde)
const Kisi: React.FC<{ x: number; y: number; renk: string; sc: number }> = ({ x, y, renk, sc }) => (
  <g transform={`translate(${x} ${y}) scale(${sc})`}>
    <circle cx={0} cy={-13} r={8} fill={renk} />
    <path d="M -12 14 C -12 -2 12 -2 12 14 Z" fill={renk} />
  </g>
);

const GRUP: { x0: number; renk: string; gecik: number }[] = [
  { x0: 120, renk: RENK.koyuYesil, gecik: 0 },
  { x0: 440, renk: RENK.altin, gecik: 0.25 },
];

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKucuk = K(0, "small"), tPoc = K(0, "proof-of-concept"), t18 = K(0, "18");
  const tMark = K(1, "markers"), tNot = K(1, "not whether");
  const cik1 = tMark - 0.15;
  const a1 = sol(t, cik1);
  const pPan = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [250, 60, 1290], [310, 80, 1180])}>
        <Etiket t={t} bas={tMark + 0.1} bitis={tNot - 0.2} capa={[1290, 505]} konum={[1330, 330]} metin="LAB MARKERS" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sol" genislik={820} />
      {/* 1. cümle: küçük deneme, 18 kişilik iki grup */}
      <div style={{ opacity: a1 }}>
        <Baslik t={t} bas={tKucuk} bitis={cik1} metin="SMALL TRIAL" x={60} y={190} boyut={120} renk={RENK.koyuYesil} />
        <Not t={t} bas={tPoc} bitis={cik1} metin="PROOF-OF-CONCEPT · HEALTHY ADULTS" x={64} y={290} boyut={28} agirlik={800} renk={RENK.lacivert} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {GRUP.map((g) =>
            Array.from({ length: 18 }, (_, k) => {
              const [sc, al] = pop(t, t18 + g.gecik + k * 0.035, 0.35);
              return <g key={`${g.x0}${k}`} opacity={al}><Kisi x={g.x0 + (k % 6) * 46} y={470 + Math.floor(k / 6) * 62} renk={g.renk} sc={sc * 1.15} /></g>;
            }),
          )}
        </svg>
        {GRUP.map((g) => {
          const [sc, al] = pop(t, t18 + g.gecik + 0.3, 0.5);
          return (
            <div key={g.x0} style={{ position: "absolute", left: g.x0 - 20, top: 640, width: 280, textAlign: "center", transform: `scale(${sc})`, opacity: al,
              fontFamily: ANTON, fontSize: 96, lineHeight: 1.1, color: g.renk }}>18</div>
          );
        })}
        <Not t={t} bas={K(0, "each group")} bitis={cik1} metin="PEOPLE IN EACH GROUP" x={64} y={790} boyut={30} agirlik={800} renk={RENK.lacivert} />
      </div>
      {/* 2. cümle: işaretler var, hastalık sonucu yok */}
      <Baslik t={t} bas={tMark - 0.05} bitis={tNot - 0.2} metin="LAB MARKERS" x={60} y={330} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNot} metin="SICK LESS" x={60} y={330} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot + 0.15} metin="OFTEN?" x={60} y={470} boyut={120} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(1, "less often")} ad="carpi" x={330} y={700} boyut={110} zemin={RENK.mercan} />
      <Not t={t} bas={K(1, "less often") + 0.2} metin="NOT MEASURED" x={410} y={672} boyut={34} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S24;
