// Sahne 57 — federal kural yok; USDA "best if used by" kalite tarihi.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const yama = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
  background: `radial-gradient(ellipse 50% 50% at 50% 50%, #EEE9DB 0%, #EEE9DB 60%, ${kagit(0)} 100%)`,
});

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFed = K(0, "federal"), tUsda = K(1, "recommends");
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        {/* süt kutusundaki anlamsız yazılar örtülür */}
        <div style={yama(770, 205, 130, 60)} />
        <div style={yama(560, 215, 90, 60)} />
        <div style={yama(660, 728, 80, 120)} />
      </Kamera>
      <Etiket t={t} bas={K(0, "infant")} bitis={tFed + 1.5} capa={[1300, 430]} konum={[1640, 400]} metin="INFANT FORMULA" renk={RENK.lacivert} />
      <Baslik t={t} bas={tFed} bitis={tUsda - 0.2} metin="NO FEDERAL DATE RULE" x={960} y={100} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "best")} metin="BEST IF USED BY" x={960} y={100} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={K(1, "quality")} capa={[610, 520]} konum={[280, 420]} metin="A QUALITY DATE" renk={RENK.altin} />
    </>
  );
};

export default S57;
