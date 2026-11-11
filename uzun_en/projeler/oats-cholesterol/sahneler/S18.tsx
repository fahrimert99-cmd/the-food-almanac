// Sahne 18 — Yüksek LDL ile başlayanda fayda daha büyük; düşük başlayanda değişim daha küçük (şematik).
import React from "react";
import { BaslikBlok, Kamera, RENK, SP, INTER, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tBas = K(0, "benefit"), tHigh = K(0, "higher"), tLow = K(1, "already"), tSmall = K(1, "smaller");
  const satir = (y: number, bas: number, bit: number, ad: string, uzun: number, renk: string, son: string) => {
    const a = eout(ilerle(t, bas, 0.5)), p = eout(ilerle(t, bit, 0.9));
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 1000, top: y, opacity: a, transform: `translateY(${(1 - a) * 12}px)` }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>{ad}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 10 }}>
          <div style={{ width: uzun * p, height: 38, borderRadius: 19, background: renk }} />
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: renk, opacity: p, whiteSpace: "nowrap" }}>{son}</div>
        </div>
      </div>
    );
  };
  const aTag = eout(ilerle(t, tHigh, 0.5));
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])} />
      <BaslikBlok t={t} bas={tBas} satirlar={b.satirlar} x={1000} y={200} boyut={104} />
      {satir(560, tHigh, tHigh + 0.3, "STARTS WITH HIGHER LDL", 560, RENK.yesil, "BIGGER DROP")}
      {satir(720, tLow, tSmall, "ALREADY LOW", 190, RENK.altin, "SMALLER CHANGE")}
      <div style={{ position: "absolute", left: 1000, top: 880, opacity: aTag, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "4px 16px" }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S18;
