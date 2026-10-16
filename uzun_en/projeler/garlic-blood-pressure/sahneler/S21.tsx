// Sahne 21 — 2013 doz çalışması: önce sarımsak yakın plan + sol panel, sonra tam örtü üstünde iki kapsül/bir kapsül karşılaştırması.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop, ANTON, INTER } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(1, "Two"), t12 = K(1, "twelve"), tBir = K(2, "One");
  const pPanel = 1;
  const pOrtu = eout(ilerle(t, tIki - 0.35, 0.6));
  const pAks = eout(ilerle(t, tIki + 0.1, 0.5));
  const pBar = eout(ilerle(t, t12 - 0.2, 1.0));
  const [sN, aN] = pop(t, t12 + 0.6, 0.5);
  const [sB, aB] = pop(t, tBir, 0.5);
  const BY = 790, BH = 340;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [700, 120, 1020], [740, 150, 960])} />
      <Panel a={pPanel * (1 - pOrtu)} taraf="sol" genislik={720} opak={1} />
      <div style={{ opacity: 1 - pOrtu }}>
        <BaslikBlok t={t} bas={K(0, "2013")} satirlar={["2013", "FOLLOW-UP"]} x={70} y={270} boyut={100} />
        <VurguRozet t={t} bas={K(0, "79") - 0.05} vurgu="79" not="PEOPLE · UNCONTROLLED SYSTOLIC" x={330} y={540} genislik={520} boyut={130} />
      </div>
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: pOrtu }} />
      {pOrtu > 0.3 && (
        <>
          <Baslik t={t} bas={tIki} metin="DOSES VS. PLACEBO" x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={420} x2={1500} y1={BY} y2={BY} stroke={RENK.murekkep} strokeWidth={4} opacity={pAks} />
            {/* 2 kapsül: sayı söylenince büyüyen çubuk */}
            <rect x={540} y={BY - BH * pBar} width={220} height={BH * pBar} rx={10} fill={RENK.yesil} />
            {/* 1 kapsül: boş, kesikli yuva */}
            <rect x={1060} y={BY - BH} width={220} height={BH} rx={10} fill="none" stroke={RENK.gri} strokeWidth={4}
              strokeDasharray="14 12" opacity={aB} />
          </svg>
          <div style={{ position: "absolute", left: 650, top: BY - BH - 100, transform: `translateX(-50%) scale(${sN})`, opacity: aN,
            fontFamily: ANTON, fontSize: 84, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>≈ –12</div>
          <div style={{ position: "absolute", left: 650, top: BY + 18, transform: "translateX(-50%)", opacity: pAks, fontFamily: INTER,
            fontWeight: 800, fontSize: 30, color: RENK.lacivert, whiteSpace: "nowrap" }}>2 CAPSULES A DAY</div>
          <div style={{ position: "absolute", left: 1170, top: BY + 18, transform: "translateX(-50%)", opacity: aB, fontFamily: INTER,
            fontWeight: 800, fontSize: 30, color: RENK.lacivert, whiteSpace: "nowrap" }}>1 CAPSULE A DAY</div>
          <div style={{ position: "absolute", left: 1170, top: BY - BH / 2 - 40, transform: `translateX(-50%) scale(${sB})`, opacity: aB,
            fontFamily: ANTON, fontSize: 52, color: RENK.gri, whiteSpace: "nowrap", textAlign: "center", lineHeight: 1.1 }}>NO CLEAR<br />HELP</div>
          <div style={{ position: "absolute", left: 1560, top: BY - BH - 20, opacity: pAks }}>
            <Hap metin="ILLUSTRATIVE" renk={RENK.altin} boyut={22} />
          </div>
          <div style={{ position: "absolute", left: 160, top: 290, opacity: pAks, fontFamily: INTER, fontWeight: 500, fontSize: 30,
            color: RENK.lacivert }}>points lower systolic pressure vs. placebo</div>
        </>
      )}
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S21;
