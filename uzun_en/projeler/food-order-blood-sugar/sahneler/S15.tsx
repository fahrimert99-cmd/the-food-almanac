// Sahne 15 — aynı öğün, ters sıra: 1. gün ekmek+meyve suyu önce, 2. gün tavuk+sebze önce; araya 15 dakika.
import React from "react";
import { BaslikBlok, INTER, Kamera, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Saat (görsel koordinatı): kadranın sahte Roma rakamları temiz kadranla örtülür
const SX = 420, SY = 346;
const aci = (derece: number, r: number): [number, number] => {
  const a = ((derece - 90) * Math.PI) / 180;
  return [SX + r * Math.cos(a), SY + r * Math.sin(a)];
};
const dilim = (bitis: number, r: number) => {
  if (bitis <= 0.5) return "";
  const [x1, y1] = aci(0, r), [x2, y2] = aci(bitis, r);
  return `M ${SX} ${SY} L ${x1} ${y1} A ${r} ${r} 0 ${bitis > 180 ? 1 : 0} 1 ${x2} ${y2} Z`;
};

// Sıra hapı: numara dairesi + metin; numara ters çevrilerek değişir. x,y = merkez (görsel koordinatı)
const SiraHapi: React.FC<{
  t: number; bas: number; metin: string; renk: string; x: number; y: number; no1: number; no2: number; tDon: number; vurgu: number[];
}> = ({ t, bas, metin, renk, x, y, no1, no2, tDon, vurgu }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  const p = einout(ilerle(t, tDon, 0.5));
  const no = p < 0.5 ? no1 : no2;
  const nabiz = vurgu.reduce((a, v) => a + Math.sin(Math.PI * ilerle(t, v, 0.5)) * 0.08, 0);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc * (1 + nabiz)})`, opacity: al,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`,
      borderRadius: 999, padding: "8px 28px 8px 9px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, color: "#fff", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 28, transform: `scaleX(${Math.abs(Math.cos(Math.PI * p))})` }}>{no}</span>
      {metin}
    </div>
  );
};

// Gün satırı: lacivert gün hapı + renkli sıra hapı (S02 ile aynı dil)
const GunSatiri: React.FC<{ t: number; bas: number; bas2: number; bitis?: number; gun: string; etiket: string; renk: string }> = ({
  t, bas, bas2, bitis = 1e9, gun, etiket, renk,
}) => {
  const [sd, ad] = pop(t, bas, 0.5);
  const [se, ae] = pop(t, bas2, 0.5);
  const a = sol(t, bitis, 0.35);
  if (ad <= 0 || a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1100, top: 150, transform: "translateY(-50%)", display: "flex", gap: 16, alignItems: "center", opacity: a }}>
      <div style={{ transform: `scale(${sd})`, opacity: ad, background: RENK.lacivert, color: "#fff", borderRadius: 12, padding: "6px 20px",
        fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 6, whiteSpace: "nowrap" }}>{gun}</div>
      <div style={{ transform: `scale(${se})`, opacity: ae, background: renk, color: "#fff", borderRadius: 999, padding: "9px 22px",
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, whiteSpace: "nowrap" }}>{etiket}</div>
    </div>
  );
};

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t15a = K(0, "fifteen minutes"), tSonra = K(0, "later"), t15b = K(1, "fifteen minutes");
  const tDiger = K(1, "other day"), tTers = K(1, "reversed");
  // saat: 15 dakikalık tarama, 2. günde geri sarılır ve yeniden taranır
  const tarama1 = einout(ilerle(t, t15a, 1.3)) * (1 - einout(ilerle(t, tDiger, 0.7)));
  const tarama2 = einout(ilerle(t, t15b, 1.1));
  const dk = 90 * (tarama1 + tarama2);
  const aDilim = Math.max(eout(ilerle(t, t15a, 0.4)) * sol(t, tDiger, 0.5), eout(ilerle(t, t15b, 0.4)));
  // ok: 1. gün sağa (ekmek -> tavuk), 2. gün sola
  const pOk1 = eout(ilerle(t, tSonra - 0.1, 0.6)) * sol(t, tTers - 0.05, 0.3);
  const pOk2 = eout(ilerle(t, tTers + 0.25, 0.6));
  const ok = (p: number, sag: boolean) => {
    if (p <= 0) return null;
    const x0 = sag ? 852 : 1062, x1 = sag ? 1062 : 852, y = 912, yon = sag ? 1 : -1;
    const xu = x0 + (x1 - x0) * p;
    return (
      <g opacity={Math.min(1, p * 2)}>
        <line x1={x0} y1={y} x2={xu - yon * 22} y2={y} stroke={RENK.murekkep} strokeWidth={9} strokeDasharray="20 13" />
        <polygon points={`${xu},${y} ${xu - yon * 34},${y - 22} ${xu - yon * 34},${y + 22}`} fill={RENK.murekkep} />
      </g>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        {/* görseldeki sola bakan ok ve sol alttaki imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 846, top: 880, width: 220, height: 68, borderRadius: 26, background: "#FAFBE3", filter: "blur(5px)" }} />
        <div style={{ position: "absolute", left: 178, top: 1020, width: 40, height: 38, borderRadius: 19, background: "#FBF2D0", filter: "blur(4px)" }} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <radialGradient id="s15-kadran">
              <stop offset="0" stopColor="#FDF8D5" />
              <stop offset="0.85" stopColor="#FBF4CF" />
              <stop offset="1" stopColor="#F1E9C3" />
            </radialGradient>
          </defs>
          {/* temiz kadran: rakamsız saat çizgileri */}
          <circle cx={SX} cy={SY} r={189} fill="url(#s15-kadran)" />
          {Array.from({ length: 12 }, (_, k) => {
            const [xa, ya] = aci(k * 30, k % 3 ? 160 : 146), [xb, yb] = aci(k * 30, 178);
            return <line key={k} x1={xa} y1={ya} x2={xb} y2={yb} stroke="#2A2218" strokeWidth={k % 3 ? 5 : 9} strokeLinecap="round" />;
          })}
          {aDilim > 0 && <path d={dilim(dk, 168)} fill={RENK.altin} opacity={0.38 * aDilim} />}
          {aDilim > 0 && dk > 1 && (() => {
            const [xa, ya] = aci(0, 168), [xb, yb] = aci(dk, 168);
            return (
              <g opacity={aDilim}>
                <line x1={SX} y1={SY} x2={xa} y2={ya} stroke={RENK.altin} strokeWidth={4} />
                <path d={`M ${xa} ${ya} A 168 168 0 0 1 ${xb} ${yb}`} fill="none" stroke={RENK.altin} strokeWidth={7} strokeLinecap="round" />
              </g>
            );
          })()}
          {/* akrep (10 civarı) ve yelkovan */}
          {(() => {
            const [hx, hy] = aci(300 + dk / 12, 92), [mx, my] = aci(dk, 150);
            return (
              <g>
                <line x1={SX} y1={SY} x2={hx} y2={hy} stroke="#1C1712" strokeWidth={13} strokeLinecap="round" />
                <line x1={SX} y1={SY} x2={mx} y2={my} stroke="#1C1712" strokeWidth={8} strokeLinecap="round" />
                <circle cx={SX} cy={SY} r={15} fill="#1C1712" />
                <circle cx={SX} cy={SY} r={6} fill={RENK.altin} />
              </g>
            );
          })()}
          {ok(pOk1, true)}
          {ok(pOk2, false)}
        </svg>
        {/* tabak hapları: numaralar 2. günde yer değiştirir */}
        <SiraHapi t={t} bas={K(0, "bread and juice first")} metin="BREAD + JUICE" renk={RENK.mercan} x={430} y={688} no1={1} no2={2}
          tDon={tTers} vurgu={[K(1, "bread and juice")]} />
        <SiraHapi t={t} bas={K(0, "the chicken and vegetables")} metin="CHICKEN + VEG" renk={RENK.yesil} x={1420} y={688} no1={2} no2={1}
          tDon={tTers} vurgu={[K(1, "chicken and vegetables first")]} />
        <VurguRozet t={t} bas={t15a} vurgu="15 MIN" not="between the two courses" x={995} y={575} genislik={380} boyut={84} />
      </Kamera>
      {/* sağ sayfa: gün + başlık */}
      <GunSatiri t={t} bas={0.05} bas2={K(0, "first")} bitis={tDiger - 0.2} gun="DAY 1" etiket="CARBS FIRST" renk={RENK.mercan} />
      <GunSatiri t={t} bas={tDiger} bas2={K(1, "vegetables first")} gun="DAY 2" etiket="VEG + PROTEIN FIRST" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(0, "they ate")} satirlar={["SAME MEAL,"]} x={1100} y={300} boyut={104} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tTers} satirlar={["REVERSED"]} x={1100} y={300 + 104 * 1.1} boyut={104} renkler={[RENK.koyuYesil]} />
    </>
  );
};

export default S15;
