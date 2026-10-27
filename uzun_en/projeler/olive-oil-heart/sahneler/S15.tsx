// Sahne 15 — Düzeltmeden sonra %31 daha düşük risk; belirsizlik aralığı %9–%47; fındık grubu %28.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sayı doğrusu (ekran koordinatı): 0–50% -> x 1180–1840
const X0 = 1180, X1 = 1840, YA = 690;
const px = (v: number) => X0 + ((X1 - X0) * v) / 50;

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const tOl = K(0, "olive oil"), t31 = K(0, "31"), tKar = K(0, "comparison");
  const tAr = K(1, "range"), t9 = K(1, "9"), t47 = K(1, "47"), t28 = K(2, "28");
  const aEks = eout(ilerle(t, tAr, 0.5));
  const bar = eout(ilerle(t, t9, t47 - t9 + 0.3));
  const xk = px(9), xb = xk + (px(47) - xk) * bar;
  const [sc31, al31] = pop(t, t9 + 0.2, 0.5);
  const [sc47, al47] = pop(t, t47 + 0.3, 0.5);
  const [scN, alN] = pop(t, t28, 0.5);
  const [scM, alM] = pop(t, t9 + 0.5, 0.5);
  const lab = (x: number, y: number, txt: string, renk: string, sc: number, al: number, boyut = 40) => (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, fontFamily: INTER,
      fontWeight: 800, fontSize: boyut, color: renk, whiteSpace: "nowrap" }}>{txt}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1780])} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
      <Etiket t={t} bas={tOl} bitis={t9 - 0.3} capa={[910, 600]} konum={[1450, 600]} metin="OLIVE OIL GROUP" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tKar} capa={[345, 640]} konum={[260, 790]} metin="COMPARISON GROUP" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={t31} satirlar={m.baslik!.satirlar} x={1860} y={190} boyut={130} hiza="sag" />
      <Not t={t} bas={t31 + 0.6} metin={m.baslik!.not!} x={1860} y={400} hiza="sag" genislik={640} boyut={30} />
      {/* belirsizlik aralığı */}
      <Not t={t} bas={tAr} metin="RANGE OF UNCERTAINTY" x={1510} y={540} hiza="orta" boyut={30} agirlik={800} renk={RENK.lacivert} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aEks}>
          <line x1={X0} x2={X1} y1={YA} y2={YA} stroke={RENK.murekkep} strokeWidth={4} />
          {[0, 10, 20, 30, 40, 50].map((v) => (
            <g key={v}>
              <line x1={px(v)} x2={px(v)} y1={YA - 8} y2={YA + 8} stroke={RENK.murekkep} strokeWidth={3} />
              <text x={px(v)} y={YA + 44} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 500, fontSize: 24, fill: RENK.lacivert }}>{v}%</text>
            </g>
          ))}
        </g>
        {bar > 0 && <line x1={xk} x2={xb} y1={YA} y2={YA} stroke={RENK.yesil} strokeWidth={22} strokeLinecap="round" />}
        {al31 > 0 && <circle cx={xk} cy={YA} r={15} fill={RENK.koyuYesil} stroke="#fff" strokeWidth={4} />}
        {al47 > 0 && <circle cx={px(47)} cy={YA} r={15} fill={RENK.koyuYesil} stroke="#fff" strokeWidth={4} />}
        {alM > 0 && <polygon points={`${px(31)},${YA - 22} ${px(31) + 14},${YA - 40} ${px(31) - 14},${YA - 40}`} fill={RENK.altin} opacity={alM} />}
        {alN > 0 && <polygon points={`${px(28)},${YA + 22} ${px(28) + 14},${YA + 4} ${px(28) - 14},${YA + 4}`} fill={RENK.mercan} opacity={alN} />}
      </svg>
      {lab(xk, YA - 100, "9%", RENK.koyuYesil, sc31, al31)}
      {lab(px(47), YA - 100, "47%", RENK.koyuYesil, sc47, al47)}
      {lab(px(31), YA - 100, "31%", RENK.altin, scM, alM)}
      {lab(px(28), YA + 90, "NUTS 28%", RENK.mercan, scN, alN, 34)}
    </>
  );
};

export default S15;
