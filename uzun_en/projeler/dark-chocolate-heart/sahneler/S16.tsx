// Sahne 16 — tek sonuç: kardiyovasküler ölüm –%27 ve güven aralığı
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, kis } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1860], [50, 30, 1680]);
  const tOlum = K(0, "death from cardiovascular");
  const t27 = K(0, "27");
  const tAralik = K(1, "range");
  const t2 = K(1, "2 percent"), t46 = K(1, "46 percent");
  // aralık çubuğu: 0–50 ölçeği, x 1330–1830
  const x0 = 1330, x1 = 1830, y = 800;
  const xs = (v: number) => x0 + (v / 50) * (x1 - x0);
  const pA = eout(ilerle(t, tAralik, 0.6));
  const p2 = eout(ilerle(t, t2, 0.5)), p46 = eout(ilerle(t, t46, 0.9));
  const sag = xs(2) + (xs(46) - xs(2)) * p46;
  return (
    <>
      <Kamera gorsel="tam/16" pencere={w}>
        <Etiket t={t} bas={K(0, "only one")} bitis={tOlum + 0.6} capa={[1010, 640]} konum={[1180, 860]} metin="ONE OUTCOME" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "separate outcomes")} bitis={tOlum} metin="SEPARATE OUTCOMES" x={1860} y={250} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={5} />
      <Baslik t={t} bas={tOlum} metin="CV DEATH" x={1860} y={290} boyut={112} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={t27} vurgu="–27%" not="lower with the extract" x={1600} y={400} genislik={420} boyut={120} />
      {/* güven aralığı çubuğu */}
      <div style={{ position: "absolute", left: x0, top: y - 100, opacity: pA, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.lacivert }}>RANGE OF THE RESULT</div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: pA }}>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke={RENK.murekkep} strokeWidth={3} strokeOpacity={0.35} />
        <line x1={xs(0)} y1={y - 16} x2={xs(0)} y2={y + 16} stroke={RENK.murekkep} strokeWidth={3} />
        <line x1={xs(2)} y1={y} x2={sag} y2={y} stroke={RENK.altin} strokeWidth={14} strokeLinecap="round" />
        <circle cx={xs(2)} cy={y} r={12} fill={RENK.altin} stroke="#fff" strokeWidth={4} opacity={p2} />
        <circle cx={sag} cy={y} r={12} fill={RENK.altin} stroke="#fff" strokeWidth={4} opacity={p46} />
        <circle cx={xs(27)} cy={y} r={10} fill={RENK.lacivert} opacity={kis(p46 * 2 - 0.6)} />
      </svg>
      <Not t={t} bas={t2} metin="2%" x={xs(2) - 20} y={y + 32} boyut={40} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={t46} metin="46%" x={xs(46) - 30} y={y + 32} boyut={40} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={t46} metin="lower" x={1600} y={y + 90} boyut={28} renk={RENK.gri} hiza="orta" />
    </>
  );
};

export default S16;
