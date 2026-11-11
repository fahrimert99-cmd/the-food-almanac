// Sahne 15 — ~%18 daha küçük yükseliş: iki temsili tepe (ILLUSTRATIVE), anlamlılık sınırda.
import React from "react";
import { BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

// görselin sağ yarısındaki rastgele çizgiler kâğıt rengiyle örtülür; grafik kendi çizdiğimiz tepelerdir
const Yama: React.FC<{ x: number; y: number; w: number; h: number; yuvarlak?: boolean }> = ({ x, y, w, h, yuvarlak }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h, background: yuvarlak
    ? `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)`
    : `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 45%, ${kagit(1)} 100%)` }} />
);

const X0 = 1070, YB = 870, GEN = 700;
const tepe = (yuk: number) =>
  `M ${X0} ${YB} C ${X0 + 160} ${YB}, ${X0 + 190} ${YB - yuk}, ${X0 + 350} ${YB - yuk} ` +
  `C ${X0 + 510} ${YB - yuk}, ${X0 + 540} ${YB}, ${X0 + GEN} ${YB}`;

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [] as string[] };
  const tTaze = K(0, "fresh"), tSoguk = K(0, "cooled"), t18 = K(0, "18"), tKucuk = K(0, "smaller");
  const tAnlam = K(1, "statistically"), tSinir = K(1, "only");
  const pTaze = einout(ilerle(t, tTaze, 1.6)), pSoguk = einout(ilerle(t, tSoguk, 1.6));
  const aE = eout(ilerle(t, tTaze - 0.2, 0.5));
  const [s1, a1] = pop(t, tTaze + 0.2, 0.5), [s2, a2] = pop(t, tSoguk + 0.2, 0.5);
  const [s3, a3] = pop(t, tAnlam, 0.5), [s4, a4] = pop(t, tSinir, 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860])}>
        <Yama x={968} y={0} w={952} h={1080} />
        <Yama x={640} y={110} w={760} h={400} yuvarlak />
        <Yama x={900} y={640} w={320} h={200} yuvarlak />
        <Yama x={760} y={380} w={170} h={110} yuvarlak />
        <Yama x={1000} y={610} w={160} h={90} yuvarlak />
        <Yama x={1170} y={560} w={220} h={90} yuvarlak />
        <Yama x={1250} y={760} w={180} h={100} yuvarlak />
        </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <BaslikBlok t={t} bas={tKucuk} satirlar={b.satirlar} x={1040} y={170} boyut={96} />
      {/* temsili tepeler */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aE}>
          <line x1={X0 - 10} y1={YB + 6} x2={X0 + GEN + 20} y2={YB + 6} stroke={RENK.murekkep} strokeWidth={3.5} opacity={0.6} />
        </g>
        <path d={tepe(180)} fill="none" stroke={RENK.mercan} strokeWidth={11} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pTaze} />
        <path d={tepe(148)} fill="none" stroke={RENK.koyuYesil} strokeWidth={11} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pSoguk} />
      </svg>
      <div style={{ position: "absolute", left: X0, top: 600, display: "flex", gap: 16 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}><Hap metin="FRESH" renk={RENK.mercan} boyut={26} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}><Hap metin="COOLED + REHEATED" renk={RENK.koyuYesil} boyut={26} /></div>
      </div>
      <VurguRozet t={t} bas={t18} vurgu="–18%" not="overall rise in blood sugar" x={1620} y={395} genislik={340} boyut={92} />
      <div style={{ position: "absolute", left: X0 + 520, top: 676, opacity: aE, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "4px 16px" }}>ILLUSTRATIVE</div>
      <div style={{ position: "absolute", left: 1000, top: 890, display: "flex", gap: 16 }}>
        <div style={{ transform: `scale(${s3})`, transformOrigin: "0% 50%", opacity: a3 }}><Hap metin="STATISTICALLY SIGNIFICANT" renk={RENK.yesil} boyut={26} /></div>
        <div style={{ transform: `scale(${s4})`, transformOrigin: "0% 50%", opacity: a4 }}><Hap metin="ONLY JUST" renk={RENK.mercan} boyut={26} /></div>
      </div>
    </>
  );
};

export default S15;
