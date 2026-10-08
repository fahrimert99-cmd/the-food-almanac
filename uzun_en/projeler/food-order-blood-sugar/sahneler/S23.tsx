// Sahne 23 — 2019, prediyabet: aynı desen. Gökyüzü boşluğunda önce künye, sonra temsili iki eğri
// (karbonhidrat sonda = daha alçak, daha düz). Aşağıdaki yumuşak tepeler "düz eğri"yi yankılar.
import React from "react";
import { Baslik, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, egriDeger, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// temsili eğriler (100 = yemek öncesi); sayı ekranda yok
const ILK: [number, number][] = [[0, 100], [15, 152], [30, 196], [45, 210], [60, 201], [75, 182], [90, 163], [105, 150], [120, 141]];
const SON: [number, number][] = [[0, 100], [15, 114], [30, 129], [45, 139], [60, 143], [75, 142], [90, 138], [105, 133], [120, 128]];

// grafik alanı (ekran koordinatı)
const X0 = 430, X1 = 1390, YT = 165, YB = 464, VMIN = 92, VMAX = 218;
const xs = (m: number) => X0 + (m / 120) * (X1 - X0);
const ys = (v: number) => YB - ((v - VMIN) / (VMAX - VMIN)) * (YB - YT);

const yol = (pts: [number, number][], son: number) => {
  const out: string[] = [];
  for (let i = 0; i <= 96; i++) {
    const m = Math.min(son, (120 * i) / 96);
    out.push(`${xs(m).toFixed(1)},${ys(egriDeger(pts, m)).toFixed(1)}`);
    if (m >= son) break;
  }
  return out.join(" ");
};

const Hap: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; dolu?: boolean }> = ({
  t, bas, metin, renk, x, y, dolu = true,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
      background: dolu ? renk : RENK.kagitAcik, color: dolu ? "#fff" : renk, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "5px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, boxShadow: "0 6px 16px rgba(48,40,34,0.18)" }}>
      {metin}
    </div>
  );
};

// Üst satır (ortalı): parçalar kendi kelimesinde maskeden kayarak girer
const Kunye: React.FC<{ t: number; parcalar: { metin: string; bas: number }[]; bitis: number }> = ({ t, parcalar, bitis }) => {
  const a = 1 - eout(ilerle(t, bitis, 0.4));
  if (a <= 0 || t < parcalar[0].bas) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: 160, transform: "translate(-50%, -50%)", opacity: a, display: "flex", gap: 16,
      fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 7, color: RENK.altin, whiteSpace: "nowrap" }}>
      {parcalar.map((p) => {
        const q = eout(ilerle(t, p.bas, 0.5));
        return (
          <span key={p.metin} style={{ display: "inline-block", overflow: "hidden", height: 44, lineHeight: "44px" }}>
            <span style={{ display: "inline-block", transform: `translateY(${(1 - q) * 100}%)`, opacity: Math.min(1, q * 1.5) }}>{p.metin}</span>
          </span>
        );
      })}
    </div>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const m = s.meta;
  const tYil = K(0, "2019"), tBenzer = K(0, "similar study"), tYetiskin = K(0, "adults"), tDesen = K(0, "same pattern");
  const tKarb = K(1, "carbohydrates last"), tSon = K(1, "last"), tAlcak = K(1, "lower"), tDuz = K(1, "flatter");
  const cikis = c[1].bas - 0.35;
  const aG = eout(ilerle(t, tKarb - 0.15, 0.5));
  const pIlk = einoutYumusak(ilerle(t, tKarb, 1.5));
  const pSon = einoutYumusak(ilerle(t, tSon, 1.6));
  const pOk = eout(ilerle(t, tAlcak, 0.55));
  const vurguDuz = kis(1 - Math.abs(t - tDuz - 0.45) / 0.6);
  const yIlk45 = ys(egriDeger(ILK, 45)), ySon45 = ys(egriDeger(SON, 45));
  const aAd = (bas: number) => eout(ilerle(t, bas, 0.4));
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 10, 1810])} />
      {/* gökyüzü boşluğunda tepelerin ucunu yumuşakça soldur (yazı ve grafik zemini) */}
      <div style={{ position: "absolute", left: 0, top: 0, right: 0, height: 640,
        background: `radial-gradient(ellipse 52% 72% at 50% 34%, ${kagit(0.9)} 0%, ${kagit(0.8)} 55%, ${kagit(0)} 100%)` }} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}

      {/* 1. cümle: künye */}
      <Kunye t={t} parcalar={[{ metin: "2019", bas: tYil - 0.1 }, { metin: "· A SIMILAR STUDY", bas: tBenzer - 0.1 }]} bitis={cikis} />
      <Baslik t={t} bas={tYetiskin - 0.1} bitis={cikis} metin="ADULTS WITH PREDIABETES" x={960} y={256} boyut={88} renk={RENK.lacivert}
        hiza="orta" />
      <Baslik t={t} bas={tDesen - 0.1} bitis={cikis} metin="SAME PATTERN" x={960} y={364} boyut={88} renk={RENK.koyuYesil} hiza="orta" />

      {/* 2. cümle: temsili eğriler */}
      {aG > 0 && (
        <>
          <div style={{ position: "absolute", right: 1920 - X1, top: 96, opacity: aG, display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.lacivert }}>BLOOD SUGAR AFTER THE MEAL</span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 18, letterSpacing: 2, color: RENK.altin, border: `2.5px solid ${RENK.altin}`,
              background: "#FCF6E6", borderRadius: 999, padding: "4px 12px" }}>ILLUSTRATIVE</span>
          </div>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <defs>
              <filter id="s23-golge" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#302822" floodOpacity="0.22" />
              </filter>
            </defs>
            <g opacity={aG}>
              <polyline points={`${X0},${YT - 14} ${X0},${YB} ${X1 + 16},${YB}`} fill="none" stroke={RENK.murekkep} strokeWidth={4} />
              <line x1={X0} x2={X1} y1={ys(100)} y2={ys(100)} stroke="#787882" strokeOpacity={0.8} strokeWidth={2.5} strokeDasharray="10 10" />
              <text x={X0 - 18} y={(YT + YB) / 2} transform={`rotate(-90 ${X0 - 18} ${(YT + YB) / 2})`} textAnchor="middle"
                style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.lacivert }}>glucose</text>
              <text x={X1} y={YB + 34} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.lacivert }}>time →</text>
            </g>
            {/* karbonhidrat önce: referans (ince) */}
            {pIlk > 0 && (
              <polyline points={yol(ILK, 120 * pIlk)} fill="none" stroke={RENK.mercan} strokeWidth={7} strokeLinecap="round"
                strokeLinejoin="round" opacity={0.85} />
            )}
            {/* karbonhidrat sonda: ana eğri */}
            {pSon > 0 && (
              <>
                {vurguDuz > 0 && (
                  <polyline points={yol(SON, 120 * pSon)} fill="none" stroke={RENK.yesil} strokeWidth={11 + 16 * vurguDuz} strokeLinecap="round"
                    strokeLinejoin="round" opacity={0.25 * vurguDuz} />
                )}
                <polyline points={yol(SON, 120 * pSon)} fill="none" stroke={RENK.yesil} strokeWidth={11} strokeLinecap="round"
                  strokeLinejoin="round" filter="url(#s23-golge)" />
                {pSon < 1 && <circle cx={xs(120 * pSon)} cy={ys(egriDeger(SON, 120 * pSon))} r={12} fill={RENK.yesil} stroke="#fff" strokeWidth={4} />}
              </>
            )}
            {/* "lower": tepeden tepeye ok */}
            {pOk > 0 && (
              <g opacity={pOk}>
                <line x1={xs(45)} x2={xs(45)} y1={yIlk45 + 14} y2={yIlk45 + 14 + (ySon45 - 34 - yIlk45 - 14) * pOk} stroke={RENK.altin}
                  strokeWidth={7} strokeLinecap="round" />
                <polygon points={`${xs(45) - 14},${ySon45 - 36} ${xs(45) + 14},${ySon45 - 36} ${xs(45)},${ySon45 - 16}`} fill={RENK.altin}
                  opacity={kis(pOk * 2 - 1)} />
              </g>
            )}
          </svg>
          {/* eğri adları (sağ uçta) */}
          <div style={{ position: "absolute", left: X1 + 26, top: ys(egriDeger(ILK, 120)) - 46, opacity: aAd(tKarb + 1.3), fontFamily: INTER,
            fontWeight: 800, fontSize: 28, letterSpacing: 1, color: RENK.mercan, whiteSpace: "nowrap", background: kagit(0.85), borderRadius: 12,
            padding: "2px 10px" }}>CARBS FIRST</div>
          <div style={{ position: "absolute", left: X1 + 26, top: ys(egriDeger(SON, 120)) + 2, opacity: aAd(tSon + 1.4), fontFamily: INTER,
            fontWeight: 800, fontSize: 28, letterSpacing: 1, color: RENK.yesil, whiteSpace: "nowrap", background: kagit(0.85), borderRadius: 12,
            padding: "2px 10px" }}>CARBS LAST</div>
        </>
      )}
      <Hap t={t} bas={tAlcak} metin="LOWER" renk={RENK.altin} x={xs(45) + 108} y={(yIlk45 + ySon45) / 2} />
      <Hap t={t} bas={tDuz} metin="FLATTER" renk={RENK.yesil} x={xs(98)} y={ys(egriDeger(SON, 98)) + 46} />
    </>
  );
};

// yumuşak çizim ilerlemesi
const einoutYumusak = (p: number) => 1 - Math.pow(1 - p, 2.2);

export default S23;
