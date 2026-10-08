// Sahne 46 — İki: protein ve sağlıklı yağlar. Tavuk, balık, yumurta, tofu, fasulye, peynir, kuruyemiş, zeytinyağı; yararlı bağırsak hormonları.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop,
  sol } from "../kutuphane";

// İpucu numarası: büyük daire + altında 5'li ilerleme noktaları (S49/S50 ile aynı)
const IpucuNo: React.FC<{ t: number; no: number; x: number; y: number; nabizBitis?: number; bitis?: number }> = ({
  t, no, x, y, nabizBitis = 0, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, 0.02, 0.6);
  const a = sol(t, bitis);
  if (a <= 0) return null;
  const u = (t % 1.3) / 1.3;
  return (
    <div style={{ opacity: a }}>
      <div style={{ position: "absolute", left: x - 92, top: y - 92, width: 184, height: 184, borderRadius: "50%",
        background: RENK.lacivert, border: `7px solid ${RENK.altin}`, boxSizing: "border-box", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: ANTON, fontSize: 118, lineHeight: 1, color: "#fff", transform: `scale(${sc})`, opacity: al,
        boxShadow: "0 12px 28px rgba(48,40,34,0.25)" }}>{no}</div>
      {[1, 2, 3, 4, 5].map((i) => {
        const [s2, a2] = pop(t, 0.3 + i * 0.08, 0.45);
        const r = i === no ? 19 : 14;
        const cx = x + (i - 3) * 48, cy = y + 132;
        return (
          <React.Fragment key={i}>
            {i === no && t > 0.8 && t < nabizBitis && (
              <div style={{ position: "absolute", left: cx - 19 - 22 * u, top: cy - 19 - 22 * u, width: 38 + 44 * u, height: 38 + 44 * u,
                borderRadius: "50%", border: `4px solid ${RENK.altin}`, boxSizing: "border-box", opacity: (1 - u) * 0.8 }} />
            )}
            <div style={{ position: "absolute", left: cx - r, top: cy - r, width: r * 2, height: r * 2, borderRadius: "50%",
              boxSizing: "border-box", transform: `scale(${s2})`, opacity: a2, display: "flex", alignItems: "center", justifyContent: "center",
              background: i < no ? RENK.yesil : i === no ? RENK.altin : RENK.kagitAcik,
              border: i > no ? `3px solid ${RENK.murekkep}` : `3px solid ${RENK.kagitAcik}`, boxShadow: "0 4px 10px rgba(48,40,34,0.18)" }}>
              {i < no && <IkonYol ad="onay" boyut={20} renk="#fff" kalinlik={7} />}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// Görselde olan yiyecekler (görsel koordinatı): çapa -> hap
const ETIKETLER = [
  { ifade: "fish", ad: "FISH", capa: [1435, 360] as [number, number], konum: [1690, 338] as [number, number] },
  { ifade: "eggs", ad: "EGGS", capa: [800, 752] as [number, number], konum: [870, 862] as [number, number] },
  { ifade: "beans", ad: "BEANS", capa: [380, 692] as [number, number], konum: [330, 862] as [number, number] },
  { ifade: "cheese", ad: "CHEESE", capa: [1655, 735] as [number, number], konum: [1560, 862] as [number, number] },
  { ifade: "nuts", ad: "NUTS", capa: [1560, 548] as [number, number], konum: [1700, 435] as [number, number] },
  { ifade: "olive oil", ad: "OLIVE OIL", capa: [455, 420] as [number, number], konum: [240, 395] as [number, number] },
];
// Görselde olmayanlar: sağ üstte, etiket sütununda yalın hap
const HAPLAR = [
  { ifade: "Chicken", ad: "CHICKEN", konum: [1690, 180] as [number, number] },
  { ifade: "tofu", ad: "TOFU", konum: [1690, 258] as [number, number] },
];

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const X = 655; // başlık bloğunun sol kenarı (S49 ile aynı hiza)
  const tMove = K(1, "Move"), tProt = K(1, "protein"), tFat = K(1, "healthy fats");
  const tThese = K(3, "These"), tTrig = K(3, "trigger"), tHelp = K(3, "helpful");
  const c1 = tTrig - 0.35; // ilk başlık söner
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 0, 1820])}>
        {HAPLAR.map((h) => {
          const [sc, al] = pop(t, K(2, h.ifade), 0.5);
          if (al <= 0) return null;
          return (
            <div key={h.ad} style={{ position: "absolute", left: h.konum[0], top: h.konum[1], transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
              <Hap metin={h.ad} renk={RENK.yesil} />
            </div>
          );
        })}
        {ETIKETLER.map((e) => (
          <Etiket key={e.ad} t={t} bas={K(2, e.ifade)} capa={e.capa} konum={e.konum} metin={e.ad} renk={RENK.yesil} />
        ))}
        {/* "These": tüm yiyeceklerde sırayla yeşil nabız */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {ETIKETLER.map((e, i) => [0, 0.35].map((g) => {
            const u = ilerle(t, tThese + i * 0.08 + g, 0.9);
            if (u <= 0 || u >= 1) return null;
            return <circle key={`${i}-${g}`} cx={e.capa[0]} cy={e.capa[1]} r={16 + 52 * eout(u)} fill="none" stroke={RENK.yesil}
              strokeWidth={5} opacity={(1 - u) * 0.9} />;
          }))}
        </svg>
      </Kamera>
      <IpucuNo t={t} no={2} x={175} y={160} nabizBitis={tMove} />
      {/* 1) protein + sağlıklı yağlar */}
      <Baslik t={t} bas={tMove} bitis={c1} metin="MOVE ON TO" x={X + 5} y={140} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tProt} bitis={c1} metin="PROTEIN" x={X} y={232} boyut={94} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tFat} bitis={c1} metin="+ HEALTHY FATS" x={X + 293} y={232} boyut={94} renk={RENK.altin} />
      {/* 2) yararlı bağırsak hormonları */}
      <Baslik t={t} bas={tTrig} metin="THESE TRIGGER" x={X + 5} y={140} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tHelp} metin="HELPFUL GUT HORMONES" x={X} y={232} boyut={94} renk={RENK.koyuYesil} />
    </>
  );
};

export default S46;
