// Sahne 10 — tip 2 diyabet / prediyabet: insüline yanıt azalır, pankreas yetişemeyebilir; eğri daha yüksek ve uzun.
import React from "react";
import { Baslik, Etiket, Hap, INTER, KanSekeriGrafigi, Kamera, RENK, SP, egriDeger, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, random, sol } from "../kutuphane";

// Görsel (tam/10): sol sayfada kesik damar, içinde sıkışık altın glukoz küreleri (açık uç ~860,700);
// sağ sayfada hücre kesiti (merkez ~1485,555; zar x 1180–1790), mavi "kapı" reseptörleri (ör. 1330,410).
// Kusurlar: sahte yazılar "Rd" (170–200, 950–965), "Bk" (1700–1718, 795–807), sayfa numaraları (y > 1065) -> yama.
const KAGIT_G = "#FAF9DB";
const YAMALAR: [number, number, number, number][] = [[158, 940, 54, 32], [1694, 790, 30, 22], [474, 1062, 34, 18], [1458, 1062, 26, 18]];

// Temsili eğriler (mg/dL benzeri, eksende sayı yok); çizimde 50 çıkarılır.
const KAY = 50;
const NORMAL: [number, number][] = [[0, 90], [15, 108], [30, 124], [45, 130], [60, 126], [90, 112], [120, 102], [150, 94], [180, 90]];
const T2: [number, number][] = [[0, 90], [15, 118], [30, 150], [45, 172], [60, 182], [90, 176], [120, 160], [150, 138], [180, 120]];
const kay = (p: [number, number][]) => p.map(([m, v]) => [m, v - KAY] as [number, number]);
const EN = kay(NORMAL), ET = kay(T2);
const X0 = 190, X1 = 880, YT = 470, YB = 820, YMAX = 145, XMAX = 180;
const xs = (m: number) => X0 + (m / XMAX) * (X1 - X0);
const ys = (v: number) => YB - (v / YMAX) * (YB - YT);

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [20, 0, 1880], [80, 40, 1760]);
  const tT2 = K(0, "type 2 diabetes"), tPre = K(0, "prediabetes"), tSis = K(0, "that system");
  const tYanit = K(1, "responds less well"), tPank = K(1, "pancreas may not");
  const tAyni = K(2, "same meal"), tIt = K(2, "push"), tYuk = K(2, "higher"), tUzun = K(2, "keep it high");
  const tPanel = c[2].bas - 0.35;
  const pPanel = eout(ilerle(t, tPanel, 0.6));
  // damardan hücre zarına giden, zarda takılıp sönen glukoz
  const glukoz: React.ReactNode[] = [];
  for (let j = 0; j < 60; j++) {
    const t0 = tSis + j * 0.13;
    if (t0 > c[2].bas) break;
    const u = (t - t0) / 2.4;
    if (u <= 0 || u >= 1) continue;
    const r1 = random(`s10-${j}-a`), r2 = random(`s10-${j}-b`);
    const sx = 800 + r1 * 90, sy = 690 + (r2 - 0.5) * 120;
    const ex = 1188 + Math.abs(r2 - 0.5) * 30, ey = 470 + r1 * 190;
    const e = eout(Math.min(1, u / 0.62));
    const cx = (sx + ex) / 2, cy = Math.min(sy, ey) - 90;
    const px = (1 - e) ** 2 * sx + 2 * (1 - e) * e * cx + e * e * ex + (u > 0.62 ? Math.sin(t * 9 + j) * 2.5 : 0);
    const py = (1 - e) ** 2 * sy + 2 * (1 - e) * e * cy + e * e * ey;
    const a = Math.min(1, u * 6) * (u > 0.72 ? (1 - u) / 0.28 : 1);
    glukoz.push(<circle key={j} cx={px} cy={py} r={9 + 3 * r1} fill={RENK.altinAcik} stroke={RENK.altin} strokeWidth={2.5} opacity={a} />);
  }
  // işaretler
  const pYuk = eout(ilerle(t, tYuk, 0.6));
  const pUzun = eout(ilerle(t, tUzun, 0.8));
  const alan = [
    ...Array.from({ length: 61 }, (_, k) => (XMAX * k) / 60).map((m) => `${xs(m)},${ys(egriDeger(ET, m))}`),
    ...Array.from({ length: 61 }, (_, k) => (XMAX * (60 - k)) / 60).map((m) => `${xs(m)},${ys(egriDeger(EN, m))}`),
  ].join(" ");
  const yN = ys(egriDeger(EN, 60)), yTt = ys(egriDeger(ET, 60));
  const [sn, an] = pop(t, tAyni, 0.5);
  const [st, at] = pop(t, tIt, 0.5);
  const aEtk = eout(ilerle(t, tPanel + 0.3, 0.5));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={pen}>
        {YAMALAR.map(([x, y, w, h], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: w, height: h, background: KAGIT_G, borderRadius: 8,
            filter: "blur(3px)" }} />
        ))}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>{glukoz}</svg>
        <Etiket t={t} bas={tYanit} capa={[1330, 412]} konum={[1420, 226]} metin="RESPONDS LESS TO INSULIN" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* pankreas notu: üst bantta, etiketin üstünde; grafik "higher" dediğinde çekilir */}
      {(() => {
        const [sc, al] = pop(t, tPank, 0.5);
        if (al <= 0) return null;
        return (
          <div style={{ position: "absolute", left: 1452, top: 120, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol(t, tYuk + 0.3, 0.5) }}>
            <Hap metin="PANCREAS MAY FALL BEHIND" renk={RENK.altin} boyut={26} />
          </div>
        );
      })()}
      {/* 1. cümle başlığı (sol üst boşluk) */}
      <Baslik t={t} bas={tT2 - 0.05} bitis={tPanel} metin="TYPE 2 DIABETES" x={80} y={112} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPre - 0.05} bitis={tPanel} metin="& PREDIABETES" x={80} y={196} boyut={72} renk={RENK.koyuYesil} />
      {/* 3. cümle: sol panel + karşılaştırma grafiği */}
      {/* sol sayfa tamamen kâğıtla örtülür (damar grafiğin arkasından görünmesin); geçiş kitap ortasında biter */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1012, opacity: pPanel,
        background: `linear-gradient(to right, ${kagit(0.99)} 0%, ${kagit(0.99)} 88%, ${kagit(0)} 100%)` }} />
      {pPanel > 0 && (
        <>
          <Baslik t={t} bas={tAyni - 0.1} metin="SAME MEAL" x={84} y={104} boyut={26} renk={RENK.altin} font="inter" aralik={5} />
          <Baslik t={t} bas={tYuk} metin="HIGHER" x={80} y={186} boyut={96} renk={RENK.lacivert} />
          <Baslik t={t} bas={tUzun} metin="AND LONGER" x={80} y={294} boyut={96} renk={RENK.mercan} />
          <div style={{ position: "absolute", left: 470, top: 168, opacity: aEtk, fontFamily: INTER, fontWeight: 800, fontSize: 22,
            letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999,
            padding: "5px 16px" }}>ILLUSTRATIVE</div>
          {/* lejant */}
          <div style={{ position: "absolute", left: X0 + 10, top: 418, display: "flex", gap: 18 }}>
            <div style={{ transform: `scale(${sn})`, opacity: an }}><Hap metin="NORMAL" renk={RENK.yesil} boyut={24} /></div>
            <div style={{ transform: `scale(${st})`, opacity: at }}><Hap metin="TYPE 2 / PREDIABETES" renk={RENK.mercan} boyut={24} /></div>
          </div>
          {pUzun > 0 && (
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              <polygon points={alan} fill={RENK.mercan} opacity={0.16 * pUzun} />
            </svg>
          )}
          <KanSekeriGrafigi t={t} egriler={[{ noktalar: EN, renk: RENK.yesil }]} cizimBas={tAyni} cizimSure={1.6}
            x0={X0} x1={X1} yt={YT} yb={YB} ymax={YMAX} xmax={XMAX} taban={40} eksenBas={tPanel + 0.2}
            dkEtiketleri={[0, 60, 120, 180]} />
          <KanSekeriGrafigi t={t} egriler={[{ noktalar: ET, renk: RENK.mercan }]} cizimBas={tIt} cizimSure={2.2}
            x0={X0} x1={X1} yt={YT} yb={YB} ymax={YMAX} xmax={XMAX} taban={null} eksenBas={1e9} dkEtiketleri={[]} />
          {pYuk > 0 && (
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              <g opacity={pYuk}>
                <line x1={xs(60) + 34} y1={yN - 6} x2={xs(60) + 34} y2={yN - 6 - (yN - yTt - 40) * pYuk} stroke={RENK.mercan}
                  strokeWidth={6} strokeLinecap="round" />
                <polygon points={`${xs(60) + 20},${yTt + 30} ${xs(60) + 48},${yTt + 30} ${xs(60) + 34},${yTt + 10}`} fill={RENK.mercan}
                  opacity={pYuk >= 0.95 ? 1 : 0} />
              </g>
            </svg>
          )}
        </>
      )}
    </>
  );
};

export default S10;
