// Ortak parçalar: kamera (Ken Burns), çizilen kesikli etiket çizgileri, kinetik başlıklar, altyazı.
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { ANTON, INTER } from "./fontlar";
import marka from "./marka.gen.json";
import { Parca, RENK, eout, ilerle, pop, sol } from "./zaman";

const KAGIT_RGB = "246,243,236";
export const kagit = (a: number) => `rgba(${KAGIT_RGB},${a})`;

export type Pencere = [number, number, number]; // görselde görünen alan: sol, üst, genişlik (16:9)
export const pencereAra = (a: Pencere, b: Pencere, p: number): Pencere =>
  [a[0] + (b[0] - a[0]) * p, a[1] + (b[1] - a[1]) * p, a[2] + (b[2] - a[2]) * p];

/** Görsel + görsel koordinatlarında çizilen katmanlar; pencere değiştikçe hepsi birlikte hareket eder. */
/** Pencereyi görselin içinde tutar (kenar dışı boşluk görünmesin). */
export const pencereSinirla = ([x, y, w]: Pencere): Pencere => {
  const g = Math.min(1920, Math.max(200, w));
  return [Math.min(Math.max(0, x), 1920 - g), Math.min(Math.max(0, y), 1080 - (g * 9) / 16), g];
};

export const Kamera: React.FC<{
  gorsel: string; pencere: Pencere; children?: React.ReactNode; filtre?: string; sinirla?: boolean;
}> = ({ gorsel, pencere, children, filtre, sinirla = true }) => {
  const [x, y, w] = sinirla ? pencereSinirla(pencere) : pencere;
  const s = 1920 / w;
  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: RENK.kagit }}>
      <div style={{
        position: "absolute", left: 0, top: 0, width: 1920, height: 1080,
        transformOrigin: "0 0", transform: `scale(${s}) translate(${-x}px, ${-y}px)`,
      }}>
        <Img src={staticFile(`img/${gorsel}.jpg`)} style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, filter: filtre }} />
        {children}
      </div>
    </AbsoluteFill>
  );
};

export const Hap: React.FC<{ metin: string; renk: string; boyut?: number; style?: React.CSSProperties }> = ({
  metin, renk, boyut = 28, style,
}) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
    background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 999,
    padding: `${boyut * 0.32}px ${boyut * 0.85}px ${boyut * 0.32}px ${boyut * 0.6}px`,
    fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 2, color: RENK.murekkep,
    boxShadow: "0 8px 22px rgba(48,40,34,0.20)", ...style,
  }}>
    <span style={{ width: boyut * 0.5, height: boyut * 0.5, borderRadius: "50%", background: renk, flex: "none" }} />
    {metin}
  </div>
);

/** Yiyeceğe işaret eden etiket: halka nabzı, kesikli çizgi çizilir, hap yaylanarak belirir. */
export const Etiket: React.FC<{
  t: number; bas: number; bitis?: number; capa: [number, number]; konum: [number, number];
  metin: string; renk: string; boyut?: number;
}> = ({ t, bas, bitis = 1e9, capa, konum, metin, renk, boyut = 28 }) => {
  if (t < bas) return null;
  const a = sol(t, bitis);
  if (a <= 0) return null;
  const [ax, ay] = capa, [lx, ly] = konum;
  const pl = eout(ilerle(t, bas + 0.1, 0.45));
  const ex = ax + (lx - ax) * pl, ey = ay + (ly - ay) * pl;
  const halka = ilerle(t, bas, 1.0);
  const [ds] = pop(t, bas, 0.4);
  const [sc, al] = pop(t, bas + 0.38, 0.5);
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a, overflow: "visible" }}>
        <line x1={ax} y1={ay} x2={ex} y2={ey} stroke={RENK.kagitAcik} strokeWidth={9} strokeLinecap="round" opacity={0.9} />
        <line x1={ax} y1={ay} x2={ex} y2={ey} stroke={RENK.murekkep} strokeWidth={3.5} strokeDasharray="12 9" />
        <circle cx={ax} cy={ay} r={12 + 30 * halka} fill="none" stroke={renk} strokeWidth={4} opacity={(1 - halka) * 0.9} />
        <circle cx={ax} cy={ay} r={14 * ds} fill={RENK.kagitAcik} stroke={RENK.murekkep} strokeWidth={3} />
        <circle cx={ax} cy={ay} r={7 * ds} fill={renk} />
      </svg>
      <div style={{ position: "absolute", left: lx, top: ly, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * a }}>
        <Hap metin={metin} renk={renk} boyut={boyut} />
      </div>
    </>
  );
};

/** Kinetik başlık: metin maskeden yukarı kayarak girer. y = satır ortası. */
export const Baslik: React.FC<{
  t: number; bas: number; bitis?: number; metin: string; x: number; y: number; boyut: number; renk: string;
  hiza?: "sol" | "orta" | "sag"; font?: "anton" | "inter"; agirlik?: number; aralik?: number; style?: React.CSSProperties;
}> = ({ t, bas, bitis = 1e9, metin, x, y, boyut, renk, hiza = "sol", font = "anton", agirlik, aralik = 0, style }) => {
  if (t < bas) return null;
  const p = eout(ilerle(t, bas, 0.5));
  const a = sol(t, bitis);
  if (a <= 0) return null;
  const yuk = boyut * 1.3;
  const konum: React.CSSProperties = hiza === "sol" ? { left: x } : hiza === "sag" ? { right: 1920 - x } : { left: x, transform: "translateX(-50%)" };
  return (
    <div style={{ position: "absolute", top: y - yuk / 2, height: yuk, overflow: "hidden", opacity: a, ...konum }}>
      <div style={{
        fontFamily: font === "anton" ? ANTON : INTER, fontWeight: agirlik ?? (font === "anton" ? 400 : 800),
        fontSize: boyut, lineHeight: `${yuk}px`, color: renk, whiteSpace: "nowrap", letterSpacing: aralik,
        transform: `translateY(${(1 - p) * 100}%)`, opacity: Math.min(1, p * 1.5), ...style,
      }}>{metin}</div>
    </div>
  );
};

/** Altyazı: o an söylenen kelime altın renkte. Kontur için alt katman + üst katman. */
export const Altyazi: React.FC<{ t: number; parcalar: Parca[] }> = ({ t, parcalar }) => {
  const p = parcalar.find((a) => a.t0 <= t && t < a.t1);
  if (!p) return null;
  let aktif = -1;
  p.kelimeler.forEach((k, i) => { if (t >= k.t - 0.03) aktif = i; });
  const kat = (kontur: boolean) => (
    <div style={{
      position: "absolute", left: 0, right: 0, bottom: 42, textAlign: "center",
      fontFamily: INTER, fontWeight: 800, fontSize: 50, lineHeight: 1.2, letterSpacing: 0.3, wordSpacing: 9,
      WebkitTextStroke: kontur ? "11px #181614" : undefined,
    }}>
      {p.kelimeler.map((k, i) => (
        <span key={i} style={{ color: kontur ? "#181614" : i === aktif ? "#F5C451" : "#FFFFFF" }}>
          {k.w}{i < p.kelimeler.length - 1 ? " " : ""}
        </span>
      ))}
    </div>
  );
  return <>{kat(true)}{kat(false)}</>;
};

export const Filigran: React.FC<{ a?: number }> = ({ a = 1 }) => (
  <div style={{
    position: "absolute", right: 40, top: 36, padding: "8px 18px", borderRadius: 999, background: kagit(0.82),
    fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 4, color: RENK.lacivert, opacity: 0.75 * a,
  }}>{marka.filigran}</div>
);

/** Alt kenarda kâğıt rengine yumuşak geçiş (altyazı okunurluğu, görsel kenar artıkları). */
export const AltSis: React.FC<{ a?: number; yukseklik?: number }> = ({ a = 0.85, yukseklik = 170 }) => (
  <div style={{
    position: "absolute", left: 0, right: 0, bottom: 0, height: yukseklik,
    background: `linear-gradient(to bottom, ${kagit(0)}, ${kagit(a)})`,
  }} />
);
