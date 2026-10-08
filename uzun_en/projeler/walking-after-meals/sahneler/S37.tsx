// Sahne 37 — kimlere en çok yarar: tip 2 diyabet / risk altındakiler (şematik, ILLUSTRATIVE).
import React from "react";
import { Baslik, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTip = K(0, "type"), tRisk = K(0, "at risk"), tBuyuk = K(0, "larger,"), tYum = K(0, "soften.");
  const BX = 1040, BY = 470;
  const pU = eout(ilerle(t, tBuyuk, 0.9)), pK = eout(ilerle(t, tBuyuk + 0.3, 0.9));
  const aT = eout(ilerle(t, tBuyuk - 0.3, 0.5));
  const [sc, al] = pop(t, tYum, 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 50, 1700])} />
      <Baslik t={t} bas={tTip} metin="TYPE 2 DIABETES" x={150} y={200} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tRisk} metin="OR AT RISK" x={150} y={305} boyut={92} renk={RENK.lacivert} />
      {/* şematik çubuklar: büyük ve küçük yükseliş */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aT }}>
        <line x1={BX - 30} x2={BX + 420} y1={BY} y2={BY} stroke={RENK.murekkep} strokeWidth={4} />
        <rect x={BX} y={BY - 230 * pU} width={150} height={230 * pU} rx={10} fill={RENK.mercan} />
        <rect x={BX + 240} y={BY - 70 * pK} width={150} height={70 * pK} rx={10} fill={RENK.yesil} />
      </svg>
      <div style={{ position: "absolute", left: BX - 20, top: BY + 14, width: 190, textAlign: "center", opacity: aT, fontFamily: INTER,
        fontWeight: 800, fontSize: 26, color: RENK.mercan }}>LARGER RISE</div>
      <div style={{ position: "absolute", left: BX + 220, top: BY + 14, width: 190, textAlign: "center", opacity: aT, fontFamily: INTER,
        fontWeight: 800, fontSize: 26, color: RENK.koyuYesil }}>SMALLER RISE</div>
      <div style={{ position: "absolute", left: BX - 30, top: BY - 300, opacity: aT, fontFamily: INTER, fontWeight: 700, fontSize: 22,
        letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
      <div style={{ position: "absolute", left: BX + 120, top: BY - 390, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="MORE TO SOFTEN" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S37;
