// Sahne 32 — lif bariyeri: jel, enzimlerin nişastaya ulaşmasını ve glukozun emilimini yavaşlatır;
// sebze önce gelirse lif, ekmek geldiğinde zaten yerindedir.
import React from "react";
import { ANTON, Etiket, INTER, Ikon, IkonYol, Kamera, RENK, SP, eout, einout, ilerle, kameraYolu, kelimeZamani, kis,
  pop, random, sol } from "../kutuphane";

type N = [number, number];

// Görsel 32: sol sayfada sindirim kanalı (ortada yeşil ağ dokusu + altın taneler), sağ sayfa boş kâğıt.
// Yazı/imza kusuru yok. Sağ sayfaya (ekran x 1000-1880) bağırsak kesiti şeması çizilir.
const X0 = 1030, X1 = 1870;           // tüp uçları (uçlar soluklaşır)
const YU = 300, YA = 724;             // üst / alt duvar
const ZINCIR = Array.from({ length: 6 }, (_, k) => 1350 + k * 76);
const YZ = 486;
// ekmek nişastasının jelde takılıp kaldığı yerler
const EKMEK: N[] = [[1250, 430], [1180, 560], [1390, 380], [1330, 640], [1470, 520], [1560, 430], [1620, 610]];

const altigen = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 3) * k + Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

/** Pac-man biçimli enzim. */
const enzim = (x: number, y: number, r: number, agiz: number) => {
  const a = (agiz * Math.PI) / 180;
  return `M ${x} ${y} L ${x + r * Math.cos(a)} ${y - r * Math.sin(a)} A ${r} ${r} 0 1 0 ${x + r * Math.cos(a)} ${y + r * Math.sin(a)} Z`;
};

/** Çip: renkli daire (numara / simge) + metin. x,y = merkez. */
const Cip: React.FC<{
  t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; no?: string;
  ikon?: "onay" | "saat"; altigenli?: boolean; boyut?: number;
}> = ({ t, bas, bitis = 1e9, x, y, metin, renk, no, ikon, altigenli, boyut = 26 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.42;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
      display: "flex", alignItems: "center", gap: 11, whiteSpace: "nowrap", background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: `7px ${boyut * 0.85}px 7px 8px`, fontFamily: INTER, fontWeight: 800,
      fontSize: boyut, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, color: "#fff", display: "flex", flex: "none",
        alignItems: "center", justifyContent: "center", fontSize: boyut * 0.82 }}>
        {no ?? (ikon ? <IkonYol ad={ikon} boyut={d * 0.66} renk="#fff" kalinlik={6} /> : altigenli ? (
          <svg width={d * 0.62} height={d * 0.62} viewBox="-20 -20 40 40"><polygon points={altigen(0, 0, 15)} fill="none" stroke="#fff" strokeWidth={5} strokeLinejoin="round" /></svg>
        ) : null)}
      </span>
      {metin}
    </div>
  );
};

/** İki renkli kinetik başlık (maskeden kayar). y = satır ortası. */
const IkiRenkBaslik: React.FC<{ t: number; bas: number; x: number; y: number; boyut: number; parcalar: [string, string][] }> = ({
  t, bas, x, y, boyut, parcalar,
}) => {
  if (t < bas) return null;
  const p = eout(ilerle(t, bas, 0.5));
  const yuk = boyut * 1.3;
  return (
    <div style={{ position: "absolute", left: x, top: y - yuk / 2, height: yuk, overflow: "hidden" }}>
      <div style={{ fontFamily: ANTON, fontSize: boyut, lineHeight: `${yuk}px`, whiteSpace: "nowrap",
        transform: `translateY(${(1 - p) * 100}%)`, opacity: Math.min(1, p * 1.5) }}>
        {parcalar.map(([m, r], i) => <span key={i} style={{ color: r, marginRight: i < parcalar.length - 1 ? boyut * 0.22 : 0 }}>{m}</span>)}
      </div>
    </div>
  );
};

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pencere = kameraYolu(t, s.sure, [0, 20, 1880], [30, 30, 1820]);

  // 1. cümle
  const tJel = K(0, "gel"), tYavas = K(0, "slow"), tEnzim = K(0, "enzymes"), tNisasta = K(0, "starch");
  const tSal = K(0, "released"), tGlu = K(0, "glucose"), tEmil = K(0, "absorbed");
  const tSifir = c[1].bas - 0.3; // şema sıfırlanır
  // 2. cümle
  const tSebze = K(1, "vegetables"), tYerinde = K(1, "already in place"), tEkmek = K(1, "bread");

  // jel: 1. cümlede hazır, sıfırlanınca söner; 2. cümlede liflerle soldan dolar
  const jel1 = eout(ilerle(t, tJel - 0.1, 0.7)) * sol(t, tSifir, 0.5);
  const lifP = (i: number) => (t < tSifir + 0.5 ? jel1 : eout(ilerle(t, tSebze + 0.1 + i * 0.09, 1.5)));
  const jel2 = eout(ilerle(t, tSebze + 0.3, 1.6));
  const jel = t < tSifir + 0.5 ? jel1 : jel2;
  const aWall = eout(ilerle(t, 0.05, 0.6));

  const lifler = Array.from({ length: 6 }, (_, i) => {
    const y0 = YU + 50 + i * 65;
    const pts: string[] = [];
    for (let x = X0; x <= X1; x += 16) {
      const yy = y0 + 12 * Math.sin(x / 40 + i * 1.9 + t * 0.35) + 5 * Math.sin(x / 15 + i);
      pts.push(`${x},${yy.toFixed(1)}`);
    }
    return pts.join(" ");
  });

  // enzimler: soldan girer, jelde yavaş ilerler
  const enzimler = [0, 1, 2].map((k) => {
    const t0 = tEnzim + k * 0.15;
    const u = ilerle(t, t0, 2.2);
    const yol = 0.25 * u + 0.75 * einout(u);
    const x = 1060 + (1290 - 1060 + (k === 1 ? 6 : -10)) * yol;
    const y = YZ + (k - 1) * 78 * (1 - 0.3 * yol) + Math.sin(t * 3 + k * 2) * 5;
    return { x, y, a: eout(ilerle(t, t0, 0.35)) * sol(t, tSifir, 0.4), agiz: 28 + 14 * Math.sin(t * 9 + k) };
  });

  // nişasta -> glukoz
  const dSal = eout(ilerle(t, tSal, 0.5));
  const aZincir = eout(ilerle(t, tJel + 0.15, 0.5));
  const glukoz = ZINCIR.map((zx, k) => {
    const u = ilerle(t, tGlu + 0.05 + k * 0.07, 1.6);
    const yol = 0.2 * u + 0.8 * einout(u);
    const y = YZ + (YA + 70 - YZ) * yol + Math.sin(t * 2.4 + k) * 4 * dSal;
    const x = zx + (random(`g32-${k}`) - 0.5) * 50 * dSal;
    const a = aZincir * (1 - kis((y - (YA + 10)) / 50)) * sol(t, tSifir, 0.4);
    return { x, y, a };
  });

  // ekmek nişastası: soldan girer, jelde hızla yavaşlar
  const ekmek = EKMEK.map(([hedefX, y], k) => {
    const t0 = tEkmek - 0.05 + k * 0.09;
    const u = t - t0;
    if (u <= 0) return null;
    const x = X0 - 40 + (hedefX - X0 + 40) * (1 - Math.exp(-u * 3.2));
    return { x, y: y + Math.sin(t * 2 + k) * 4, a: kis(u * 3) };
  });

  // zaman oku (1 -> 2)
  const pOk = eout(ilerle(t, tSebze + 0.6, Math.max(0.5, tEkmek - tSebze - 0.7)));

  return (
    <>
      <Kamera gorsel="tam/32" pencere={pencere}>
        <Etiket t={t} bas={tJel} capa={[480, 612]} konum={[230, 108]} metin="FIBER GEL" renk={RENK.yesil} boyut={26} />
      </Kamera>

      <IkiRenkBaslik t={t} bas={0.1} x={1060} y={172} boyut={104} parcalar={[["FIBER", RENK.lacivert], ["BARRIER", RENK.koyuYesil]]} />
      <Ikon t={t} bas={tYavas} ad="saat" x={1690} y={176} boyut={84} zemin={RENK.altin} />

      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <defs>
          <linearGradient id="uc32" x1={X0} x2={X1} y1={0} y2={0} gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff" stopOpacity={0} />
            <stop offset="0.1" stopColor="#fff" stopOpacity={1} />
            <stop offset="0.9" stopColor="#fff" stopOpacity={1} />
            <stop offset="1" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <mask id="maske32"><rect x={X0} y={0} width={X1 - X0} height={1080} fill="url(#uc32)" /></mask>
          <clipPath id="ic32"><rect x={X0} y={YU} width={X1 - X0} height={YA - YU} /></clipPath>
        </defs>
        <g mask="url(#maske32)">
          {/* bağırsak duvarları */}
          <g opacity={aWall}>
            {[YU - 12, YA + 12].map((y) => (
              <g key={y}>
                <line x1={X0} x2={X1} y1={y} y2={y} stroke={RENK.mercan} strokeWidth={26} opacity={0.78} />
                <line x1={X0} x2={X1} y1={y} y2={y} stroke="#fff" strokeWidth={3} opacity={0.35} strokeDasharray="30 22" />
              </g>
            ))}
            <rect x={X0} y={YU} width={X1 - X0} height={YA - YU} fill={RENK.kagitAcik} opacity={0.9} />
          </g>
          {/* jel + lifler */}
          <g clipPath="url(#ic32)">
            <rect x={X0} y={YU} width={X1 - X0} height={YA - YU} fill={RENK.yesil} opacity={0.16 * jel} />
            {lifler.map((p, i) => {
              const q = lifP(i);
              return q > 0 ? (
                <g key={i}>
                  <polyline points={p} fill="none" stroke={RENK.yesil} strokeWidth={46} strokeLinecap="round" opacity={0.13 * q}
                    pathLength={1} strokeDasharray={1} strokeDashoffset={1 - q} />
                  <polyline points={p} fill="none" stroke={RENK.koyuYesil} strokeWidth={6} strokeLinecap="round" opacity={0.75}
                    pathLength={1} strokeDasharray={1} strokeDashoffset={1 - q} />
                </g>
              ) : null;
            })}
          </g>
          {/* nişasta zinciri -> glukoz */}
          {t < tSifir + 0.5 && aZincir > 0 && (
            <g>
              {ZINCIR.slice(0, -1).map((zx, k) => (
                <line key={k} x1={zx + 26} x2={zx + 76 - 26} y1={YZ} y2={YZ} stroke={RENK.lacivert} strokeWidth={6}
                  opacity={aZincir * (1 - dSal)} />
              ))}
              {glukoz.map((g, k) => (
                <polygon key={k} points={altigen(g.x, g.y, 27)} fill={dSal > 0 ? RENK.altinAcik : RENK.kagitAcik}
                  fillOpacity={0.35 + 0.6 * dSal} stroke={dSal > 0.5 ? RENK.altin : RENK.lacivert} strokeWidth={5}
                  strokeLinejoin="round" opacity={g.a} />
              ))}
            </g>
          )}
          {/* enzimler */}
          {enzimler.map((e, k) => e.a > 0 && (
            <path key={k} d={enzim(e.x, e.y, 24, e.agiz)} fill={RENK.lacivert} stroke={RENK.murekkep} strokeWidth={3}
              strokeLinejoin="round" opacity={e.a} />
          ))}
          {/* ekmek nişastası */}
          {ekmek.map((e, k) => e && (
            <polygon key={k} points={altigen(e.x, e.y, 28)} fill={RENK.mercan} fillOpacity={0.35} stroke={RENK.mercan}
              strokeWidth={5} strokeLinejoin="round" opacity={e.a} />
          ))}
        </g>
        {/* zaman oku: önce sebze, sonra ekmek */}
        {pOk > 0 && (
          <g>
            <line x1={1316} y1={846} x2={1316 + (1530 - 1316) * pOk} y2={846} stroke={RENK.altin} strokeWidth={6} strokeLinecap="round"
              strokeDasharray="14 10" />
            <polygon points={`${1316 + (1530 - 1316) * pOk + 18},846 ${1316 + (1530 - 1316) * pOk},834 ${1316 + (1530 - 1316) * pOk},858`}
              fill={RENK.altin} />
          </g>
        )}
      </svg>

      {/* 1. cümle etiketleri */}
      <Cip t={t} bas={tEnzim} bitis={tSifir} x={1150} y={364} metin="ENZYMES" renk={RENK.lacivert} ikon="saat" boyut={24} />
      <Cip t={t} bas={tNisasta} bitis={tSal + 0.25} x={1540} y={388} metin="STARCH" renk={RENK.gri} boyut={24} altigenli />
      <Cip t={t} bas={tGlu} bitis={tSifir} x={1540} y={388} metin="GLUCOSE" renk={RENK.altin} boyut={24} altigenli />
      {(() => {
        const a = eout(ilerle(t, tEmil, 0.4)) * sol(t, tSifir, 0.4);
        return a > 0 ? (
          <div style={{ position: "absolute", left: 1540, top: 790, transform: `translate(-50%, ${(1 - a) * -10}px)`, opacity: a,
            display: "flex", alignItems: "center", gap: 10, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4,
            color: RENK.lacivert, whiteSpace: "nowrap" }}>
            <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={34} renk={RENK.altin} kalinlik={6} /></span>
            SLOWER ABSORPTION
          </div>
        ) : null;
      })()}

      {/* 2. cümle: önce sebze (lif yerinde), sonra ekmek */}
      <Cip t={t} bas={tSebze} x={1180} y={846} no="1" metin="VEGETABLES" renk={RENK.yesil} boyut={26} />
      <Cip t={t} bas={tYerinde} x={1450} y={YU - 12} ikon="onay" metin="FIBER IN PLACE" renk={RENK.koyuYesil} boyut={26} />
      <Cip t={t} bas={tEkmek} x={1650} y={846} no="2" metin="BREAD" renk={RENK.mercan} boyut={26} />
    </>
  );
};

export default S32;
