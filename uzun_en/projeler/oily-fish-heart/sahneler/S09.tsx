// Sahne 9 — AHA: balık ile kalp/beyin riski. Soldaki görsel, sağda kelimeyle gelen risk listesi.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kagit, kelimeZamani, pop, kameraYolu } from "../kutuphane";

// Sağ sütundaki maddeler: anlatımdaki sıra ile
const MADDELER = [
  { ifade: "heart failure", metin: "HEART FAILURE" },
  { ifade: "coronary", metin: "CORONARY HEART DISEASE" },
  { ifade: "stroke", metin: "STROKE FROM CLOTS" },
  { ifade: "sudden", metin: "SUDDEN CARDIAC DEATH" },
];

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFish = K(0, "fish"), tLower = K(0, "lower risk"), tStroke = K(0, "stroke");
  const [sh, ah] = pop(t, K(0, "heart failure"), 0.6);
  const cizgi = eout(ilerle(t, K(0, "heart failure") + 0.1, 1.4));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [60, 120, 1500], [120, 150, 1380])}>
        {/* görseldeki karalama çizgisi ve bozuk kalp: kâğıt yama ile örtülür, yerine temiz kalp çizilir */}
        <div style={{ position: "absolute", left: 540, top: 0, width: 720, height: 500,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 86%, ${kagit(0)} 100%)` }} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <g transform={`translate(800 330) scale(${sh})`} opacity={ah}>
            <path d="M 0 90 C -150 -10 -90 -110 0 -50 C 90 -110 150 -10 0 90 Z" fill="none" stroke={RENK.mercan} strokeWidth={9}
              strokeLinejoin="round" />
          </g>
          <path d="M 640 345 L 730 345 L 760 290 L 800 400 L 835 325 L 860 345 L 960 345" fill="none" stroke={RENK.lacivert} strokeWidth={7}
            strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - cizgi} />
        </svg>
        <Etiket t={t} bas={tFish} bitis={tLower + 0.4} capa={[430, 520]} konum={[400, 300]} metin="OILY FISH" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tStroke} capa={[1080, 760]} konum={[1260, 800]} metin="BRAIN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin="AHA advisory · 2018" bas={0.4} bitis={tLower} />
      <BaslikBlok t={t} bas={0.2} satirlar={s.meta.baslik?.satirlar ?? []} x={1340} y={190} boyut={104} />
      <div style={{ position: "absolute", left: 1340, top: 440, display: "flex", flexDirection: "column", gap: 20 }}>
        {MADDELER.map((m, i) => {
          const [sc, al] = pop(t, K(0, m.ifade), 0.5);
          return (
            <div key={m.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, alignSelf: "flex-start", display: "flex",
              alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${i === 2 ? RENK.altin : RENK.yesil}`,
              borderRadius: 999, padding: "10px 26px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
              color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: i === 2 ? RENK.altin : RENK.yesil, flex: "none" }} />
              {m.metin}
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 1340, top: 400, opacity: eout(ilerle(t, tLower, 0.5)), fontFamily: INTER, fontWeight: 800,
        fontSize: 24, letterSpacing: 4, color: RENK.yesil }}>LINKED WITH LOWER RISK OF</div>
    </>
  );
};

export default S09;
