// Sahne 6 — 1 dakikalık onaylı demodan uyarlandı.
import React from "react";
import { AbsoluteFill, AltSis, ANTON, Baslik, Etiket, GorselKart, Img, INTER, Kamera, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, kis, pop, random, staticFile } from "../kutuphane";

// --- 6. Nişasta -> glukoz -------------------------------------------------------------
const YIYECEK = [
  { ifade: "bread", ad: "BREAD", capa: [390, 770] as [number, number], konum: [300, 610] as [number, number] },
  { ifade: "rice", ad: "RICE", capa: [853, 800] as [number, number], konum: [1060, 690] as [number, number] },
  { ifade: "pasta", ad: "PASTA", capa: [1680, 925] as [number, number], konum: [1690, 790] as [number, number] },
  { ifade: "potatoes", ad: "POTATOES", capa: [1262, 885] as [number, number], konum: [1330, 755] as [number, number] },
];
const HEDEF: [number, number][] = [[1190, 430], [1310, 300], [1425, 470], [1545, 330], [1665, 480], [1775, 310]];

const altigen = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 3) * k + Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure + 1);
  const tZincir = K(0, "your digestive system"), tKir = K(0, "down into"), tGlu = K(0, "glucose");
  const pOk = eout(ilerle(t, tKir, 0.5));
  // görselde yükselen glukoz parçacıkları (her yiyecek anıldığında)
  const parcaciklar: React.ReactNode[] = [];
  YIYECEK.forEach((y, i) => {
    const bas = K(0, y.ifade) + 0.3;
    for (let j = 0; j < 26; j++) {
      const t0 = bas + j * 0.11, u = (t - t0) / 1.7;
      if (u <= 0 || u >= 1) continue;
      const r1 = random(`p${i}-${j}-a`), r2 = random(`p${i}-${j}-b`), r3 = random(`p${i}-${j}-c`);
      const sx = y.capa[0] + (r1 - 0.5) * 120, sy = y.capa[1] - 50;
      const ex = 640 + r2 * 240, ey = 230 + r3 * 330;
      const cx = sx + (ex - sx) * 0.2, cy = sy - 260;
      const e = eout(u);
      const px = (1 - e) ** 2 * sx + 2 * (1 - e) * e * cx + e * e * ex;
      const py = (1 - e) ** 2 * sy + 2 * (1 - e) * e * cy + e * e * ey;
      parcaciklar.push(<circle key={`${i}-${j}`} cx={px} cy={py} r={5 + 5 * r1} fill={RENK.altinAcik}
        opacity={Math.sin(Math.PI * u) * 0.95} filter="url(#parilti)" />);
    }
  });
  return (
    <>
      <Kamera gorsel="tam/06" pencere={[60 + 40 * z, 0 + 30 * z, 1800 - 80 * z]}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <filter id="parilti" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {parcaciklar}
        </svg>
        {YIYECEK.map((y) => (
          <Etiket key={y.ad} t={t} bas={K(0, y.ifade) - 0.1} capa={y.capa} konum={y.konum} metin={y.ad} renk={RENK.altin} boyut={26} />
        ))}
      </Kamera>
      <AltSis a={0.75} yukseklik={150} />
      <Baslik t={t} bas={tZincir - 0.1} metin="STARCH" x={1150} y={150} boyut={76} renk={RENK.lacivert} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pOk > 0 && (
          <g>
            <line x1={1380} y1={152} x2={1380 + 130 * pOk} y2={152} stroke={RENK.altin} strokeWidth={8} strokeLinecap="round" />
            <polygon points={`${1380 + 130 * pOk + 22},152 ${1380 + 130 * pOk},138 ${1380 + 130 * pOk},166`} fill={RENK.altin} />
          </g>
        )}
        {HEDEF.map((h, k) => {
          const [sc, al] = pop(t, tZincir + k * 0.07, 0.45);
          if (al <= 0) return null;
          const zx = 1180 + k * 112, zy = 310;
          const d = einout(ilerle(t, tKir + k * 0.06, 1.3));
          const yuz = Math.sin((t - tKir) * 2.2 + k) * 8 * d;
          const x = zx + (h[0] - zx) * d, y = zy + (h[1] - zy) * d + yuz;
          const r = 36 * sc;
          const dolgu = d > 0 ? RENK.altinAcik : RENK.lacivert;
          return (
            <g key={k} opacity={al}>
              {k < 5 && d < 0.35 && (
                <line x1={zx + 36} y1={zy} x2={zx + 112 - 36} y2={zy} stroke={RENK.lacivert} strokeWidth={6}
                  opacity={1 - d / 0.35} />
              )}
              <g transform={`rotate(${d * (k % 2 ? 35 : -30)} ${x} ${y})`}>
                <polygon points={altigen(x, y, r)} fill={dolgu} fillOpacity={0.18 + 0.62 * d} stroke={d > 0.5 ? RENK.altin : RENK.lacivert}
                  strokeWidth={5} strokeLinejoin="round" />
              </g>
              {d > 0 && d < 1 && <circle cx={x} cy={y} r={40 + 50 * d} fill="none" stroke={RENK.altinAcik} strokeWidth={3} opacity={(1 - d) * 0.8} />}
            </g>
          );
        })}
      </svg>
      <Baslik t={t} bas={tGlu - 0.1} metin="GLUCOSE" x={1545} y={150} boyut={76} renk={RENK.altin} />
    </>
  );
};

export default S06;
