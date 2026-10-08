// Sahne 53 — Glukoz ölçer takıyorsanız kendinizde deneyin: aynı öğün, iki farklı sıra, eğrileri karşılaştırın.
// Temsili iki eğri telefon ekranına (perspektifle) çizilir; sensör ve tabak gerçek nesneler üzerinde etiketlenir.
import React from "react";
import { Baslik, EGRILER, Etiket, INTER, Kamera, Parcaciklar, RENK, SP, egriDeger, eout, ilerle, kameraYolu, kelimeZamani,
  kis, pop, sol } from "../kutuphane";

// Telefon ekranının köşeleri (görsel koordinatı, ızgaradan): sol, üst, sağ, alt
const EKRAN: [number, number][] = [[407, 608], [945, 434], [1155, 525], [611, 726]];
const W = 1000, H = 400; // ekran içi çizim alanı

// W×H dikdörtgenini dörtgene eşleyen CSS matrix3d (kare -> dörtgen homografisi)
const homografi = (q: [number, number][]) => {
  const [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = q;
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / den, h = (dx1 * dy3 - dx3 * dy1) / den;
  const a = x1 - x0 + g * x1, b = x3 - x0 + h * x3, d = y1 - y0 + g * y1, e = y3 - y0 + h * y3;
  return `matrix3d(${a / W},${d / W},0,${g / W},${b / H},${e / H},0,${h / H},0,0,1,0,${x0},${y0},0,1)`;
};
const MATRIS = homografi(EKRAN);

// ekran içi grafik ölçeği (eksen sayısı yok; temsili)
const X0 = 95, X1 = 925, YB = 338, YT = 40;
const gx = (m: number) => X0 + (m / 120) * (X1 - X0);
const gy = (v: number) => YB - ((v - 100) / 140) * (YB - YT);
const yol = (pts: [number, number][], son: number) => {
  const out: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const m = Math.min(son, 2 * i);
    out.push(`${gx(m).toFixed(1)},${gy(egriDeger(pts, m)).toFixed(1)}`);
    if (m >= son) break;
  }
  return out.join(" ");
};
const EGRI = [
  { pts: EGRILER.karbOnce, renk: RENK.mercan, gecik: 0 },
  { pts: EGRILER.sebzeOnce, renk: RENK.yesil, gecik: 0.18 },
];
const ALAN = [
  ...Array.from({ length: 61 }, (_, k) => `${gx(2 * k)},${gy(egriDeger(EGRILER.karbOnce, 2 * k))}`),
  ...Array.from({ length: 61 }, (_, k) => `${gx(120 - 2 * k)},${gy(egriDeger(EGRILER.sebzeOnce, 120 - 2 * k))}`),
].join(" ");

// Telefon ekranı: uyanır, ızgara + taban, sonra iki eğri kalemle çizilir
const Ekran: React.FC<{ t: number; tUyan: number; tCiz: number; tAlan: number }> = ({ t, tUyan, tCiz, tAlan }) => {
  const pE = eout(ilerle(t, tUyan, 0.6));
  if (pE <= 0) return null;
  const pc = ilerle(t, tCiz, 1.35);
  const pA = eout(ilerle(t, tAlan, 0.6));
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: W, height: H, transformOrigin: "0 0", transform: MATRIS }}>
      <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0 }}>
        <rect x={10} y={10} width={W - 20} height={H - 20} rx={6} fill="#1E2E47" opacity={0.94 * pE} />
        <g opacity={pE}>
          {[0, 30, 60, 90, 120].map((m) => (
            <line key={m} x1={gx(m)} x2={gx(m)} y1={YB} y2={YT - 20} stroke="#fff" strokeOpacity={0.1} strokeWidth={3} />
          ))}
          <line x1={X0 - 20} x2={X1 + 20} y1={YB} y2={YB} stroke="#fff" strokeOpacity={0.4} strokeWidth={4} strokeDasharray="14 12" />
        </g>
        <polygon points={ALAN} fill={RENK.altinAcik} opacity={0.4 * pA} />
        {EGRI.map((e, i) => {
          const p = kis(eout(pc) * 1.18 - e.gecik);
          if (p <= 0) return null;
          const son = 120 * p;
          const ux = gx(son), uy = gy(egriDeger(e.pts, son));
          const n = yol(e.pts, son);
          return (
            <g key={i}>
              <polyline points={n} fill="none" stroke={e.renk} strokeOpacity={0.35} strokeWidth={32} strokeLinecap="round" strokeLinejoin="round" />
              <polyline points={n} fill="none" stroke={e.renk} strokeWidth={16} strokeLinecap="round" strokeLinejoin="round" />
              {p < 1 && <circle cx={ux} cy={uy} r={15} fill={e.renk} stroke="#fff" strokeWidth={5} />}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

// Lejant hapı: eğri renginde kısa çizgi + yazı
const Lejant: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 999, padding: "9px 24px 9px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 27, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 40, height: 9, borderRadius: 5, background: renk }} />
      {metin}
    </div>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMonitor = K(0, "glucose monitor"), tDeney = K(0, "easy experiment"), tDene = K(0, "try on yourself");
  const tFaz2 = c[1].bas - 0.1;
  const tAyni = K(1, "same meal"), tIki = K(1, "two different"), tSira = K(1, "orders");
  const tKarsi = K(1, "compare"), tEgri = K(1, "curves");
  const [sI, aI] = pop(t, tKarsi + 0.35, 0.5);
  const aKicker = eout(ilerle(t, tIki, 0.5));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [40, 50, 1840], [190, 130, 1660])}>
        <Ekran t={t} tUyan={tIki} tCiz={tKarsi} tAlan={Math.max(tEgri, tKarsi + 1.2)} />
        {/* sensörden telefona veri akışı */}
        <Parcaciklar t={t} bas={tKarsi - 0.2} kaynak={[1107, 772]} hedef={[700, 650]} adet={10} aralik={0.05} omur={0.75}
          yayilma={50} hedefYayilma={60} kavis={-40} boyut={5} tohum="s53" />
        <Etiket t={t} bas={tMonitor} bitis={tKarsi - 0.3} capa={[1107, 787]} konum={[1440, 838]} metin="GLUCOSE MONITOR" renk={RENK.altin} />
        <Etiket t={t} bas={tAyni} capa={[1290, 478]} konum={[1560, 272]} metin="SAME MEAL" renk={RENK.lacivert} />
      </Kamera>

      {/* 1. faz: kolay deney */}
      <Baslik t={t} bas={tDeney} bitis={tFaz2} metin="AN EASY EXPERIMENT" x={72} y={160} boyut={28} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tDene} bitis={tFaz2} metin="TRY IT ON YOURSELF" x={66} y={252} boyut={96} renk={RENK.lacivert} />

      {/* 2. faz: iki sıra (lejant) + eğrileri karşılaştır */}
      {aKicker > 0 && (
        <div style={{ position: "absolute", left: 72, top: 806, opacity: aKicker, transform: `translateY(${(1 - aKicker) * 12}px)`,
          fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 5, color: RENK.altin }}>TWO DIFFERENT ORDERS</div>
      )}
      <div style={{ position: "absolute", left: 68, top: 852, display: "flex", gap: 18 }}>
        <Lejant t={t} bas={tIki + 0.15} metin="CARBS FIRST" renk={RENK.mercan} />
        <Lejant t={t} bas={tSira} metin="VEG FIRST" renk={RENK.yesil} />
      </div>
      {aI > 0 && (
        <div style={{ position: "absolute", left: 72, top: 140, transform: `scale(${sI})`, transformOrigin: "0 50%", opacity: aI,
          fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`,
          background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</div>
      )}
      <Baslik t={t} bas={tKarsi} metin="COMPARE YOUR CURVES" x={66} y={252} boyut={88} renk={RENK.koyuYesil} />
    </>
  );
};

export default S53;
