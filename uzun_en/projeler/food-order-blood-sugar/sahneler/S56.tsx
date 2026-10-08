// Sahne 56 — Özet: nasıl çalışıyor (mide yavaşlar, lif yerinde, GLP-1) + kanıt en güçlü kimde + bedava alışkanlık.
// Düzen: solda kâğıt panelde metin sütunu, sağda anatomi; listedeki numaralar anatomideki işaretlerle eşleşir.
// Görsel kusurları: anatomideki anlamsız el yazısı etiketler, gösterge çizgileri ve ortadaki dikey çizgi/nokta
// görselin zemin rengindeki yamalarla örtülür; soldaki tuhaf yemek tabağı panelin altında kalır.
import React from "react";
import { ANTON, Baslik, INTER, Kamera, Liste, Parcaciklar, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani,
  pop, sol } from "../kutuphane";

const ZEMIN = "rgb(251,249,219)"; // görselin zemin rengi (ölçüldü)

// yazı yamaları (görsel koordinatı): [sol, üst, genişlik, yükseklik]
const YAMA: [number, number, number, number][] = [
  [962, 345, 126, 258],   // Prndoud / Small / Simall
  [982, 770, 96, 64],     // N Tifle
  [1722, 316, 124, 422],  // sağdaki dört etiket
];
// gösterge çizgileri (görsel koordinatı)
const CIZGI: [number, number][][] = [
  [[1084, 376], [1162, 376], [1247, 446]],
  [[1084, 529], [1178, 529]],
  [[1072, 576], [1172, 576]],
  [[1072, 798], [1139, 798], [1185, 761]],
  [[1597, 348], [1726, 348]],
  [[1617, 447], [1645, 416], [1724, 416]],
  [[1616, 581], [1724, 581]],
  [[1612, 712], [1726, 712]],
];

// anatomideki numaralı işaretler (görsel koordinatı)
const ISARET = [
  { x: 1452, y: 335, renk: RENK.lacivert },
  { x: 1340, y: 622, renk: RENK.yesil },
  { x: 1462, y: 738, renk: RENK.altin },
];

const Isaret: React.FC<{ t: number; bas: number; bitis: number; no: number; x: number; y: number; renk: string }> = ({
  t, bas, bitis, no, x, y, renk,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const halka = ilerle(t, bas, 1.1);
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible", opacity: a }}>
        <circle cx={x} cy={y} r={36 + 46 * halka} fill="none" stroke={renk} strokeWidth={5} opacity={(1 - halka) * 0.9} />
      </svg>
      <div style={{ position: "absolute", left: x - 36, top: y - 36, width: 72, height: 72, borderRadius: "50%", background: renk,
        border: `5px solid ${RENK.kagitAcik}`, boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontFamily: ANTON, fontSize: 40, transform: `scale(${sc})`, opacity: a, boxShadow: "0 8px 22px rgba(48,40,34,0.3)" }}>{no}</div>
    </>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tIs = K(0, "seems to work"), tMide = K(0, "slowing"), tLif = K(0, "fiber"), tGlp = K(0, "triggering");
  const tKanit = K(1, "The evidence"), tGuclu = K(1, "strongest"), tTip2 = K(1, "type 2"), tPre = K(1, "prediabetes");
  const tAlis = K(1, "a habit"), tBedava = K(1, "costs nothing");
  const faz2 = c[1].bas - 0.3;
  const bas = [tMide - 0.05, tLif - 0.05, tGlp];
  // mideyi çevreleyen kesikli halka: yavaşça döner ("yavaşlayan mide")
  const aHalka = eout(ilerle(t, tMide + 0.2, 0.6)) * sol(t, faz2);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [70, 40, 1800], [100, 65, 1730])}>
        {/* kusur yamaları */}
        <div style={{ position: "absolute", left: 924, top: 0, width: 22, height: 1080, background: ZEMIN, boxShadow: `0 0 10px 6px ${ZEMIN}` }} />
        {YAMA.map(([x, y, w, h], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: w, height: h, background: ZEMIN, borderRadius: 18,
            boxShadow: `0 0 14px 10px ${ZEMIN}` }} />
        ))}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <circle cx={935} cy={552} r={24} fill={ZEMIN} />
          {CIZGI.map((p, i) => (
            <polyline key={i} points={p.map((q) => q.join(",")).join(" ")} fill="none" stroke={ZEMIN} strokeWidth={12}
              strokeLinecap="round" strokeLinejoin="round" />
          ))}
          {aHalka > 0 && (
            <g opacity={aHalka} transform={`rotate(${-18 + (t - tMide) * 7} 1432 372)`}>
              <ellipse cx={1432} cy={372} rx={218} ry={182} fill="none" stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="18 14" />
            </g>
          )}
        </svg>
        <Parcaciklar t={t} bas={tGlp + 0.3} kaynak={[1462, 760]} hedef={[1640, 560]} adet={14} aralik={0.1} omur={1.6} yayilma={90}
          hedefYayilma={220} kavis={-90} tohum="glp1" />
        {ISARET.map((m, i) => (
          <Isaret key={i} t={t} bas={bas[i] + 0.1} bitis={faz2} no={i + 1} x={m.x} y={m.y} renk={m.renk} />
        ))}
      </Kamera>

      {/* sol metin paneli (tabak hep altında) */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1160,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 74%, ${kagit(0.9)} 84%, ${kagit(0)} 100%)` }} />

      {/* 1. faz: mekanizmalar */}
      <Baslik t={t} bas={tIs - 0.1} bitis={faz2} metin="HOW IT SEEMS TO WORK" x={104} y={318} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={100} y={380} aralik={122} boyut={56} genislik={900} ogeler={[
        { bas: bas[0], metin: "SLOWS THE STOMACH", renk: RENK.lacivert, bitis: faz2 },
        { bas: bas[1], metin: "FIBER IN PLACE", renk: RENK.yesil, bitis: faz2 },
        { bas: bas[2], metin: "TRIGGERS GLP-1", renk: RENK.altin, bitis: faz2 },
      ]} />

      {/* 2. faz: kanıt + bedava alışkanlık */}
      <Baslik t={t} bas={tKanit - 0.05} metin="THE EVIDENCE IS" x={104} y={262} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tGuclu - 0.05} metin="STRONGEST FOR" x={100} y={352} boyut={116} renk={RENK.lacivert} />
      <Liste t={t} x={100} y={448} aralik={98} boyut={46} isaret="onay" genislik={860} ogeler={[
        { bas: tTip2 - 0.1, metin: "TYPE 2 DIABETES" },
        { bas: tPre - 0.1, metin: "PREDIABETES" },
      ]} />
      <Baslik t={t} bas={tAlis - 0.1} metin="A HABIT THAT" x={104} y={712} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tBedava - 0.1} metin="COSTS NOTHING" x={100} y={796} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};

export default S56;
