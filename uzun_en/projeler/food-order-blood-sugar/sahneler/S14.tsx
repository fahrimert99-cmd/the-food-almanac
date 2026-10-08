// Sahne 14 — test öğünü: iki ayrı gün aynı öğün; karbonhidrat / protein / sebze grupları sırayla aydınlanır.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

type Elips = [number, number, number, number]; // cx, cy, rx, ry (görsel koordinatı)
// Spot delikleri: her grup kendi yiyeceklerini örtüden çıkarır
const DELIKLER: Elips[][] = [
  [[345, 610, 175, 300], [625, 548, 248, 235]],                                   // ekmek + meyve suyu
  [[1090, 765, 390, 155]],                                                         // tavuk
  [[1085, 605, 205, 125], [1470, 650, 295, 235], [670, 780, 205, 125]],           // domates, yeşillik+brokoli, brokoli+tereyağı
];

// Grup başlığı hapı (dolgulu). x,y = merkez.
const GrupHapi: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; x: number; y: number }> = ({
  t, bas, bitis, metin, renk, x, y,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, background: renk,
      color: "#fff", borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 4,
      whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.22)" }}>{metin}</div>
  );
};

const GunHapi: React.FC<{ t: number; bas: number; bitis: number; metin: string; x: number; y: number }> = ({ t, bas, bitis, metin, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, background: RENK.lacivert,
      color: "#fff", borderRadius: 14, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 6,
      whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>{metin}</div>
  );
};

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  // grup geçişleri: cümle başlarında
  const g1 = c[1].bas - 0.15, g2 = c[2].bas - 0.15, g3 = c[3].bas - 0.15;
  const guc = [
    eout(ilerle(t, g1, 0.45)) * sol(t, g2, 0.45),
    eout(ilerle(t, g2, 0.45)) * sol(t, g3, 0.45),
    eout(ilerle(t, g3, 0.45)),
  ];
  const ortu = 0.6 * eout(ilerle(t, g1 - 0.1, 0.5));
  // 1. cümle: iki gün, bir hafta arayla
  const gBitis = c[1].bas - 0.35;
  const tGun1 = K(0, "two separate days"), tGun2 = K(0, "days"), tHafta = K(0, "a week apart");
  const pCizgi = eout(ilerle(t, tHafta - 0.1, 0.6)) * sol(t, gBitis);
  const yazi: React.CSSProperties = { fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, fill: RENK.altin };
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])}>
        {/* spot örtüsü: anılan grup dışındaki yiyecekler kâğıt rengiyle soluklaşır */}
        {ortu > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <defs>
              <radialGradient id="s14-delik">
                <stop offset="0.62" stopColor="#000" />
                <stop offset="1" stopColor="#000" stopOpacity={0} />
              </radialGradient>
              <mask id="s14-maske">
                <rect width={1920} height={1080} fill="#fff" />
                {DELIKLER.map((grup, k) => guc[k] > 0 && grup.map(([cx, cy, rx, ry], j) => (
                  <ellipse key={`${k}-${j}`} cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#s14-delik)" opacity={guc[k]} />
                )))}
              </mask>
            </defs>
            <rect width={1920} height={1080} fill={RENK.kagit} opacity={ortu} mask="url(#s14-maske)" />
          </svg>
        )}
        {/* karbonhidratlar */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {(() => {
            const a = eout(ilerle(t, K(1, "carbohydrates") - 0.1, 0.5)) * sol(t, g2);
            return a > 0 ? (
              <polyline points={`182,236 182,215 888,215 888,236`} fill="none" stroke={RENK.mercan} strokeWidth={4}
                strokeLinejoin="round" opacity={a} />
            ) : null;
          })()}
        </svg>
        <Etiket t={t} bas={K(1, "orange juice")} bitis={g2} capa={[345, 610]} konum={[330, 287]} metin="ORANGE JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "Ciabatta")} bitis={g2} capa={[650, 525]} konum={[722, 287]} metin="CIABATTA BREAD" renk={RENK.mercan} />
        <GrupHapi t={t} bas={K(1, "carbohydrates")} bitis={g2} metin="CARBS" renk={RENK.mercan} x={535} y={215} />
        {/* protein */}
        <Etiket t={t} bas={K(2, "grilled chicken")} bitis={g3} capa={[880, 722]} konum={[880, 432]} metin="GRILLED CHICKEN" renk={RENK.altin} />
        <GrupHapi t={t} bas={K(2, "protein")} bitis={g3} metin="PROTEIN" renk={RENK.altin} x={880} y={352} />
        {/* sebzeler (grup hapı: CARBS / PROTEIN ile aynı dil) */}
        <GrupHapi t={t} bas={K(3, "salad")} bitis={1e9} metin="VEGETABLES" renk={RENK.yesil} x={1290} y={300} />
        <Etiket t={t} bas={K(3, "lettuce")} capa={[1655, 650]} konum={[1690, 448]} metin="LETTUCE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "tomato")} capa={[1165, 615]} konum={[1140, 448]} metin="TOMATO" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "steamed broccoli")} capa={[1470, 700]} konum={[1420, 392]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "butter")} capa={[672, 728]} konum={[640, 300]} metin="BUTTER" renk={RENK.altin} />
      </Kamera>
      {/* başlık: sağ üst boşluk */}
      <BaslikBlok t={t} bas={K(0, "exact same meal")} satirlar={["THE TEST", "MEAL"]} x={1840} y={170} boyut={88} hiza="sag" />
      {/* iki gün, bir hafta arayla */}
      <GunHapi t={t} bas={tGun1} bitis={gBitis} metin="DAY 1" x={200} y={205} />
      <GunHapi t={t} bas={tGun2} bitis={gBitis} metin="DAY 2" x={700} y={205} />
      {pCizgi > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={300} y1={205} x2={300 + 300 * pCizgi} y2={205} stroke={RENK.altin} strokeWidth={5} strokeDasharray="14 10" strokeLinecap="round" />
          <text x={450} y={172} textAnchor="middle" opacity={pCizgi} style={yazi}>A WEEK APART</text>
        </svg>
      )}
    </>
  );
};

export default S14;
