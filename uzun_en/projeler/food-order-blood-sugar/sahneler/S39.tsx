// Sahne 39 — Diyabeti olmayanlarda: aynı yön, daha küçük sıçrama, daha küçük mutlak fark. Sonra: yemek sonrası yükselme normal.
// Düzen: solda pencere önündeki adam, sağda kâğıt panel (eldeki bozuk çizim panelin altında kalır).
import React from "react";
import { Baslik, Etiket, INTER, Ikon, Kamera, RENK, SP, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, sol } from "../kutuphane";

// Temsili eğri biçimi (veri değil): u = 0..1 zaman, tepe u = 0.36'da.
const bicim = (u: number, a: number) => (u <= 0 ? 0 : Math.pow(u / 0.36, a) * Math.exp(a * (1 - u / 0.36)));
const KARB_A = 2.4, SEBZE_A = 2.0;

// Küçük grafik: aynı ölçekte iki eğri (karbonhidrat önce / sebze + protein önce), yön oku, fark gölgesi.
const MiniGrafik: React.FC<{
  t: number; x0: number; x1: number; yb: number; H: number; mT: number; gT: number; cizBas: number; okBas: number; alanBas: number;
  a: number;
}> = ({ t, x0, x1, yb, H, mT, gT, cizBas, okBas, alanBas, a }) => {
  const xs = (u: number) => x0 + u * (x1 - x0);
  const yM = (u: number) => yb - H * mT * bicim(u, KARB_A);
  const yG = (u: number) => yb - H * gT * bicim(u, SEBZE_A);
  const yol = (f: (u: number) => number, son: number) =>
    Array.from({ length: 61 }, (_, i) => Math.min(son, i / 60)).map((u) => `${xs(u).toFixed(1)},${f(u).toFixed(1)}`).join(" ");
  const aE = eout(ilerle(t, cizBas - 0.3, 0.5));
  const pM = einout(ilerle(t, cizBas, 1.5)), pG = einout(ilerle(t, cizBas + 0.15, 1.5));
  const pOk = eout(ilerle(t, okBas, 0.5));
  const pAlan = eout(ilerle(t, alanBas, 0.7));
  const alan = [...Array.from({ length: 61 }, (_, i) => `${xs(i / 60)},${yM(i / 60)}`),
    ...Array.from({ length: 61 }, (_, i) => `${xs(1 - i / 60)},${yG(1 - i / 60)}`)].join(" ");
  const ux = 0.36, okUst = yM(ux) + 10, okAlt = yG(ux) - 12;
  return (
    <g opacity={a}>
      <g opacity={aE}>
        <polyline points={`${x0},${yb - H - 10} ${x0},${yb} ${x1 + 10},${yb}`} fill="none" stroke={RENK.murekkep} strokeWidth={3.5} />
      </g>
      <polygon points={alan} fill={RENK.altin} opacity={0.28 * pAlan} />
      {pM > 0 && <polyline points={yol(yM, pM)} fill="none" stroke={RENK.mercan} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />}
      {pG > 0 && <polyline points={yol(yG, pG)} fill="none" stroke={RENK.yesil} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />}
      {pOk > 0 && (
        <g opacity={pOk}>
          <line x1={xs(ux) + 26} y1={okUst} x2={xs(ux) + 26} y2={okUst + (okAlt - 8 - okUst) * pOk} stroke={RENK.altin} strokeWidth={5} strokeLinecap="round" />
          <polygon points={`${xs(ux) + 17},${okAlt - 10} ${xs(ux) + 35},${okAlt - 10} ${xs(ux) + 26},${okAlt + 2}`} fill={RENK.altin} />
        </g>
      )}
    </g>
  );
};

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  // sol kenardaki yırtık kâğıt kenarı dışarıda kalır (x >= 130)
  const pencere = kameraYolu(t, s.sure, [130, 90, 1500], [150, 130, 1440]);
  const sk = 1920 / pencere[2];
  const ekran = (x: number, y: number): [number, number] => [(x - pencere[0]) * sk, (y - pencere[1]) * sk];
  const tSon0 = c[1].bas + 0.6;
  const a0 = sol(t, tSon0);
  // grafik yerleşimi (ekran koordinatı)
  const yb = 728, H = 320;
  const A = { x0: 1200, x1: 1490 }, B = { x0: 1580, x1: 1868 };
  const tYon = K(0, "similar direction"), tEtki = K(0, "of effect");
  const tSivri = K(0, "spikes are"), tKucuk = K(0, "smaller to begin");
  const tFark = K(0, "absolute difference"), tFarkKucuk = K(0, "smaller too");
  const pRef = eout(ilerle(t, tSivri, 0.6));
  const yRef = yb - H * 0.95;
  // 2. cümle
  const tSaglik = K(1, "most healthy people"), tYuksel = K(1, "rise in blood sugar"), tYemek = K(1, "after a meal");
  const tNormal = K(1, "completely normal");
  const pTumsek = einout(ilerle(t, tYuksel + 0.2, 1.6));
  // tümsek: yükselir ve tabana geri döner
  const tumsek = (u: number) => 660 - 120 * (u <= 0 ? 0 : Math.pow(u / 0.3, 2.6) * Math.exp(2.6 * (1 - u / 0.3)));
  const yazi = (st: React.CSSProperties): React.CSSProperties => ({ fontFamily: INTER, fontWeight: 800, ...st });
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pencere} />
      {/* etiket ekran koordinatında (hap kamerayla büyümesin, saça binmesin); çapa adamın sırtında */}
      <Etiket t={t} bas={tSaglik - 0.1} capa={ekran(640, 640)} konum={[310, 150]} metin="MOST HEALTHY PEOPLE" renk={RENK.yesil} boyut={26} />
      {/* sağ panel: baştan tam opak */}
      <div style={{ position: "absolute", left: 1000, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(0.9)} 13%, ${kagit(1)} 19%, ${kagit(1)} 100%)` }} />
      {/* 1. cümle: diyabeti olmayanlarda */}
      <Baslik t={t} bas={K(0, "in people") - 0.1} bitis={tSon0} metin="STUDIES IN PEOPLE" x={1192} y={150} boyut={26} renk={RENK.altin} font="inter" aralik={4} />
      <Baslik t={t} bas={K(0, "without diabetes") - 0.1} bitis={tSon0} metin="WITHOUT DIABETES" x={1188} y={218} boyut={74} renk={RENK.lacivert} />
      <Baslik t={t} bas={tYon - 0.05} bitis={tSon0} metin="SIMILAR DIRECTION" x={1190} y={296} boyut={44} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1192, top: 334, display: "flex", gap: 26, opacity: eout(ilerle(t, tYon, 0.5)) * a0,
        ...yazi({ fontSize: 20, letterSpacing: 1.5, color: RENK.lacivert }) }}>
        {[["CARBS FIRST", RENK.mercan], ["VEG + PROTEIN FIRST", RENK.yesil]].map(([m, r]) => (
          <span key={m} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 26, height: 7, borderRadius: 4, background: r }} />{m}
          </span>
        ))}
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {/* A'nın tepe yüksekliği B'nin üstüne kesikli referans */}
        {pRef > 0 && (
          <line x1={A.x0 + 70} y1={yRef} x2={A.x0 + 70 + (B.x1 - A.x0 - 70) * pRef} y2={yRef} stroke={RENK.gri} strokeWidth={3}
            strokeDasharray="10 9" opacity={0.75 * a0} />
        )}
        <MiniGrafik t={t} {...A} yb={yb} H={H} mT={0.95} gT={0.6} cizBas={tYon + 0.1} okBas={tEtki + 0.1} alanBas={tFark} a={a0} />
        <MiniGrafik t={t} {...B} yb={yb} H={H} mT={0.42} gT={0.31} cizBas={tYon + 0.35} okBas={tEtki + 0.25} alanBas={tFark + 0.1} a={a0} />
        <text x={A.x0 - 18} y={yb - H / 2} transform={`rotate(-90 ${A.x0 - 18} ${yb - H / 2})`} textAnchor="middle"
          opacity={eout(ilerle(t, tYon - 0.2, 0.5)) * a0} style={yazi({ fontWeight: 700, fontSize: 22, fill: RENK.gri })}>blood sugar</text>
      </svg>
      {/* grafik adları */}
      {([[A, ["TYPE 2 /", "PREDIABETES"], RENK.gri], [B, ["WITHOUT", "DIABETES"], RENK.lacivert]] as const).map(([g, satir, r], i) => (
        <div key={i} style={{ position: "absolute", left: (g.x0 + g.x1) / 2, top: yb + 16, transform: "translateX(-50%)", textAlign: "center",
          opacity: eout(ilerle(t, tYon - 0.1 + i * 0.25, 0.5)) * a0, ...yazi({ fontSize: 24, letterSpacing: 1.5, lineHeight: 1.2, color: r }) }}>
          {satir[0]}<br />{satir[1]}
        </div>
      ))}
      <Baslik t={t} bas={tKucuk - 0.05} bitis={tSon0} metin="SMALLER SPIKES" x={(B.x0 + B.x1) / 2 + 10} y={yRef + 70} boyut={40}
        renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tFarkKucuk - 0.05} bitis={tSon0} metin="SMALLER DIFFERENCE" x={(B.x0 + B.x1) / 2 + 10} y={yRef + 130} boyut={34}
        renk={RENK.altin} hiza="orta" />
      {/* 2. cümle: yemek sonrası yükselme normal */}
      <Baslik t={t} bas={tYuksel - 0.05} metin="A RISE IN BLOOD SUGAR" x={1190} y={300} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={tYemek - 0.05} metin="AFTER A MEAL" x={1190} y={392} boyut={70} renk={RENK.koyuYesil} />
      {pTumsek > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={1200} y1={660} x2={1700} y2={660} stroke={RENK.murekkep} strokeOpacity={0.45} strokeWidth={3} strokeDasharray="10 9"
            opacity={eout(kis(pTumsek * 4))} />
          <polyline points={Array.from({ length: 61 }, (_, i) => Math.min(pTumsek, i / 60))
            .map((u) => `${(1200 + 500 * u).toFixed(1)},${tumsek(u).toFixed(1)}`).join(" ")}
            fill="none" stroke={RENK.yesil} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      <Ikon t={t} bas={tNormal - 0.05} ad="onay" x={1236} y={776} boyut={84} zemin={RENK.yesil} />
      <Baslik t={t} bas={tNormal} metin="COMPLETELY NORMAL" x={1296} y={776} boyut={66} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1192, top: 862, opacity: eout(ilerle(t, tYon, 0.5)),
        ...yazi({ fontSize: 18, letterSpacing: 2, color: RENK.altin }), border: `2.5px solid ${RENK.altin}`, background: "#FCF6E6",
        borderRadius: 999, padding: "4px 14px" }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S39;
