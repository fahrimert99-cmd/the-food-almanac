// Sahne 42 — maruziyet referans dozun çok altında; sebze-meyveyi bırakmak daha güvenli değil.
import React from "react";
import { Baslik, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, einout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta.baslik;
  const tTwelve = K(0, "twelve"), tExp = K(0, "exposures"), tRef = K(0, "safety reference"), tConc = K(0, "concluded"), tNot = K(0, "not measurably");
  const tSkip = K(1, "skipping"), tSafer = K(1, "safer");
  const pg = einout(ilerle(t, tExp, 0.9)), pr = eout(ilerle(t, tRef, 0.7));
  const aG = sol(t, tConc - 0.2);
  const [sc, al] = pop(t, tNot, 0.5);
  const aTum = sol(t, 10.3);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1830])} />
      <div style={{ position: "absolute", left: 1120, top: 0, bottom: 0, width: 800,
        background: `linear-gradient(to right, rgba(246,243,236,0) 0%, rgba(246,243,236,1) 24%, rgba(246,243,236,1) 100%)` }} />
      <VurguRozet t={t} bas={tTwelve} bitis={tExp - 0.1} vurgu="12" not="FOODS MODELED" x={1580} y={230} genislik={360} />
      {/* şematik: maruziyet çubuğu ve referans doz çizgisi (SAYISIZ) */}
      <div style={{ opacity: aG * aTum }}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <rect x={1380} y={380} width={460 * pr} height={44} rx={10} fill={RENK.lacivert} opacity={0.18} />
          <rect x={1380} y={500} width={90 * pg} height={44} rx={10} fill={RENK.yesil} />
          <line x1={1840} x2={1840} y1={340} y2={600} stroke={RENK.mercan} strokeWidth={5} strokeDasharray="12 9" opacity={pr} />
        </svg>
        <Baslik t={t} bas={tRef} metin="SAFETY REFERENCE DOSE" x={1380} y={350} boyut={26} renk={RENK.mercan} font="inter" />
        <Baslik t={t} bas={tExp} metin="EXPOSURE" x={1380} y={470} boyut={26} renk={RENK.yesil} font="inter" />
        <Baslik t={t} bas={tExp} metin="FAR BELOW" x={1380} y={620} boyut={70} renk={RENK.koyuYesil} />
        <div style={{ position: "absolute", left: 1380, top: 700, opacity: pr, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 4, color: RENK.gri }}>ILLUSTRATIVE</div>
      </div>
      <div style={{ position: "absolute", left: 1380, top: 790, opacity: al * aTum, transform: `scale(${sc})`, transformOrigin: "0% 50%",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 18, padding: "10px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 28,
        color: RENK.murekkep, width: 440, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>SWITCHING TO ORGANIC: NO MEASURABLE CHANGE</div>
      <Baslik t={t} bas={tSkip} metin={m!.satirlar[0]} x={1300} y={300} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSkip + 0.18} metin={m!.satirlar[1]} x={1300} y={420} boyut={100} renk={RENK.mercan} />
      <Not t={t} bas={tSafer - 0.3} metin="No study suggests it is safer" x={1300} y={510} boyut={34} agirlik={800} genislik={560} />
    </>
  );
};

export default S42;
