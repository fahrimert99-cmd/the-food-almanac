// Sahne 12 — sick quitters: figürler solda, sağda karışım mantığı
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800,
      fontSize: 34, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [60, 120, 1800], [20, 90, 1860])} />
      <Etiket t={t} bas={K(0, "sick")} capa={[290, 560]} konum={[300, 330]} metin="SICK QUITTER" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(0, "sick")} satirlar={["SICK", "QUITTERS"]} x={1860} y={170} boyut={100} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Hap t={t} bas={K(1, "lumped")} metin="SICK QUITTERS" renk={RENK.mercan} y={420} />
      <Hap t={t} bas={K(1, "lifelong")} metin="+ LIFELONG NON-DRINKERS" renk={RENK.yesil} y={510} />
      <Hap t={t} bas={K(1, "unhealthy")} metin="LOOKS UNHEALTHY" renk={RENK.lacivert} y={620} />
      <Hap t={t} bas={K(1, "light drinkers")} metin="LIGHT DRINKERS LOOK GOOD" renk={RENK.altin} y={720} />
      <Etiket t={t} bas={K(1, "light drinkers")} capa={[445, 680]} konum={[650, 420]} metin="LIGHT DRINKERS" renk={RENK.altin} />
    </>
  );
};
export default S12;
