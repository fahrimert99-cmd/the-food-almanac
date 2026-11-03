// Sahne 17 — 2013 incelemesinin yazarları: doz ve süre belirsiz, yüksek değişkenlik kullanımı sınırlıyor.
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Defterin sol sayfasındaki satır kartı
const Satir: React.FC<{ t: number; bas: number; y: number; ad: string }> = ({ t, bas, y, ad }) => {
  const p = eout(ilerle(t, bas, 0.5));
  if (p <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 18, top: y, width: 384, opacity: p, transform: `translateX(${(1 - p) * -30}px)`,
      display: "flex", alignItems: "center", gap: 16, borderTop: `2px solid ${RENK.altin}`, paddingTop: 14 }}>
      <span style={{ width: 54, height: 54, flex: "none", borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="soru" boyut={34} renk="#fff" />
      </span>
      <div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.lacivert }}>{ad}</div>
        <div style={{ fontFamily: ANTON, fontSize: 50, lineHeight: 1.1, color: RENK.mercan }}>UNCLEAR</div>
      </div>
    </div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAuth = K(0, "authors"), t2013 = K(0, "2013"), tDose = K(0, "best dose"), tDur = K(0, "duration"), tVar = K(0, "high variation"), tUse = K(0, "used in practice");
  const pK = eout(ilerle(t, tDose - 0.1, 0.5));
  const [sv, av] = pop(t, tVar, 0.55);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])}>
        <Etiket t={t} bas={tAuth} capa={[1480, 330]} konum={[1640, 190]} metin="THE AUTHORS" renk={RENK.lacivert} />
        <Etiket t={t} bas={t2013} capa={[1000, 190]} konum={[1130, 110]} metin="2013 REVIEW" renk={RENK.altin} />
        {/* sol sayfa: kâğıt kart, içinde belirsiz doz ve süre */}
        <div style={{ position: "absolute", left: 520, top: 300, width: 420, height: 330, opacity: pK, background: RENK.kagitAcik,
          borderRadius: 18, border: `3px solid ${RENK.lacivert}`, boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
          <Satir t={t} bas={tDose} y={26} ad="BEST DOSE" />
          <Satir t={t} bas={tDur} y={176} ad="BEST DURATION" />
        </div>
      </Kamera>
      <div style={{ position: "absolute", left: 1480, top: 790, width: 400, transform: `scale(${sv})`, transformOrigin: "50% 0", opacity: av,
        background: RENK.kagitAcik, border: `4px solid ${RENK.mercan}`, borderRadius: 26, padding: "14px 20px 18px", textAlign: "center",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 58, lineHeight: 1.1, color: RENK.mercan }}>HIGH VARIATION</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1, color: RENK.lacivert, opacity: eout(ilerle(t, tUse - 1.2, 0.5)) }}>LIMITS USE IN PRACTICE</div>
      </div>
    </>
  );
};
export default S17;
