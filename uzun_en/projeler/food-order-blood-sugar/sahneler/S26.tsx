// Sahne 26 — Neden önemli + sınırlılık. Üstte kâğıt şerit: TEK ÖĞÜN -> ALIŞKANLIK -> ZAMANLA (diyagram),
// sonra "belirli gruplar": insan simgeleri, incelenen grup vurgulu, diğerlerinde soru işareti.
import React from "react";
import { Baslik, INTER, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, random,
  sol } from "../kutuphane";

const NY = 252; // düğüm merkezlerinin y'si (ekran)
const NX = [480, 960, 1440];
const R = 92;

// düğüm halkası (pop ile büyür); içerik çocuk olarak verilir
const Dugum: React.FC<{ t: number; bas: number; x: number; renk: string; a: number; children?: React.ReactNode }> = ({
  t, bas, x, renk, a, children,
}) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <g opacity={al * a} transform={`translate(${x} ${NY}) scale(${sc}) translate(${-x} ${-NY})`}>
      <circle cx={x} cy={NY} r={R} fill={RENK.kagitAcik} stroke={renk} strokeWidth={5} filter="url(#dGolge)" />
      {children}
    </g>
  );
};

const Ok: React.FC<{ x0: number; x1: number; p: number; a: number }> = ({ x0, x1, p, a }) => {
  if (p <= 0) return null;
  const u = x0 + (x1 - x0) * p;
  return (
    <g opacity={a}>
      <line x1={x0} y1={NY} x2={u - 6} y2={NY} stroke={RENK.altin} strokeWidth={7} strokeLinecap="round" />
      <polygon points={`${u + 12},${NY} ${u - 8},${NY - 13} ${u - 8},${NY + 13}`} fill={RENK.altin} />
    </g>
  );
};

// düğüm altı etiketi: kalın satır + ince alt satır
const DEtiket: React.FC<{ t: number; bas: number; x: number; metin: string; alt?: string; altBas?: number; a: number }> = ({
  t, bas, x, metin, alt, altBas = 0, a,
}) => {
  const p = eout(ilerle(t, bas, 0.45));
  const pa = eout(ilerle(t, altBas, 0.45));
  if (p <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: NY + R + 22, transform: "translateX(-50%)", textAlign: "center", opacity: a }}>
      <div style={{ opacity: p, transform: `translateY(${(1 - p) * 10}px)`, fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2,
        color: RENK.murekkep, whiteSpace: "nowrap" }}>{metin}</div>
      {alt && <div style={{ opacity: pa, transform: `translateY(${(1 - pa) * 8}px)`, fontFamily: INTER, fontWeight: 600, fontSize: 27,
        color: RENK.gri, whiteSpace: "nowrap", marginTop: 2 }}>{alt}</div>}
    </div>
  );
};

// insan simgesi (baş + omuz kubbesi); taban y = 352
const TABAN = 352;
const Kisi: React.FC<{ x: number; olcek: number; renk: string; op: number }> = ({ x, olcek, renk, op }) => {
  const k = olcek, w = 27 * k, h = 52 * k, r = 17 * k;
  return (
    <g opacity={op}>
      <path d={`M ${x - w} ${TABAN} Q ${x - w} ${TABAN - h} ${x} ${TABAN - h} Q ${x + w} ${TABAN - h} ${x + w} ${TABAN} Z`} fill={renk} />
      <circle cx={x} cy={TABAN - h - r - 5 * k} r={r} fill={renk} />
    </g>
  );
};
const KUME = [560, 960, 1360];
const ARA = 62;

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a1 = sol(t, K(2, "were done") - 0.1, 0.5); // diyagram çıkışı
  const tTek = K(0, "one-meal") - 0.1, tAl = K(1, "habit") - 0.1, tHer = K(1, "every day") - 0.1;
  const tBel = K(1, "may add up") - 0.05, tZam = K(1, "over time") - 0.1;
  const tGrup = K(2, "specific groups") - 0.1, tVurgu = K(2, "groups"), tSonuc = K(2, "don't automatically") - 0.1;
  const tHerkes = K(2, "everyone") - 0.1;
  const pVurgu = eout(ilerle(t, tVurgu, 0.6));
  const pSerit = eout(ilerle(t, 0.05, 0.7));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 70, 1720])} />
      {/* üst kâğıt şerit: pencerenin aydınlık üst yarısı yazı zemini olur */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 620, opacity: pSerit,
        background: `linear-gradient(to bottom, ${kagit(0.97)} 0%, ${kagit(0.95)} 62%, ${kagit(0.78)} 76%, ${kagit(0)} 100%)` }} />
      {/* 1-2. cümle: tek öğün -> basit alışkanlık -> zamanla */}
      <Baslik t={t} bas={K(0, "matters") - 0.1} bitis={K(2, "were done") - 0.1} metin="WHY IT MATTERS" x={960} y={104} boyut={28}
        renk={RENK.altin} hiza="orta" font="inter" aralik={6} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <defs>
          <filter id="dGolge" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#302822" floodOpacity="0.18" />
          </filter>
        </defs>
        <Ok x0={NX[0] + R + 26} x1={NX[1] - R - 34} p={eout(ilerle(t, tAl - 0.25, 0.5))} a={a1} />
        <Ok x0={NX[1] + R + 26} x1={NX[2] - R - 34} p={eout(ilerle(t, tBel - 0.25, 0.5))} a={a1} />
        {/* tabak */}
        <Dugum t={t} bas={tTek} x={NX[0]} renk={RENK.lacivert} a={a1}>
          <circle cx={NX[0]} cy={NY} r={44} fill="#fff" stroke={RENK.murekkep} strokeWidth={4} />
          <circle cx={NX[0]} cy={NY} r={28} fill="none" stroke={RENK.murekkep} strokeOpacity={0.35} strokeWidth={3} />
          <line x1={NX[0] - 64} y1={NY - 34} x2={NX[0] - 64} y2={NY + 38} stroke={RENK.murekkep} strokeWidth={5} strokeLinecap="round" />
          <path d={`M ${NX[0] - 72} ${NY - 36} L ${NX[0] - 72} ${NY - 14} Q ${NX[0] - 64} ${NY - 6} ${NX[0] - 56} ${NY - 14} L ${NX[0] - 56} ${NY - 36}`}
            fill="none" stroke={RENK.murekkep} strokeWidth={4} strokeLinecap="round" />
          <path d={`M ${NX[0] + 64} ${NY + 38} L ${NX[0] + 64} ${NY - 36} Q ${NX[0] + 76} ${NY - 20} ${NX[0] + 70} ${NY}`}
            fill="none" stroke={RENK.murekkep} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        </Dugum>
        {/* takvim: "her gün" denince günler sırayla dolar */}
        <Dugum t={t} bas={tAl} x={NX[1]} renk={RENK.altin} a={a1}>
          <rect x={NX[1] - 60} y={NY - 52} width={120} height={108} rx={12} fill="#fff" stroke={RENK.murekkep} strokeWidth={4} />
          <path d={`M ${NX[1] - 58} ${NY - 28} L ${NX[1] - 58} ${NY - 42} Q ${NX[1] - 58} ${NY - 50} ${NX[1] - 50} ${NY - 50} L ${NX[1] + 50} ${NY - 50} Q ${NX[1] + 58} ${NY - 50} ${NX[1] + 58} ${NY - 42} L ${NX[1] + 58} ${NY - 28} Z`}
            fill={RENK.altin} />
          {Array.from({ length: 21 }, (_, i) => {
            const cx = NX[1] - 45 + (i % 7) * 15, cy = NY - 10 + Math.floor(i / 7) * 21;
            const d = eout(ilerle(t, tHer + 0.15 + i * 0.045, 0.25));
            return <circle key={i} cx={cx} cy={cy} r={5.5} fill={d > 0 ? RENK.yesil : "none"} fillOpacity={d}
              stroke={d > 0.5 ? RENK.yesil : RENK.murekkep} strokeOpacity={d > 0.5 ? 1 : 0.3} strokeWidth={2} />;
          })}
        </Dugum>
        {/* üst üste eklenen bloklar: "zamanla birikebilir" */}
        <Dugum t={t} bas={tBel} x={NX[2]} renk={RENK.yesil} a={a1}>
          {Array.from({ length: 5 }, (_, k) => {
            const d = eout(ilerle(t, tBel + 0.25 + k * 0.14, 0.35));
            const y = NY + 50 - 18 * (k + 1) - 4 * k;
            const w = 92 - k * 6;
            return <rect key={k} x={NX[2] - w / 2 + (k % 2 ? 4 : -4)} y={y - (1 - d) * 26} width={w} height={18} rx={5}
              fill={k % 2 ? "#6E9E5C" : RENK.yesil} opacity={d} />;
          })}
        </Dugum>
      </svg>
      <DEtiket t={t} bas={tTek} x={NX[0]} metin="NOT JUST ONE MEAL" a={a1} />
      <DEtiket t={t} bas={tAl} x={NX[1]} metin="SIMPLE HABIT" alt="every day" altBas={tHer} a={a1} />
      <DEtiket t={t} bas={tBel} x={NX[2]} metin="MAY ADD UP" alt="over time" altBas={tZam} a={a1} />

      {/* 3. cümle: belirli gruplar */}
      <Baslik t={t} bas={tGrup} metin="SPECIFIC GROUPS" x={960} y={142} boyut={80} renk={RENK.lacivert} hiza="orta" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pVurgu > 0 && (
          <rect x={KUME[0] - 2 * ARA - 50} y={TABAN - 128} width={4 * ARA + 100} height={146} rx={26} fill={RENK.yesil} fillOpacity={0.08 * pVurgu}
            stroke={RENK.yesil} strokeWidth={4} strokeDasharray="14 10" opacity={pVurgu} />
        )}
        {KUME.map((kx, k) => Array.from({ length: 5 }, (_, j) => {
          const i = k * 5 + j;
          const [sc, al] = pop(t, tGrup + 0.05 + i * 0.035, 0.45);
          if (al <= 0) return null;
          const olcek = (0.82 + 0.3 * random(`kisi-${i}`)) * sc;
          const x = kx + (j - 2) * ARA;
          const yesil = k === 0 ? pVurgu : 0;
          return (
            <g key={i}>
              <Kisi x={x} olcek={olcek} renk="#9C9AA0" op={al * (1 - yesil)} />
              {yesil > 0 && <Kisi x={x} olcek={olcek} renk={RENK.yesil} op={al * yesil} />}
            </g>
          );
        }))}
      </svg>
      {/* incelenen grup sekmesi */}
      {(() => {
        const [sc, al] = pop(t, tVurgu + 0.2, 0.5);
        return al > 0 ? (
          <div style={{ position: "absolute", left: KUME[0], top: TABAN - 128, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
            background: RENK.yesil, color: "#fff", borderRadius: 999, padding: "6px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 22,
            letterSpacing: 3, whiteSpace: "nowrap" }}>STUDIED</div>
        ) : null;
      })()}
      {KUME.slice(1).map((kx, k) => (
        <Ikon key={kx} t={t} bas={tHerkes + k * 0.12} ad="soru" x={kx} y={TABAN - 122} boyut={56} zemin={RENK.altin} />
      ))}
      <Not t={t} bas={tSonuc} metin="results don't automatically apply to everyone" x={960} y={392} boyut={34} hiza="orta" agirlik={700} />
    </>
  );
};

export default S26;
