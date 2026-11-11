// Sahne 34 — ~%90 daha az flavanol: solda görsel, sağda iki çubuk (doğal = tam, ağır işlenmiş = %10) + akış.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Panel, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 120, 1800], [0, 190, 1650]);
  const tBar = K(0, "heavily processed");
  const pN = eout(ilerle(t, K(0, "90"), 0.8));
  const pH = eout(ilerle(t, tBar, 0.8));
  const [sc, al] = pop(t, K(0, "fewer"), 0.5);
  const [s2, a2] = pop(t, K(1, "more alkali"), 0.5);
  const [s3, a3] = pop(t, K(1, "fewer flavanols"), 0.5);
  const BY = 760, BH = 380;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={pen} />
      <Panel a={1} taraf="sag" genislik={900} />
      <Etiket t={t} bas={K(0, "heavily processed")} bitis={6.7} capa={[790, 660]} konum={[760, 880]} metin="COCOA POWDER" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "about")} metin="ABOUT 90%" x={1060} y={150} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "fewer")} metin="FEWER" x={1060} y={265} boyut={100} renk={RENK.mercan} />
      {/* çubuklar (şematik oran: %90 az = %10) */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1040} x2={1800} y1={BY} y2={BY} stroke={RENK.murekkep} strokeWidth={4} />
        <rect x={1140} y={BY - BH * pN} width={190} height={BH * pN} rx={10} fill={RENK.koyuYesil} />
        <rect x={1500} y={BY - BH * 0.1 * pH} width={190} height={BH * 0.1 * pH} rx={6} fill={RENK.mercan} />
      </svg>
      <div style={{ position: "absolute", left: 1235, top: BY + 18, transform: "translateX(-50%)", opacity: pN, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep }}>NATURAL</div>
      <div style={{ position: "absolute", left: 1595, top: BY + 18, transform: "translateX(-50%)", opacity: pH, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.murekkep, whiteSpace: "nowrap" }}>HEAVILY PROCESSED</div>
      <div style={{ position: "absolute", left: 1595, top: BY - BH * 0.1 - 90, transform: `translateX(-50%) scale(${sc})`, opacity: al, fontFamily: ANTON, fontSize: 64, color: RENK.mercan }}>–90%</div>
      {/* 2. cümle: akış */}
      <div style={{ position: "absolute", left: 1040, top: 860, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
        <Hap metin="MORE ALKALI" renk={RENK.altin} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 1370, top: 860, transform: `scale(${s3})`, transformOrigin: "0 50%", opacity: a3 }}>
        <Hap metin="FEWER FLAVANOLS" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};

export default S34;
