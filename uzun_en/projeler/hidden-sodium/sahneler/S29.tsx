// Sahne 29 — Besin Değerleri etiketi: sodyum mg / porsiyon, yanında % günlük değer. Sağda şematik etiket (örnek).
import React from "react";
import { ANTON, BaslikBlok, INTER, Kamera, RENK, SP, kagit, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCard = K(0, "Nutrition"), tMg = K(0, "milligrams"), tServ = K(0, "per serving"), tDv = K(1, "percent");
  const pCard = eout(ilerle(t, tCard - 0.1, 0.6));
  const [sMg, aMg] = pop(t, tMg, 0.5);
  const [sSv, aSv] = pop(t, tServ, 0.5);
  const [sDv, aDv] = pop(t, tDv, 0.55);
  const kutu = (a: number, sc: number): React.CSSProperties => ({ opacity: a, transform: `scale(${sc})`, transformOrigin: "50% 50%" });
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 800,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 12%, ${kagit(1)} 100%)` }} />
      <BaslikBlok t={t} bas={0.2} satirlar={["SODIUM", "PER SERVING"]} x={70} y={85} boyut={80} />
      {/* şematik Nutrition Facts etiketi: sayı yok */}
      <div style={{ position: "absolute", left: 1290, top: 190, width: 540, opacity: pCard, transform: `translateY(${(1 - pCard) * 30}px)`,
        background: "#FFFFFF", border: `5px solid ${RENK.murekkep}`, padding: "18px 26px 24px", boxShadow: "0 12px 30px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 64, color: RENK.murekkep, lineHeight: 1.1 }}>NUTRITION FACTS</div>
        <div style={{ height: 14, background: RENK.murekkep, margin: "10px 0 8px" }} />
        <div style={{ position: "relative", height: 130, display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: `4px solid ${RENK.murekkep}` }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 44, color: RENK.murekkep }}>Sodium</div>
          <div style={{ ...kutu(aMg, sMg), display: "flex", alignItems: "center", gap: 10, border: `4px solid ${RENK.altin}`, borderRadius: 14,
            padding: "4px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.altin }}>— MG</div>
          <div style={{ ...kutu(aDv, sDv), border: `4px solid ${RENK.yesil}`, borderRadius: 14, padding: "4px 16px",
            fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.yesil }}>— %</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontFamily: INTER, fontWeight: 700, fontSize: 26, color: RENK.gri }}>
          <span style={{ ...kutu(aSv, sSv), transformOrigin: "0 50%" }}>PER SERVING</span>
          <span style={{ ...kutu(aDv, sDv), transformOrigin: "100% 50%" }}>% DAILY VALUE</span>
        </div>
      </div>
      <div style={{ position: "absolute", left: 1290, top: 545, opacity: pCard, fontFamily: INTER, fontWeight: 800, fontSize: 24,
        letterSpacing: 4, color: RENK.gri }}>ILLUSTRATIVE</div>
    </>
  );
};
export default S29;
