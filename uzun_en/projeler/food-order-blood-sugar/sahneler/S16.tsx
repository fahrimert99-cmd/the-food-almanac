// Sahne 16 — kan örnekleri: yemekten önce ve iki saat boyunca aralıklarla; glukoz ve insülin izlenir.
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Zaman çizgisi (ekran koordinatı): yemek öncesi örnek + yemekten sonra eşit aralıklı örnekler (etiketsiz)
const Y = 262, X_ONCE = 240, X_YEMEK = 390, X_SON = 1650;
const SONRA = [1, 2, 3, 4].map((k) => X_YEMEK + ((X_SON - X_YEMEK) * k) / 4);

// Damla: x,y = gövde merkezi
const damla = (x: number, y: number, r: number) =>
  `M ${x} ${y - r * 1.75} C ${x + r * 0.25} ${y - r * 1.05} ${x + r} ${y - r * 0.55} ${x + r} ${y + r * 0.05} ` +
  `A ${r} ${r} 0 0 1 ${x - r} ${y + r * 0.05} C ${x - r} ${y - r * 0.55} ${x - r * 0.25} ${y - r * 1.05} ${x} ${y - r * 1.75} Z`;

// Zamanlayıcı kadranı (görsel koordinatı): sahte yazılar temiz kadranla örtülür
const KX = 1693, KY = 837;
const nokta = (derece: number, r: number): [number, number] => {
  const a = ((derece - 90) * Math.PI) / 180;
  return [KX + r * Math.cos(a), KY + r * Math.sin(a)];
};

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOnce = K(0, "before the meal"), tYemek = K(0, "meal"), tAralik = K(0, "intervals"), tSaat = K(0, "two hours");
  const tIzle = K(0, "track"), tGlu = K(0, "glucose"), tIns = K(0, "insulin");
  const pEksen = eout(ilerle(t, tOnce - 0.1, tSaat + 0.3 - tOnce));
  const xEksen = X_ONCE - 40 + (X_SON + 50 - (X_ONCE - 40)) * pEksen;
  const ornekler = [
    { x: X_ONCE, bas: tOnce },
    ...SONRA.map((x, k) => ({ x, bas: tAralik + k * 0.24 })),
  ];
  const [smY, amY] = pop(t, tYemek, 0.45);
  const aOnce = eout(ilerle(t, tOnce + 0.1, 0.5));
  const [s2, a2] = pop(t, tSaat, 0.5);
  const aIzle = eout(ilerle(t, tIzle, 0.5));
  // zamanlayıcı: örnekleme boyunca yelkovan iki tur, akrep iki saat (60°) ilerler
  const pSaat = eout(ilerle(t, tOnce, tSaat + 0.6 - tOnce));
  const [mx, my] = nokta(720 * pSaat, 64), [hx, hy] = nokta(60 * pSaat, 42);
  const hap = (bas: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 30px 8px 9px", fontFamily: INTER,
        fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        <span style={{ width: 48, height: 48, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={32} renk="#fff" />
        </span>
        {metin}
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 50, 1820])}>
        {/* defterdeki sahte el yazıları: sayfa rengi yama */}
        <div style={{ position: "absolute", left: 890, top: 810, width: 58, height: 22, borderRadius: 8, background: "#FCFADE", filter: "blur(2px)" }} />
        <div style={{ position: "absolute", left: 1324, top: 794, width: 56, height: 22, borderRadius: 8, background: "#FCFADD", filter: "blur(2px)" }} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <linearGradient id="s16-kadran" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFEBBF" />
              <stop offset="1" stopColor="#E9D1AD" />
            </linearGradient>
          </defs>
          {/* zamanlayıcının sahte rakamları: temiz kadran + dönen ibreler */}
          <circle cx={KX} cy={KY} r={83} fill="url(#s16-kadran)" />
          {Array.from({ length: 12 }, (_, k) => {
            const [xa, ya] = nokta(k * 30, k % 3 ? 68 : 62), [xb, yb] = nokta(k * 30, 78);
            return <line key={k} x1={xa} y1={ya} x2={xb} y2={yb} stroke="#2E2A26" strokeWidth={k % 3 ? 3 : 5} strokeLinecap="round" />;
          })}
          <line x1={KX} y1={KY} x2={hx} y2={hy} stroke="#2E2A26" strokeWidth={7} strokeLinecap="round" />
          <line x1={KX} y1={KY} x2={mx} y2={my} stroke="#2E2A26" strokeWidth={4.5} strokeLinecap="round" />
          <circle cx={KX} cy={KY} r={8} fill="#2E2A26" />
          <circle cx={KX} cy={KY} r={3} fill={RENK.altin} />
        </svg>
        <Etiket t={t} bas={0.05} capa={[392, 790]} konum={[392, 452]} metin="BLOOD SAMPLES" renk={RENK.mercan} />
      </Kamera>
      {/* örnekleme zaman çizgisi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pEksen > 0 && (
          <g>
            <line x1={X_ONCE - 40} y1={Y} x2={xEksen} y2={Y} stroke={RENK.lacivert} strokeWidth={7} strokeLinecap="round" />
            <polygon points={`${xEksen + 24},${Y} ${xEksen - 4},${Y - 17} ${xEksen - 4},${Y + 17}`} fill={RENK.lacivert} />
          </g>
        )}
        {amY > 0 && (
          <g opacity={amY}>
            <line x1={X_YEMEK} y1={Y - 58} x2={X_YEMEK} y2={Y + 36} stroke={RENK.altin} strokeWidth={5} strokeDasharray="10 8" />
          </g>
        )}
        {ornekler.map((o, i) => {
          const [sc, al] = pop(t, o.bas, 0.5);
          if (al <= 0) return null;
          return (
            <g key={i} opacity={al} transform={`translate(${o.x} ${Y - 10}) scale(${sc}) translate(${-o.x} ${-(Y - 10)})`}>
              <path d={damla(o.x, Y - 10, 26)} fill={RENK.mercan} stroke={RENK.kagitAcik} strokeWidth={5} />
              <ellipse cx={o.x - 8} cy={Y - 14} rx={5} ry={8} fill="#fff" opacity={0.45} />
            </g>
          );
        })}
      </svg>
      {/* etiketler */}
      <div style={{ position: "absolute", left: X_YEMEK, top: Y - 92, transform: `translate(-50%, -50%) scale(${smY})`, opacity: amY,
        background: RENK.altin, color: "#fff", borderRadius: 999, padding: "7px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 4, boxShadow: "0 6px 16px rgba(48,40,34,0.18)" }}>MEAL</div>
      <div style={{ position: "absolute", left: X_ONCE, top: Y + 46, transform: `translate(-50%, ${(1 - aOnce) * 10}px)`, opacity: aOnce,
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap", textAlign: "center",
        lineHeight: 1.15 }}>BEFORE<br />THE MEAL</div>
      <div style={{ position: "absolute", left: X_SON, top: Y + 36, transform: `translate(-50%, 0) scale(${s2})`, transformOrigin: "50% 0",
        opacity: a2, fontFamily: ANTON, fontSize: 64, lineHeight: 1.1, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>2 HOURS</div>
      {/* izlenen: glukoz + insülin */}
      <div style={{ position: "absolute", left: 1040, top: 452, transform: "translate(-50%, -50%)", display: "flex", alignItems: "center", gap: 26 }}>
        <div style={{ opacity: aIzle, transform: `translateX(${(1 - aIzle) * -16}px)`, fontFamily: INTER, fontWeight: 800, fontSize: 26,
          letterSpacing: 6, color: RENK.altin, whiteSpace: "nowrap" }}>TRACKED</div>
        {hap(tGlu, "GLUCOSE", RENK.altin)}
        {hap(tIns, "INSULIN", RENK.yesil)}
      </div>
    </>
  );
};

export default S16;
