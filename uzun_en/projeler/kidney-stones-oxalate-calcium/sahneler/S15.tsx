// Sahne 15 — idrar oksalatı: düşük kalsiyum grubunda yükseldi, normal kalsiyum grubunda düştü.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOx = K(0, "oxalate"), tRose = K(1, "rose"), tFell = K(1, "fell"), tCut = K(2, "Cutting");
  const sira = (bas: number, ok: boolean, metin: string, alt: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.55);
    return (
      <div style={{ position: "absolute", left: 1180, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 20, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 24, padding: "14px 30px 14px 16px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 70, height: 70, borderRadius: 16, background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ transform: `rotate(${ok ? -90 : 90}deg)`, display: "flex" }}><IkonYol ad="ok" boyut={46} renk="#fff" kalinlik={7} /></span>
        </span>
        <span>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1.5, color: renk }}>{metin}</div>
          <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 26, color: RENK.lacivert }}>{alt}</div>
        </span>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 25, 1800])}>
        <Etiket t={t} bas={tOx} bitis={tCut} capa={[730, 470]} konum={[1300, 260]} metin="URINARY OXALATE" renk={RENK.altin} />
      </Kamera>
      {sira(tRose, true, "OXALATE ROSE", "low-calcium group", RENK.mercan, 400)}
      {sira(tFell, false, "OXALATE FELL", "normal-calcium group", RENK.yesil, 570)}
      <BaslikBlok t={t} bas={tCut} satirlar={["CUTTING CALCIUM", "DID NOT CUT OXALATE"]} x={1180} y={830} boyut={50} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S15;
