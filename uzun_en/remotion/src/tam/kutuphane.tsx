// Tam video sahne kütüphanesi. Sahne dosyaları (sahneler/SNN.tsx) YALNIZCA buradan içe aktarır.
//
// Koordinatlar 1920x1080 ekran pikselidir. Kamera'nın çocukları görsel koordinatındadır (görselle birlikte
// hareket eder); Kamera dışındaki öğeler ekran koordinatındadır.
// Zaman: t = sahne içi saniye. K = kelimeZamani(s); K(cümle_no, "ifade") = ifadenin söylendiği an.
// Güvenli alanlar: altyazı y >= 960 (alt bant), filigran sağ üst (x >= 1590, y <= 92),
// otomatik bölüm rozeti sol üst (yalnızca bölüm açan sahnelerde ilk ~3.3 sn).
import React from "react";
import { AbsoluteFill, Img, random, staticFile } from "remotion";
import { ANTON, INTER } from "../fontlar";
import { Baslik, Kamera, Pencere, kagit, pencereAra } from "../ortak";
import { RENK, einout, eout, ilerle, kelimeZamani, kis, pop, sol } from "../zaman";
import type { SP } from "./veri";

export { AbsoluteFill, Img, random, staticFile };
/** Kanal adı (marka.json): MARKA.ad = "The Food Almanac", MARKA.filigran = büyük harf. */
export { default as MARKA } from "../marka.gen.json";
export { ANTON, INTER };
export { AltSis, Baslik, Etiket, Hap, Kamera, kagit, pencereAra, pencereSinirla } from "../ortak";
export type { Pencere } from "../ortak";
export { RENK, eback, einout, eout, ilerle, kelimeZamani, kis, pop, sol } from "../zaman";
export type { SP, SahneTam } from "./veri";

/** Sahne boyunca yavaş kamera hareketi: a penceresinden b penceresine (yumuşak). */
export const kameraYolu = (t: number, sure: number, a: Pencere, b: Pencere): Pencere =>
  pencereAra(a, b, einout(ilerle(t, 0, sure + 0.7)));

/** Kenar paneli (kâğıt rengi geçiş): yazılar için görselin bir yanını yumuşakça örter. */
export const Panel: React.FC<{ a: number; taraf?: "sol" | "sag"; genislik?: number; opak?: number }> = ({
  a, taraf = "sag", genislik = 820, opak = 0.95,
}) => (
  <div style={{
    position: "absolute", top: 0, bottom: 0, width: genislik, opacity: a, [taraf === "sag" ? "right" : "left"]: 0,
    background: `linear-gradient(to ${taraf === "sag" ? "right" : "left"}, ${kagit(0)} 0%, ${kagit(opak)} 30%, ${kagit(Math.min(1, opak + 0.03))} 100%)`,
  }} />
);

/** Görselin üstüne tam örtü (kâğıt). Grafik/diyagram için görseli soldurmakta kullanılır. */
export const Ortu: React.FC<{ a: number }> = ({ a }) => (
  <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: a }} />
);

/** Sol üstte kaynak etiketi (lacivert hap + altın nokta). */
export const KaynakEtiketi: React.FC<{ t: number; metin: string; bas?: number; bitis?: number; y?: number }> = ({
  t, metin, bas = 0.1, bitis = 1e9, y = 48,
}) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{
      position: "absolute", left: 56, top: y, opacity: a, display: "flex", alignItems: "center", gap: 14,
      background: RENK.lacivert, borderRadius: 999, padding: "12px 28px 12px 20px", color: "#fff",
      fontFamily: INTER, fontWeight: 800, fontSize: 26, transform: `translateY(${(1 - a) * -10}px)`,
    }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
      {metin}
    </div>
  );
};

/** Bölüm rozeti (Tam kompozisyonu bölüm açan sahnelerde kendisi gösterir). */
export const BolumRozeti: React.FC<{ t: number; no: string; ad: string }> = ({ t, no, ad }) => {
  const a = eout(ilerle(t, 0.15, 0.5)) * sol(t, 3.0, 0.45);
  if (a <= 0) return null;
  return (
    <div style={{
      position: "absolute", left: 56, top: 44, opacity: a, display: "flex", alignItems: "center", gap: 14,
      background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "8px 26px 8px 10px",
      fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.lacivert,
      transform: `translateX(${(1 - a) * -24}px)`, boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap",
    }}>
      <span style={{ background: RENK.altin, color: "#fff", borderRadius: 999, padding: "5px 14px", fontSize: 20 }}>{no}</span>
      {ad.toUpperCase()}
    </div>
  );
};

/** Büyük sayı/vurgu rozeti (ör. "–37%", "<140", "≈ HALF") + altında kısa not. x = orta, y = üst kenar. */
export const VurguRozet: React.FC<{
  t: number; bas: number; vurgu: string; not?: string; x: number; y: number; renk?: string; genislik?: number;
  boyut?: number; bitis?: number;
}> = ({ t, bas, vurgu, not, x, y, renk = RENK.altin, genislik = 380, boyut = 104, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.6);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{
      position: "absolute", left: x, top: y, width: genislik, transform: `translate(-50%, 0) scale(${sc})`,
      transformOrigin: "50% 0", opacity: a, padding: "8px 18px 16px", textAlign: "center", background: "#FCF8EC",
      border: `4px solid ${renk}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
    }}>
      <div style={{ fontFamily: ANTON, fontSize: boyut, lineHeight: 1.05, color: renk, whiteSpace: "nowrap" }}>{vurgu}</div>
      {not && <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, lineHeight: 1.25, color: RENK.lacivert }}>{not}</div>}
    </div>
  );
};

/** Alt alta kinetik başlık satırları. y = ilk satırın ortası. */
export const BaslikBlok: React.FC<{
  t: number; bas: number; satirlar: string[]; x: number; y: number; boyut?: number; hiza?: "sol" | "orta" | "sag";
  renkler?: string[]; adim?: number; bitis?: number; satirArasi?: number;
}> = ({ t, bas, satirlar, x, y, boyut = 96, hiza = "sol", renkler, adim = 0.18, bitis, satirArasi = 1.12 }) => (
  <>
    {satirlar.map((m, k) => (
      <Baslik key={k} t={t} bas={bas + k * adim} bitis={bitis} metin={m} x={x} y={y + k * boyut * satirArasi}
        boyut={boyut} hiza={hiza}
        renk={renkler?.[k] ?? (k === satirlar.length - 1 && satirlar.length > 1 ? RENK.koyuYesil : RENK.lacivert)} />
    ))}
  </>
);

/** Kısa açıklama satırı (Inter). */
export const Not: React.FC<{
  t: number; bas: number; metin: string; x: number; y: number; boyut?: number; renk?: string; hiza?: "sol" | "orta" | "sag";
  genislik?: number; bitis?: number; agirlik?: number;
}> = ({ t, bas, metin, x, y, boyut = 34, renk = RENK.lacivert, hiza = "sol", genislik, bitis = 1e9, agirlik = 600 }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  const konum: React.CSSProperties = hiza === "sol" ? { left: x } : hiza === "sag" ? { right: 1920 - x }
    : { left: x, transform: `translate(-50%, ${(1 - a) * 12}px)` };
  return (
    <div style={{
      position: "absolute", top: y, ...konum, width: genislik, opacity: a, textAlign: hiza === "orta" ? "center" : hiza === "sag" ? "right" : "left",
      fontFamily: INTER, fontWeight: agirlik, fontSize: boyut, lineHeight: 1.3, color: renk,
      ...(hiza !== "orta" ? { transform: `translateY(${(1 - a) * 12}px)` } : {}),
    }}>{metin}</div>
  );
};

/** Sayaç: bas anından itibaren 0 -> hedef. */
export const sayac = (t: number, bas: number, hedef: number, sure = 1.2, ondalik = 0) =>
  (hedef * eout(ilerle(t, bas, sure))).toFixed(ondalik);

/** Dikey çubuk grafik. Çubuklar sırayla büyür; değer etiketi çubuk dolunca belirir. */
export const CubukGrafik: React.FC<{
  t: number; bas: number; cubuklar: { etiket: string; deger: number; metin: string; renk?: string; bas?: number }[];
  x: number; y: number; w: number; h: number; maks?: number; aralik?: number; birimEtiketi?: string;
}> = ({ t, bas, cubuklar, x, y, w, h, maks, aralik = 0.45, birimEtiketi }) => {
  const m = maks ?? Math.max(...cubuklar.map((c) => c.deger)) * 1.15;
  const n = cubuklar.length;
  const gw = w / n;
  const bw = Math.min(220, gw * 0.56);
  const aE = eout(ilerle(t, bas - 0.3, 0.5));
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aE}>
          {[0.25, 0.5, 0.75, 1].map((f) => (
            <line key={f} x1={x} x2={x + w} y1={y + h - f * h} y2={y + h - f * h} stroke={RENK.murekkep} strokeOpacity={0.1} strokeWidth={2} />
          ))}
          <line x1={x - 10} x2={x + w + 10} y1={y + h} y2={y + h} stroke={RENK.murekkep} strokeWidth={4} />
        </g>
        {cubuklar.map((c, i) => {
          const b0 = c.bas ?? bas + i * aralik;
          const p = eout(ilerle(t, b0, 0.9));
          const bh = (c.deger / m) * h * p;
          const cx = x + gw * (i + 0.5);
          return (
            <g key={i}>
              <rect x={cx - bw / 2} y={y + h - bh} width={bw} height={bh} rx={10} fill={c.renk ?? RENK.yesil} />
              <rect x={cx - bw / 2} y={y + h - bh} width={bw * 0.18} height={bh} rx={6} fill="#fff" opacity={0.16} />
            </g>
          );
        })}
      </svg>
      {cubuklar.map((c, i) => {
        const b0 = c.bas ?? bas + i * aralik;
        const cx = x + gw * (i + 0.5);
        const p = eout(ilerle(t, b0, 0.9));
        const [sc, al] = pop(t, b0 + 0.7, 0.5);
        const top = y + h - (c.deger / m) * h * p;
        return (
          <React.Fragment key={i}>
            <div style={{ position: "absolute", left: cx, top: top - 96, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
              fontFamily: ANTON, fontSize: 76, lineHeight: "90px", color: c.renk ?? RENK.yesil, whiteSpace: "nowrap" }}>{c.metin}</div>
            <div style={{ position: "absolute", left: cx, top: y + h + 18, transform: "translateX(-50%)", opacity: eout(ilerle(t, b0 - 0.2, 0.4)),
              fontFamily: INTER, fontWeight: 800, fontSize: 32, color: RENK.lacivert, whiteSpace: "nowrap" }}>{c.etiket}</div>
          </React.Fragment>
        );
      })}
      {birimEtiketi && (
        <div style={{ position: "absolute", left: x, top: y - 46, opacity: aE, fontFamily: INTER, fontWeight: 700, fontSize: 24, color: RENK.gri }}>{birimEtiketi}</div>
      )}
    </>
  );
};

// --- Kan şekeri eğrileri ---------------------------------------------------------------
/** Monoton kübik ara değerleme (tepe aşması yok). noktalar: [dakika, değer][] */
export const egriDeger = (pts: [number, number][], x: number) => {
  const n = pts.length;
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const d = xs.slice(0, -1).map((_, i) => (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
  const m = [d[0], ...d.slice(1).map((di, i) => (d[i] * di > 0 ? (d[i] + di) / 2 : 0)), d[n - 2]];
  const xx = kis(x, xs[0], xs[n - 1]);
  let i = 0;
  while (i < n - 2 && xx > xs[i + 1]) i++;
  const h = xs[i + 1] - xs[i], u = (xx - xs[i]) / h;
  return (2 * u ** 3 - 3 * u ** 2 + 1) * ys[i] + (u ** 3 - 2 * u ** 2 + u) * h * m[i] +
    (-2 * u ** 3 + 3 * u ** 2) * ys[i + 1] + (u ** 3 - u ** 2) * h * m[i + 1];
};
/** Temsili eğriler (100 = yemek öncesi). Shukla 2015: önce sebze+protein 30/60/120. dk'da %29/%37/%17 daha düşük. */
export const EGRILER: Record<string, [number, number][]> = {
  karbOnce: [[0, 100], [15, 160], [30, 212], [45, 236], [60, 232], [75, 214], [90, 192], [105, 172], [120, 158]],
  sebzeOnce: [[0, 100], [15, 124], [30, 150.5], [45, 152], [60, 146.2], [75, 143], [90, 140.2], [105, 135], [120, 131.1]],
};

export type Egri = { noktalar: [number, number][]; renk: string; ad?: string; adBas?: number; adDy?: number; gecik?: number; kalinlik?: number; kesikli?: boolean };

/** Kan şekeri grafiği: eksenler, kalem ucuyla çizilen eğriler, isteğe bağlı taban çizgisi, aralık gölgesi, dakika işaretleri. */
export const KanSekeriGrafigi: React.FC<{
  t: number; egriler: Egri[]; cizimBas: number; cizimSure?: number;
  x0?: number; x1?: number; yb?: number; yt?: number; ymax?: number; xmax?: number;
  taban?: number | null; tabanEtiketi?: string; alanBas?: number | null; eksenBas?: number;
  isaretler?: { dk: number; bas: number }[]; dkEtiketleri?: number[]; yEtiketi?: string; dkBirim?: string;
  esik?: { deger: number; etiket: string; bas: number; renk?: string } | null;
}> = ({
  t, egriler, cizimBas, cizimSure = 4, x0 = 340, x1 = 1420, yb = 860, yt = 330, ymax = 260, xmax = 120,
  taban = 100, tabanEtiketi = "before the meal", alanBas = null, eksenBas = 0.05, isaretler = [],
  dkEtiketleri = [0, 30, 60, 90, 120], yEtiketi = "blood sugar", dkBirim = "min", esik = null,
}) => {
  const ys = (v: number) => yb - (v / ymax) * (yb - yt);
  const xs = (m: number) => x0 + (m / xmax) * (x1 - x0);
  const aE = eout(ilerle(t, eksenBas, 0.6));
  const pc = eout(ilerle(t, cizimBas, cizimSure));
  const yol = (pts: [number, number][], son: number) => {
    const out: string[] = [];
    const N = 120;
    for (let i = 0; i <= N; i++) {
      const m = Math.min(son, (xmax * i) / N);
      out.push(`${xs(m).toFixed(1)},${ys(egriDeger(pts, m)).toFixed(1)}`);
      if (m >= son) break;
    }
    return out.join(" ");
  };
  const pAlan = alanBas == null ? 0 : eout(ilerle(t, alanBas, 0.8));
  const alan = egriler.length >= 2 ? [
    ...Array.from({ length: 121 }, (_, k) => (xmax * k) / 120).map((m) => `${xs(m)},${ys(egriDeger(egriler[0].noktalar, m))}`),
    ...Array.from({ length: 121 }, (_, k) => (xmax * (120 - k)) / 120).map((m) => `${xs(m)},${ys(egriDeger(egriler[1].noktalar, m))}`),
  ].join(" ") : "";
  const yazi = (st: React.CSSProperties): React.CSSProperties => ({ fontFamily: INTER, ...st });
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
      <defs>
        <filter id="egriGolge" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#302822" floodOpacity="0.25" />
        </filter>
      </defs>
      <g opacity={aE}>
        {dkEtiketleri.map((m) => (
          <g key={m}>
            <line x1={xs(m)} y1={yb} x2={xs(m)} y2={yt} stroke={RENK.murekkep} strokeOpacity={0.13} strokeWidth={2} />
            <text x={xs(m)} y={yb + 44} textAnchor="middle" style={yazi({ fontWeight: 500, fontSize: 30, fill: RENK.lacivert })}>{m} {dkBirim}</text>
          </g>
        ))}
        <polyline points={`${x0},${yt - 20} ${x0},${yb} ${x1 + 20},${yb}`} fill="none" stroke={RENK.murekkep} strokeWidth={4} />
        <text x={x0 - 30} y={(yb + yt) / 2} transform={`rotate(-90 ${x0 - 30} ${(yb + yt) / 2})`} textAnchor="middle"
          style={yazi({ fontWeight: 700, fontSize: 30, fill: RENK.lacivert })}>{yEtiketi}</text>
        {taban != null && (
          <>
            <line x1={x0} y1={ys(taban)} x2={x1} y2={ys(taban)} stroke="#787882" strokeOpacity={0.8} strokeWidth={2.5} strokeDasharray="10 10" />
            <text x={x1 - 4} y={ys(taban) + 34} textAnchor="end" style={yazi({ fontWeight: 500, fontSize: 24, fill: "#6E6E78" })}>{tabanEtiketi}</text>
          </>
        )}
      </g>
      {esik && (() => {
        const a = eout(ilerle(t, esik.bas, 0.5));
        return (
          <g opacity={a}>
            <line x1={x0} y1={ys(esik.deger)} x2={x0 + (x1 - x0) * a} y2={ys(esik.deger)} stroke={esik.renk ?? RENK.mercan} strokeWidth={3.5} strokeDasharray="16 10" />
            <text x={x1 - 4} y={ys(esik.deger) - 14} textAnchor="end" style={yazi({ fontWeight: 800, fontSize: 26, fill: esik.renk ?? RENK.mercan })}>{esik.etiket}</text>
          </g>
        );
      })()}
      {alan && <polygon points={alan} fill={RENK.altin} opacity={0.16 * pAlan} />}
      {isaretler.map((is, i) => {
        const a = eout(ilerle(t, is.bas, 0.5));
        return a > 0 ? <line key={i} x1={xs(is.dk)} y1={yb} x2={xs(is.dk)} y2={yt - 10} stroke={RENK.lacivert} strokeWidth={4} strokeDasharray="14 10" opacity={a} /> : null;
      })}
      {egriler.map((e, i) => {
        const p = kis(pc * 1.12 - (e.gecik ?? i * 0.12));
        if (p <= 0) return null;
        const son = xmax * p;
        const ux = xs(son), uy = ys(egriDeger(e.noktalar, son));
        const aL = e.ad ? eout(ilerle(t, Math.max(cizimBas + cizimSure, e.adBas ?? 0), 0.4)) : 0;
        return (
          <g key={i}>
            <polyline points={yol(e.noktalar, son)} fill="none" stroke={e.renk} strokeWidth={e.kalinlik ?? 11} strokeLinecap="round"
              strokeLinejoin="round" filter="url(#egriGolge)" strokeDasharray={e.kesikli ? "2 18" : undefined} />
            {p < 1 && <circle cx={ux} cy={uy} r={13} fill={e.renk} stroke="#fff" strokeWidth={4} />}
            {e.ad && (
              <text x={x1 + 30} y={ys(egriDeger(e.noktalar, xmax)) + (e.adDy ?? 10)} opacity={aL}
                style={yazi({ fontWeight: 800, fontSize: 32, fill: e.renk })}>{e.ad}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

/** Numaralı / onaylı liste: maddeler soldan kayarak gelir. y = ilk maddenin üstü. */
export const Liste: React.FC<{
  t: number; ogeler: { bas: number; metin: string; renk?: string; bitis?: number }[]; x: number; y: number;
  aralik?: number; boyut?: number; isaret?: "sayi" | "onay" | "nokta" | "carpi"; genislik?: number;
}> = ({ t, ogeler, x, y, aralik = 88, boyut = 40, isaret = "sayi", genislik = 820 }) => (
  <>
    {ogeler.map((o, i) => {
      const p = eout(ilerle(t, o.bas, 0.5));
      const a = p * sol(t, o.bitis ?? 1e9);
      if (a <= 0) return null;
      const r = o.renk ?? RENK.yesil;
      const d = boyut * 1.35;
      return (
        <div key={i} style={{ position: "absolute", left: x, top: y + i * aralik, width: genislik, opacity: a,
          transform: `translateX(${(1 - p) * -40}px)`, display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ width: d, height: d, flex: "none", borderRadius: "50%", background: r, color: "#fff", display: "flex",
            alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: boyut * 0.8 }}>
            {isaret === "sayi" ? i + 1 : isaret === "onay" ? <IkonYol ad="onay" boyut={d * 0.62} renk="#fff" />
              : isaret === "carpi" ? <IkonYol ad="carpi" boyut={d * 0.56} renk="#fff" /> : null}
          </div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: boyut, color: RENK.murekkep, lineHeight: 1.2 }}>{o.metin}</div>
        </div>
      );
    })}
  </>
);

/** Yatay adım akışı: hap -> hap -> hap (ör. VEGETABLES → PROTEIN → CARBS). x = orta, y = orta. */
export const AdimAkisi: React.FC<{
  t: number; adimlar: { bas: number; metin: string; renk: string }[]; x: number; y: number; boyut?: number; numarali?: boolean;
}> = ({ t, adimlar, x, y, boyut = 34, numarali = true }) => (
  <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 18 }}>
    {adimlar.map((a, i) => {
      const [sc, al] = pop(t, a.bas, 0.5);
      return (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ opacity: al, fontFamily: ANTON, fontSize: boyut * 1.4, color: RENK.altin }}>→</span>}
          <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
            background: RENK.kagitAcik, border: `3px solid ${a.renk}`, borderRadius: 999, padding: numarali ? `${boyut * 0.3}px ${boyut * 0.8}px ${boyut * 0.3}px ${boyut * 0.35}px` : `${boyut * 0.3}px ${boyut * 0.8}px`,
            fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            {numarali && (
              <span style={{ width: boyut * 1.2, height: boyut * 1.2, borderRadius: "50%", background: a.renk, color: "#fff", display: "flex",
                alignItems: "center", justifyContent: "center", fontSize: boyut * 0.75 }}>{i + 1}</span>
            )}
            {a.metin}
          </div>
        </React.Fragment>
      );
    })}
  </div>
);

/** Basit simge yolları (SVG). */
export const IkonYol: React.FC<{ ad: "onay" | "carpi" | "saat" | "uyari" | "soru" | "ok"; boyut?: number; renk?: string; kalinlik?: number }> = ({
  ad, boyut = 48, renk = RENK.murekkep, kalinlik = 6,
}) => (
  <svg width={boyut} height={boyut} viewBox="0 0 48 48" fill="none" stroke={renk} strokeWidth={kalinlik} strokeLinecap="round" strokeLinejoin="round">
    {ad === "onay" && <polyline points="9,25 20,36 39,13" />}
    {ad === "carpi" && <><line x1="12" y1="12" x2="36" y2="36" /><line x1="36" y1="12" x2="12" y2="36" /></>}
    {ad === "saat" && <><circle cx="24" cy="24" r="18" /><polyline points="24,13 24,24 32,29" /></>}
    {ad === "uyari" && <><path d="M24 6 L44 41 L4 41 Z" /><line x1="24" y1="18" x2="24" y2="28" /><circle cx="24" cy="34.5" r="0.8" /></>}
    {ad === "soru" && <><path d="M16 17 a8 8 0 1 1 11 7.5 c-2 1 -3 2.5 -3 5" /><circle cx="24" cy="37" r="0.8" /></>}
    {ad === "ok" && <><line x1="8" y1="24" x2="38" y2="24" /><polyline points="28,14 38,24 28,34" /></>}
  </svg>
);

/** Daire içinde simge rozeti (pop ile). x,y = merkez. */
export const Ikon: React.FC<{
  t: number; bas: number; ad: "onay" | "carpi" | "saat" | "uyari" | "soru" | "ok"; x: number; y: number; boyut?: number;
  renk?: string; zemin?: string; bitis?: number;
}> = ({ t, bas, ad, x, y, boyut = 92, renk = "#fff", zemin = RENK.yesil, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - boyut / 2, top: y - boyut / 2, width: boyut, height: boyut, borderRadius: "50%",
      background: zemin, display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${sc})`, opacity: a,
      boxShadow: "0 8px 22px rgba(48,40,34,0.22)", border: `4px solid ${RENK.kagitAcik}` }}>
      <IkonYol ad={ad} boyut={boyut * 0.6} renk={renk} />
    </div>
  );
};

/** Yükselen/akan parlak parçacıklar (glukoz vb.). Tam ekran SVG döner; Kamera içinde görsel koordinatında da kullanılabilir. */
export const Parcaciklar: React.FC<{
  t: number; bas: number; kaynak: [number, number]; hedef: [number, number]; adet?: number; aralik?: number; omur?: number;
  yayilma?: number; kavis?: number; renk?: string; boyut?: number; tohum?: string; hedefYayilma?: number;
}> = ({ t, bas, kaynak, hedef, adet = 22, aralik = 0.1, omur = 1.7, yayilma = 110, kavis = -220, renk = RENK.altinAcik, boyut = 6,
  tohum = "p", hedefYayilma = 160 }) => {
  const id = `parilti-${tohum}`;
  const out: React.ReactNode[] = [];
  for (let j = 0; j < adet; j++) {
    const t0 = bas + j * aralik, u = (t - t0) / omur;
    if (u <= 0 || u >= 1) continue;
    const r1 = random(`${tohum}-${j}-a`), r2 = random(`${tohum}-${j}-b`), r3 = random(`${tohum}-${j}-c`);
    const sx = kaynak[0] + (r1 - 0.5) * yayilma, sy = kaynak[1];
    const ex = hedef[0] + (r2 - 0.5) * hedefYayilma, ey = hedef[1] + (r3 - 0.5) * hedefYayilma;
    const cx = sx + (ex - sx) * 0.3, cy = Math.min(sy, ey) + kavis;
    const e = eout(u);
    const px = (1 - e) ** 2 * sx + 2 * (1 - e) * e * cx + e * e * ex;
    const py = (1 - e) ** 2 * sy + 2 * (1 - e) * e * cy + e * e * ey;
    out.push(<circle key={j} cx={px} cy={py} r={boyut * (0.7 + 0.7 * r1)} fill={renk} opacity={Math.sin(Math.PI * u) * 0.95} filter={`url(#${id})`} />);
  }
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <defs>
        <filter id={id} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {out}
    </svg>
  );
};

/** Çerçeveli küçük görsel kartı (polaroid). x,y = merkez. gorsel: "tam/NN"; kirp: [x0,y0,x1,y1] görsel koordinatında (4:3 önerilir). */
export const GorselKart: React.FC<{
  t: number; bas: number; gorsel: string; x: number; y: number; w?: number; h?: number; aci?: number; kirp?: [number, number, number, number];
  etiket?: string; bitis?: number;
}> = ({ t, bas, gorsel, x, y, w = 380, h = 285, aci = 0, kirp, etiket, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.6);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const don = aci + (1 - eout(ilerle(t, bas, 0.8))) * (aci >= 0 ? 5 : -5);
  // kırpım verilmezse görselin ortasından kart oranında kırp (kenar boşluğu kalmasın)
  const oran = w / h;
  const k = kirp ?? (oran < 1920 / 1080 ? [960 - (1080 * oran) / 2, 0, 960 + (1080 * oran) / 2, 1080] : [0, 540 - 1920 / oran / 2, 1920, 540 + 1920 / oran / 2]);
  const s = Math.max(w / (k[2] - k[0]), h / (k[3] - k[1]));
  return (
    <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h + (etiket ? 54 : 0), opacity: a,
      transform: `scale(${sc}) rotate(${don}deg)`, background: RENK.kagitAcik, padding: 10, borderRadius: 14,
      boxShadow: "0 16px 36px rgba(48,40,34,0.28)", boxSizing: "content-box" }}>
      <div style={{ width: w, height: h, overflow: "hidden", borderRadius: 8, position: "relative" }}>
        <Img src={staticFile(`img/${gorsel}.jpg`)} style={{ position: "absolute", width: 1920 * s, height: 1080 * s,
          left: -k[0] * s, top: -k[1] * s + (h - (k[3] - k[1]) * s) / 2 }} />
      </div>
      {etiket && <div style={{ textAlign: "center", paddingTop: 12, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>{etiket}</div>}
    </div>
  );
};

/** Uzun başlığı ortasına en yakın boşluktan (noktalama sonrası tercih edilir) iki satıra böler. */
export const ikiSatir = (m: string, sinir = 14): string[] => {
  if (m.length <= sinir) return [m];
  const bosluklar = [...m.matchAll(/ /g)].map((x) => x.index!);
  if (!bosluklar.length) return [m];
  const puan = (i: number) => Math.abs(i - m.length / 2) - (/[,.:→]/.test(m[i - 1]) ? 6 : 0);
  const i = bosluklar.reduce((a, b) => (puan(b) < puan(a) ? b : a));
  return [m.slice(0, i), m.slice(i + 1)];
};

/** Bölüm kartı (kart sahneleri): solda başlık bloğu, sağda bölümden görsel kartları yelpaze gibi açılır. */
export const BolumKarti: React.FC<SP & { gorseller?: { gorsel: string; kirp?: [number, number, number, number] }[] }> = ({ t, s, gorseller = [] }) => {
  const k = s.meta.kart ?? { ust: "", baslik: "", alt: "" };
  const no = s.meta.bolumNo;
  const p = eout(ilerle(t, 0.05, 0.5));
  const pl = eout(ilerle(t, 0.3, 0.8));
  const pa = eout(ilerle(t, 0.8, 0.6));
  const ortada = gorseller.length === 0;
  const x0 = ortada ? 960 : 140;
  const satirlar = ikiSatir(k.baslik.toUpperCase());
  const enUzun = Math.max(...satirlar.map((x) => x.length));
  const boyut = Math.min(120, Math.floor((ortada ? 1500 : 900) / (enUzun * 0.5)));
  const yBaslik = 470;
  const yAlt = yBaslik + satirlar.length * boyut * 1.08 - boyut * 0.3;
  const kayma = ilerle(t, 0, s.sure + 1);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 70% at ${ortada ? 50 : 35}% 50%, #FBF8F1 0%, ${RENK.kagit} 60%, #EFE9DC 100%)` }}>
      {gorseller.map((g, i) => {
        const n = gorseller.length;
        const aci = n === 1 ? -3 : -8 + (16 * i) / (n - 1);
        const cx = 1484 + (i - (n - 1) / 2) * 165 + kayma * 16;  // sağ kart 40 px kenar payının içinde kalsın
        const cy = 500 + Math.abs(i - (n - 1) / 2) * 46 - kayma * 10;
        return <GorselKart key={i} t={t} bas={0.45 + i * 0.22} gorsel={g.gorsel} kirp={g.kirp} x={cx} y={cy} w={340} h={255} aci={aci} />;
      })}
      <div style={{ position: "absolute", left: ortada ? 0 : x0, right: ortada ? 0 : undefined, top: yBaslik - boyut * 0.65 - 150,
        textAlign: ortada ? "center" : "left", width: ortada ? undefined : 960 }}>
        {no && (
          <div style={{ display: "inline-block", opacity: p, background: RENK.altin, color: "#fff", borderRadius: 999, padding: "8px 22px",
            fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 4, marginBottom: 20, transform: `translateY(${(1 - p) * 14}px)` }}>{no}</div>
        )}
        <div style={{ opacity: p, fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 8, color: RENK.altin }}>{k.ust}</div>
        <div style={{ height: 6, width: 220 * pl, background: RENK.altin, margin: ortada ? "16px auto 0" : "16px 0 0" }} />
      </div>
      {satirlar.map((m, i) => (
        <Baslik key={i} t={t} bas={0.35 + i * 0.16} metin={m} x={x0} y={yBaslik + i * boyut * 1.08} boyut={boyut}
          renk={i === satirlar.length - 1 ? RENK.koyuYesil : RENK.lacivert} hiza={ortada ? "orta" : "sol"} />
      ))}
      <div style={{ position: "absolute", left: ortada ? 0 : x0, right: ortada ? 0 : undefined, top: yAlt, textAlign: ortada ? "center" : "left",
        width: ortada ? undefined : 900, opacity: pa, fontFamily: INTER, fontWeight: 500, fontSize: 42, lineHeight: 1.25, color: RENK.lacivert,
        transform: `translateY(${(1 - pa) * 14}px)` }}>{k.alt}</div>
    </AbsoluteFill>
  );
};

/** Şablon grafik sahnesi: başlık + alt başlık + çubuklar (her çubuk değeri söylendiğinde yükselir) + kaynak. */
const GenelGrafik: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const ilk = s.cumleler[0];
  const anlat = s.cumleler.map((c) => c.metin).join(" ").toLowerCase();
  // çubuğun sayısı anlatımda geçiyorsa o an, yoksa sırayla
  const cubuklar = g.cubuklar.map((c, i) => {
    const sayi = (c.metin.match(/\d+(?:[.,]\d+)?/) ?? [""])[0];
    const k = sayi && anlat.includes(sayi) ? s.cumleler.findIndex((x) => x.metin.includes(sayi)) : -1;
    return { ...c, renk: i % 2 ? RENK.koyuYesil : RENK.yesil, bas: k >= 0 ? K(k, sayi) - 0.05 : ilk.bas + 1.2 + i * 0.6 };
  });
  const a = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={Math.min(80, Math.floor(2600 / Math.max(10, g.baslik.length)))}
        renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34,
        color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={cubuklar[0]?.bas ?? 1} cubuklar={cubuklar} x={300} y={440} w={1320} h={360} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: aK, fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

/** Varsayılan sahne: görsel üzerinde yavaş kamera + proje.json başlık önerisi + kaynak etiketi. */
export const Genel: React.FC<SP> = ({ t, s }) => {
  const m = s.meta;
  if (m.tip === "grafik" && m.grafik) return <GenelGrafik t={t} s={s} />;
  if (!m.gorsel) return <BolumKarti t={t} s={s} />;
  const b = m.baslik;
  const pPanel = b ? eout(ilerle(t, 0.25, 0.6)) : 0;
  const ilk = s.cumleler[0];
  return (
    <>
      <Kamera gorsel={m.gorsel} pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])} />
      {b && <Panel a={pPanel} taraf="sag" />}
      {b && <BaslikBlok t={t} bas={ilk.bas + 0.4} satirlar={b.satirlar} x={1860} y={300} boyut={92} hiza="sag" />}
      {b?.vurgu && (
        <VurguRozet t={t} bas={ilk.bas + 0.9 + b.satirlar.length * 0.18} vurgu={b.vurgu} not={b.not} x={1640} y={300 + b.satirlar.length * 103 + 10}
          genislik={400} />
      )}
      {b && !b.vurgu && b.not && (
        <Not t={t} bas={ilk.bas + 1.0} metin={b.not} x={1860} y={300 + b.satirlar.length * 103 - 10} hiza="sag" genislik={560} />
      )}
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};
