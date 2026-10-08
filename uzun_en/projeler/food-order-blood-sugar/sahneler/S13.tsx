// Sahne 13 — katılımcılar: 11 yetişkin, tip 2 diyabet, fazla kilo/obezite, metformin.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Basit insan simgesi (baş + omuzlar). x,y = gövde ortası.
const Kisi: React.FC<{ x: number; y: number; sc: number; a: number; renk: string }> = ({ x, y, sc, a, renk }) => (
  <g transform={`translate(${x} ${y}) scale(${sc})`} opacity={a}>
    <circle cx={0} cy={-30} r={13} fill={renk} />
    <path d="M -21 24 L -21 2 Q -21 -13 -6 -13 L 6 -13 Q 21 -13 21 2 L 21 24 Z" fill={renk} />
  </g>
);

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOn = K(0, "eleven adults"), tYet = K(0, "adults"), tTip = K(0, "type 2 diabetes");
  const tHep = K(1, "All of them"), tKilo = K(1, "overweight"), tMet = K(1, "metformin"), tIlac = K(1, "common diabetes medicine");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 20, 1880], [60, 70, 1760])}>
        {/* glukometre ekranındaki sahte rakam/yazılar: gövde rengi yama + boş ekran */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <rect x={789} y={652} width={55} height={31} rx={3} fill="#BCD7D2" />
          <rect x={798} y={657} width={37} height={11} rx={2} fill="#2C3833" />
          <rect x={779} y={668} width={8} height={11} rx={2} fill="#7E9693" />
        </svg>
      </Kamera>
      {/* 11 yetişkin */}
      <Baslik t={t} bas={tOn - 0.1} metin="11" x={1080} y={292} boyut={230} renk={RENK.altin} />
      <Baslik t={t} bas={tYet} metin="ADULTS" x={1268} y={252} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tTip} metin="WITH TYPE 2 DIABETES" x={1272} y={344} boyut={40} renk={RENK.koyuYesil} font="inter" aralik={1} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 11 }, (_, i) => {
          const [sc, al] = pop(t, tOn + 0.05 + i * 0.06, 0.45);
          return al > 0 ? <Kisi key={i} x={1112 + i * 64} y={482} sc={sc} a={al} renk={i % 2 ? RENK.lacivert : "#2E4462"} /> : null;
        })}
        <line x1={1084} x2={1084 + 690 * eout(ilerle(t, tHep - 0.15, 0.6))} y1={556} y2={556} stroke={RENK.altin} strokeWidth={4}
          strokeLinecap="round" opacity={eout(ilerle(t, tHep - 0.15, 0.3))} />
      </svg>
      {/* hepsi: fazla kilo/obezite + metformin */}
      <Baslik t={t} bas={tHep} metin="ALL OF THEM" x={1086} y={604} boyut={28} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={1084} y={650} aralik={96} boyut={40} isaret="onay" ogeler={[
        { bas: tKilo, metin: "OVERWEIGHT OR OBESITY", renk: RENK.koyuYesil },
        { bas: tMet, metin: "TAKING METFORMIN", renk: RENK.koyuYesil },
      ]} />
      <Not t={t} bas={tIlac} metin="a common diabetes medicine" x={1162} y={806} boyut={30} renk={RENK.gri} agirlik={600} />
    </>
  );
};

export default S13;
