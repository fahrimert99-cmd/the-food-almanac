// Sahne 35 — kesin pencere yok: akşam sokağı, ışıklı kapı, ayak izleri
import React from "react";
import { AltSis, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, kagit, pop } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPer = K(0, "perfect"), tDin = K(1, "dinner"), tTen = K(1, "ten minute"), tSoon = K(1, "fairly soon"), tBegin = K(1, "good place");
  const aK = eout(ilerle(t, tPer - 0.3, 0.5)) * (1 - eout(ilerle(t, s.cumleler[0].bas + s.cumleler[0].sure + 0.2, 0.4)));
  const [sc, al] = pop(t, tBegin, 0.55);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [20, 40, 1800], [80, 70, 1700])}>
        {/* alt köşelerdeki sahte imzalar kâğıt yamayla örtülü */}
        <div style={{ position: "absolute", left: 40, top: 970, width: 190, height: 60, background: `radial-gradient(ellipse at center, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <div style={{ position: "absolute", left: 1740, top: 970, width: 160, height: 60, background: `radial-gradient(ellipse at center, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tDin} bitis={tTen} capa={[1533, 600]} konum={[1200, 880]} metin="AFTER DINNER" renk={RENK.altin} />
        <Etiket t={t} bas={tSoon} capa={[850, 830]} konum={[470, 800]} metin="START FAIRLY SOON" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={1} yukseklik={150} />
      {/* 1. cümle: kâğıt zeminli başlık kartı */}
      <div style={{ position: "absolute", left: 60, top: 130, width: 690, height: 300, opacity: aK, background: kagit(0.93), borderRadius: 26,
        boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }} />
      <BaslikBlok t={t} bas={tPer - 0.2} bitis={s.cumleler[0].bas + s.cumleler[0].sure + 0.2} satirlar={["NO PROVEN", "PERFECT WINDOW"]} x={100} y={215} boyut={100} />
      {/* 2. cümle: rozet + sonuç */}
      <VurguRozet t={t} bas={tTen} vurgu="10 MIN" not="a gentle walk" x={340} y={130} genislik={380} />
      <div style={{ position: "absolute", left: 1290, top: 860, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex", alignItems: "center",
        gap: 16, background: RENK.koyuYesil, color: "#fff", borderRadius: 999, padding: "12px 34px 12px 14px", whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>✓</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2 }}>A GOOD PLACE TO BEGIN</span>
      </div>
    </>
  );
};

export default S35;
