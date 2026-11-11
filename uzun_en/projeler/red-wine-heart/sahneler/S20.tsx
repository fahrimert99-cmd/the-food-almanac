// Sahne 20 — iki kadeh: kadınlarda risk daha erken (%21), erkeklerde ≈3 içki.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Cetvel kalıntıları (sahte rakamlar) görselden örneklenen renklerle örtülür
const Yama: React.FC<{ x: number; y0: number; y1: number }> = ({ x, y0, y1 }) => {
  const yat = (r: string) => `linear-gradient(to right, transparent 0%, ${r} 22%, ${r} 78%, transparent 100%)`;
  return (
    <>
      <div style={{ position: "absolute", left: x - 30, top: y0, width: 120, height: 783 - y0, background: yat("#FBFCDD") }} />
      <div style={{ position: "absolute", left: x - 30, top: 782, width: 120, height: y1 - 782, background: yat("#FAD8A8") }} />
    </>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tW = K(1, "In women"), tM = K(2, "In men");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 10, 1900], [60, 50, 1790])}>
        <Yama x={440} y0={110} y1={870} />
        <Yama x={1010} y0={230} y1={870} />
      </Kamera>
      <Etiket t={t} bas={K(0, "men")} capa={[1270, 860]} konum={[1270, 915]} metin="MEN" renk={RENK.lacivert} boyut={30} />
      <Etiket t={t} bas={K(0, "women")} capa={[680, 860]} konum={[680, 915]} metin="WOMEN" renk={RENK.mercan} boyut={30} />
      <BaslikBlok t={t} bas={tW} bitis={tM - 0.1} satirlar={["WOMEN: RISK", "STARTS SOONER"]} x={960} y={90} boyut={76} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} satirArasi={1.0} />
      <VurguRozet t={t} bas={K(1, "21 percent") - 0.1} vurgu="+21%" not="AT 2–3 DRINKS A DAY" x={240} y={400} genislik={400} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(2, "about three") - 0.1} vurgu="≈ 3 DRINKS" not="FOR MEN" x={1650} y={400} genislik={420} boyut={84} renk={RENK.lacivert} />
    </>
  );
};

export default S20;
