// Sahne 38 — Haşlama en çok C vitamini kaybettirir: ~%10–71 aralık çubuğu (Razzak 2023), ıspanak en uçta.
import React from "react";
import { Baslik, Etiket, Hap, INTER, ANTON, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X0 = 1000, W = 800, Y = 700, H = 40;
const px = (p: number) => X0 + (W * p) / 100;

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSix = K(0, "six vegetables"), tBoil = K(0, "boiling"), tTen = K(0, "ten"), t71 = K(0, "71"),
    tVit = K(0, "vitamin"), tSpin = K(0, "spinach"), tWater = K(1, "water"), tHeat = K(1, "heat");
  const aTrack = eout(ilerle(t, tBoil + 0.3, 0.5));
  const p = eout(ilerle(t, tTen - 0.1, 0.9));
  const sonP = 10 + 61 * p;
  const [s10, a10] = pop(t, tTen, 0.5);
  const [s71, a71] = pop(t, t71, 0.5);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 70, 1750])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={tBoil} metin="BOILING" x={1860} y={190} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBoil + 0.2} metin="COSTS MOST" x={1860} y={310} boyut={110} hiza="sag" renk={RENK.mercan} />
      <Etiket t={t} bas={tSix} capa={[620, 470]} konum={[1180, 440]} metin="6 VEGETABLES" renk={RENK.yesil} />
      <Not t={t} bas={tBoil + 0.6} metin="VITAMIN C LOST WHEN BOILED" x={X0} y={540} boyut={30} agirlik={800} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aTrack }}>
        <rect x={X0} y={Y} width={W} height={H} rx={20} fill="#E7E0D0" stroke={RENK.murekkep} strokeWidth={3} />
        {p > 0 && <rect x={px(10)} y={Y} width={px(sonP) - px(10)} height={H} rx={20} fill={RENK.mercan} />}
        <text x={X0} y={Y + H + 40} style={{ fontFamily: INTER, fontWeight: 700, fontSize: 26, fill: RENK.gri }}>0%</text>
        <text x={X0 + W} y={Y + H + 40} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 26, fill: RENK.gri }}>100%</text>
      </svg>
      <div style={{ position: "absolute", left: px(10), top: Y - 92, transform: `translateX(-50%) scale(${s10})`, opacity: a10,
        fontFamily: ANTON, fontSize: 64, color: RENK.mercan, whiteSpace: "nowrap" }}>~10%</div>
      <div style={{ position: "absolute", left: px(71), top: Y - 92, transform: `translateX(-50%) scale(${s71})`, opacity: a71,
        fontFamily: ANTON, fontSize: 64, color: RENK.mercan, whiteSpace: "nowrap" }}>71%</div>
      {t >= tSpin && (() => { const [sc, al] = pop(t, tSpin, 0.5); return (
        <div style={{ position: "absolute", left: px(71), top: Y + H + 30, transform: `translateX(-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="SPINACH: MOST" renk={RENK.koyuYesil} boyut={28} />
        </div>); })()}
      <Etiket t={t} bas={tWater} capa={[800, 570]} konum={[1090, 930]} metin="WATER" renk={RENK.lacivert} />
      <Etiket t={t} bas={tHeat} capa={[610, 260]} konum={[880, 250]} metin="HEAT" renk={RENK.mercan} />
    </>
  );
};

export default S38;
