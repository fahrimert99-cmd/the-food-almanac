// Sahne 22 — 2017 sonucu: karbonhidrat sonda ≈ yarı yükselme; sandviç arada.
// Düzen: solda başlık + ≈ HALF rozeti, ortada görseldeki tüpler, sağda temsili üç çubuk (ILLUSTRATIVE, sayısız).
import React from "react";
import { Baslik, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// sağ sütundaki temsili grafik (ekran koordinatı)
const X0 = 1372, X1 = 1860, YB = 800, H = 470;
const CUBUK_W = 104;

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const b = m.baslik;
  const tKarb = K(0, "carbohydrates"), tSon = K(0, "last");
  const tEksen = K(0, "produced"), tYari = K(0, "roughly half"), tHalf = K(0, "half");
  const tIlk = K(0, "eating them first"), tFirst = K(0, "first.");
  const tSand = K(1, "sandwich"), tArada = K(1, "in between");
  // çubuklar: oranlar temsilidir (yalnızca "≈ yarı" ve "arada" ilişkisini gösterir)
  const cubuklar = [
    { x: 1450, oran: 1, renk: RENK.mercan, ad: ["CARBS", "FIRST"], bas: tIlk },
    { x: 1620, oran: 0.76, renk: RENK.altin, ad: ["SANDWICH"], bas: tSand },
    { x: 1790, oran: 0.5, renk: RENK.yesil, ad: ["CARBS", "LAST"], bas: tYari },
  ];
  const aE = eout(ilerle(t, tEksen, 0.5));
  const yTepe = YB - H;
  const pRef = eout(ilerle(t, tIlk + 0.75, 0.6));
  const [sYari, aYari] = pop(t, tFirst, 0.5);
  const [sArada, aArada] = pop(t, tArada, 0.5);
  const yLast = YB - H * 0.5, ySand = YB - H * 0.76;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 18, 1860])} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
      {/* sol sütun: başlık + vurgu rozeti */}
      <Baslik t={t} bas={tKarb - 0.05} metin={b?.satirlar[0] ?? "CARBS"} x={80} y={292} boyut={132} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSon - 0.1} metin={b?.satirlar[1] ?? "LAST"} x={80} y={440} boyut={132} renk={RENK.koyuYesil} />
      {b?.vurgu && <VurguRozet t={t} bas={tHalf - 0.05} vurgu={b.vurgu} not={b.not} x={262} y={548} genislik={372} boyut={100} />}
      {/* sağ sütun: temsili çubuklar (hafif kâğıt kartı zemin) */}
      <div style={{ position: "absolute", left: X0 - 22, top: 168, width: X1 - X0 + 44, height: YB - 168 + 96, borderRadius: 26,
        background: RENK.kagitAcik, opacity: 0.82 * aE }} />
      <div style={{ position: "absolute", left: X0, top: 190, width: X1 - X0, opacity: aE, display: "flex", alignItems: "center",
        justifyContent: "space-between", transform: `translateY(${(1 - aE) * 10}px)` }}>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>BLOOD SUGAR RISE</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 18, letterSpacing: 2, color: RENK.altin, border: `2.5px solid ${RENK.altin}`,
          background: "#FCF6E6", borderRadius: 999, padding: "4px 12px" }}>ILLUSTRATIVE</span>
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {/* eksen */}
        {aE > 0.02 && <line x1={X0 - 4} x2={X0 - 4 + (X1 - X0 + 8) * aE} y1={YB} y2={YB} stroke={RENK.murekkep} strokeWidth={4} strokeLinecap="round" />}
        {cubuklar.map((c, i) => {
          const p = eout(ilerle(t, c.bas, 0.9));
          const h = H * c.oran * p;
          return p > 0 ? (
            <g key={i}>
              <rect x={c.x - CUBUK_W / 2} y={YB - h} width={CUBUK_W} height={h} rx={10} fill={c.renk} />
              <rect x={c.x - CUBUK_W / 2} y={YB - h} width={CUBUK_W * 0.18} height={h} rx={6} fill="#fff" opacity={0.18} />
            </g>
          ) : null;
        })}
        {/* "ilk"e göre referans: tam yükseklik kesikli çizgi + son çubukta boş yarı */}
        {pRef > 0 && (
          <g opacity={pRef}>
            <line x1={1450 + CUBUK_W / 2} x2={1450 + CUBUK_W / 2 + (1790 + CUBUK_W / 2 - 1450 - CUBUK_W / 2) * pRef} y1={yTepe} y2={yTepe}
              stroke={RENK.murekkep} strokeOpacity={0.55} strokeWidth={3} strokeDasharray="10 9" />
            <rect x={1790 - CUBUK_W / 2 + 2} y={yTepe + 2} width={CUBUK_W - 4} height={(yLast - yTepe - 4) * pRef} rx={10} fill="none"
              stroke={RENK.yesil} strokeWidth={3.5} strokeDasharray="9 8" />
          </g>
        )}
      </svg>
      {/* çubuk adları */}
      {cubuklar.map((c, i) => {
        const a = eout(ilerle(t, c.bas - 0.1, 0.4));
        return (
          <div key={i} style={{ position: "absolute", left: c.x, top: YB + 14, transform: "translateX(-50%)", opacity: a, textAlign: "center",
            fontFamily: INTER, fontWeight: 800, fontSize: 22, lineHeight: 1.15, letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>
            {c.ad.map((x) => <div key={x}>{x}</div>)}
          </div>
        );
      })}
      {/* çubuk üstü notlar */}
      <div style={{ position: "absolute", left: 1790, top: yLast - 54, transform: `translate(-50%, 0) scale(${sYari})`, transformOrigin: "50% 100%",
        opacity: aYari, background: RENK.yesil, color: "#fff", borderRadius: 999, padding: "5px 14px", fontFamily: INTER, fontWeight: 800,
        fontSize: 22, letterSpacing: 1, whiteSpace: "nowrap", boxShadow: "0 6px 14px rgba(48,40,34,0.18)" }}>≈ HALF</div>
      <div style={{ position: "absolute", left: 1620, top: ySand - 56, transform: `translate(-50%, 0) scale(${sArada})`, transformOrigin: "50% 100%",
        opacity: aArada, background: RENK.altin, color: "#fff", borderRadius: 999, padding: "5px 14px", fontFamily: INTER, fontWeight: 800,
        fontSize: 22, letterSpacing: 1, whiteSpace: "nowrap", boxShadow: "0 6px 14px rgba(48,40,34,0.18)" }}>IN BETWEEN</div>
    </>
  );
};

export default S22;
