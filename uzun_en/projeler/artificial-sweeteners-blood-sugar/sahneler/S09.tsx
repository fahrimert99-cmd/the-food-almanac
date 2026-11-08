// Sahne 9 — kan şekeri, yemek sonrası yükselip yatışma ve A1C.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, INTER, eout, einout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Temsili eğri: yükselir, yatışır (ILLUSTRATIVE, sayı yok)
const EGRI = "M 0 150 C 60 150, 90 20, 150 20 C 210 20, 240 130, 340 140";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGlu = K(0, "glucose"), tMeal = K(1, "meal"), tRises = K(1, "rises"), tA1c = K(2, "A1C");
  const tAvg = K(2, "average"), tMonths = K(2, "three months"), tDia = K(2, "diabetes");
  const pE = eout(ilerle(t, tMeal, 0.5)) * sol(t, tA1c - 0.2);
  const pc = einout(ilerle(t, tRises, 2.0));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])} />
      {/* kan örneği tüplerinde etiket */}
      <Etiket t={t} bas={tGlu} bitis={tMeal - 0.3} capa={[420, 640]} konum={[430, 300]} metin="BLOOD GLUCOSE" renk={RENK.mercan} />
      {/* yemek sonrası temsili eğri (sağ üst boşluk) */}
      {pE > 0 && (
        <div style={{ position: "absolute", left: 1370, top: 130, width: 480, opacity: pE }}>
          <svg width={480} height={300} viewBox="-70 -50 480 300" style={{ overflow: "visible" }}>
            <rect x={-70} y={-50} width={480} height={300} rx={22} fill="#FCF8EC" stroke={RENK.altin} strokeWidth={3} />
            <line x1={0} y1={200} x2={360} y2={200} stroke={RENK.lacivert} strokeWidth={3} />
            <line x1={0} y1={200} x2={0} y2={-10} stroke={RENK.lacivert} strokeWidth={3} />
            <path d={EGRI} transform="translate(0 20)" fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round"
              pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pc} />
            <text x={10} y={-22} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, fill: RENK.lacivert }}>AFTER A MEAL</text>
            <text x={400 - 70 - 20} y={236} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 18, fill: RENK.gri }}>ILLUSTRATIVE</text>
          </svg>
        </div>
      )}
      {/* A1C */}
      <Baslik t={t} bas={tA1c} metin="A1C" x={150} y={150} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAvg} metin="YOUR AVERAGE" x={160} y={235} boyut={36} agirlik={800} />
      <Not t={t} bas={tMonths} metin="OVER ABOUT 3 MONTHS" x={160} y={283} boyut={36} agirlik={800} renk={RENK.altin} />
      <Etiket t={t} bas={tDia} capa={[1560, 560]} konum={[1500, 330]} metin="WATCHED IN DIABETES" renk={RENK.yesil} />
    </>
  );
};

export default S09;
