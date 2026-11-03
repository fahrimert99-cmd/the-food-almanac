// Sahne 21 — +0.07 SD kazanç ve aralık (0.02–0.12)
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMv = K(0, "multivitamin"), tComb = K(0, "combined measure"), t007 = K(1, "0.07"), tRange = K(1, "range"), tLo = K(1, "0.02"), tHi = K(1, "to 0.12") + 0.1;
  const X0 = 1180, PX = 4428, Y = 640; // 0 → 0.14 ölçeği
  const ex = (v: number) => X0 + v * PX;
  const aAx = eout(ilerle(t, t007 + 0.3, 0.6));
  const [sd, ad] = pop(t, t007 + 0.4, 0.5);
  const pr = eout(ilerle(t, tRange, 1.4));
  const [sl, al] = pop(t, tLo, 0.4), [sh, ah] = pop(t, tHi, 0.4);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Etiket t={t} bas={tMv} bitis={tComb + 2.4} capa={[500, 400]} konum={[800, 215]} metin="MULTIVITAMIN GROUP" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tComb} bitis={t007 - 0.3} capa={[820, 625]} konum={[1260, 760]} metin="COMBINED MEASURE" renk={RENK.yesil} boyut={26} />
      <Baslik t={t} bas={t007} metin="+0.07" x={1500} y={230} boyut={170} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={t007 + 0.18} metin="THINKING SKILLS" x={1500} y={370} boyut={78} renk={RENK.lacivert} hiza="orta" />
      {/* ölçek: 0 ile aralık çubuğu */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aAx}>
          <line x1={X0} x2={X0 + 0.14 * PX} y1={Y} y2={Y} stroke={RENK.murekkep} strokeWidth={4} />
          <line x1={X0} x2={X0} y1={Y - 16} y2={Y + 16} stroke={RENK.murekkep} strokeWidth={4} />
        </g>
        <line x1={ex(0.02)} x2={ex(0.02) + (ex(0.12) - ex(0.02)) * pr} y1={Y} y2={Y} stroke={RENK.altin} strokeWidth={16} strokeLinecap="round" opacity={pr > 0 ? 1 : 0} />
        <g transform={`translate(${ex(0.07)} ${Y}) scale(${sd})`} opacity={ad}>
          <circle r={20} fill={RENK.koyuYesil} stroke={RENK.kagitAcik} strokeWidth={5} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: X0 - 40, top: Y + 30, width: 80, textAlign: "center", opacity: aAx, fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert }}>0</div>
      <div style={{ position: "absolute", left: ex(0.07) - 70, top: Y - 90, width: 140, textAlign: "center", opacity: ad, fontFamily: ANTON, fontSize: 40, color: RENK.koyuYesil }}>0.07</div>
      <div style={{ position: "absolute", left: ex(0.02) - 60, top: Y + 30, width: 120, textAlign: "center", transform: `scale(${sl})`, opacity: al, fontFamily: ANTON, fontSize: 40, color: RENK.altin }}>0.02</div>
      <div style={{ position: "absolute", left: ex(0.12) - 60, top: Y + 30, width: 120, textAlign: "center", transform: `scale(${sh})`, opacity: ah, fontFamily: ANTON, fontSize: 40, color: RENK.altin }}>0.12</div>
      <Not t={t} bas={tRange} metin="RANGE" x={ex(0.07)} y={Y + 90} hiza="orta" boyut={28} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S21;
