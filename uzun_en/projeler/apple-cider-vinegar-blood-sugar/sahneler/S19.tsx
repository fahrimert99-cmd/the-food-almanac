// Sahne 19 — Yalnızca 67 kişi: önce bardak/tabak etiketleri, sonra başlık + 67 noktalık kişi ızgarası.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVin = K(0, "vinegar"), tMeal = K(0, "meal,"), tResp = K(0, "response"), tLow = K(0, "lower");
  const tT2 = K(0, "type"), tImp = K(0, "impaired");
  const tJust = K(1, "just"), t67 = K(1, "67");
  const tS1 = s.cumleler[1].bas - 0.15;
  const pill = (bas: number, metin: string, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, tS1);
    if (a <= 0) return null;
    return <div style={{ position: "absolute", left: 1500, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={28} /></div>;
  };
  // 67 kişi noktası: 11 sütun x 7 satır, sondaki 10 boş
  const noktalar = Array.from({ length: 67 }, (_, i) => i);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={tVin} bitis={tS1} capa={[230, 640]} konum={[280, 290]} metin="VINEGAR" renk={RENK.yesil} />
        <Etiket t={t} bas={tMeal} bitis={tS1} capa={[780, 710]} konum={[800, 430]} metin="WITH A MEAL" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={tResp} bitis={tS1} metin="blood sugar response" x={560} y={110} boyut={36} agirlik={800} />
      <Baslik t={t} bas={tLow} bitis={tS1} metin="LOWER" x={560} y={220} boyut={130} renk={RENK.koyuYesil} />
      {pill(tT2, "TYPE 2 DIABETES", 190, RENK.mercan)}
      {pill(tImp, "IMPAIRED GLUCOSE TOLERANCE", 275, RENK.altin)}
      <BaslikBlok t={t} bas={tJust} satirlar={s.meta.baslik!.satirlar} x={520} y={150} boyut={120} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tJust + 0.6} metin={s.meta.baslik!.not ?? ""} x={524} y={385} boyut={32} genislik={640} agirlik={700} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {noktalar.map((i) => {
          const b = t67 + i * 0.012;
          const p = eout(ilerle(t, b, 0.3));
          if (p <= 0) return null;
          const cx = 1290 + (i % 11) * 46, cy = 175 + Math.floor(i / 11) * 46;
          return <circle key={i} cx={cx} cy={cy} r={15 * p} fill={i % 2 ? RENK.altin : RENK.lacivert} />;
        })}
      </svg>
    </>
  );
};

export default S19;
