// Sahne 49 — İpucu 1: bütün meyve (Harvard verisi: bütün meyve daha düşük, meyve suyu daha yüksek diyabet riski).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const Rozet: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 60, top: 50, width: 112, height: 112, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", fontFamily: ANTON, fontSize: 72, display: "flex", alignItems: "center", justifyContent: "center",
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHerb = K(2, "whole"), tDus = K(2, "lower"), tSu = K(2, "juice"), tYuk = K(2, "higher");
  const [s1, a1] = pop(t, tDus, 0.5), [s2, a2] = pop(t, tYuk, 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={tHerb} capa={[330, 430]} konum={[290, 262]} metin="ORANGE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "fruits")} capa={[800, 420]} konum={[820, 240]} metin="APPLE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "fruits") + 0.2} capa={[1500, 480]} konum={[1520, 290]} metin="BLUEBERRIES" renk={RENK.yesil} />
        <Etiket t={t} bas={tSu} capa={[1090, 470]} konum={[1090, 300]} metin="JUICE" renk={RENK.mercan} />
      </Kamera>
      <Rozet t={t} n="1" />
      <Baslik t={t} bas={K(1, "eat it")} metin="EAT IT WHOLE" x={210} y={108} boyut={88} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 840, top: 66, transform: `scale(${s1})`, transformOrigin: "0% 50%",
        opacity: a1 * (t < tSu ? 1 : 0) }}>
        <Hap metin="LOWER DIABETES RISK" renk={RENK.yesil} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1090, top: 66, transform: `translateX(-50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="HIGHER RISK" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};
export default S49;
