// Sahne 55 — Özet: NIH 2019 ve İngiltere 2025 denemeleri.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gec = c[1].bas - 0.15;
  const [s20, a20] = pop(t, K(0, "20") - 0.05, 0.5);
  const [sg, ag] = pop(t, K(0, "gain") - 0.1, 0.55);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 100, 1720])}>
        <Etiket t={t} bas={K(0, "ultra-processed")} bitis={gec} capa={[1500, 560]} konum={[1450, 400]} metin="ULTRA-PROCESSED MENU" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "2019")} bitis={gec} metin="2019 · NIH TRIAL" x={140} y={150} boyut={84} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 140, top: 215, transform: `scale(${s20})`, transformOrigin: "0 50%", opacity: a20 * (t < gec ? 1 : 0) }}>
        <Hap metin="20 ADULTS" renk={RENK.altin} boyut={32} />
      </div>
      <VurguRozet t={t} bas={K(0, "500") - 0.1} bitis={gec} vurgu="+500" not="CALORIES A DAY" x={1000} y={120} genislik={380} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 140, top: 310, transform: `scale(${sg})`, transformOrigin: "0 50%", opacity: ag * (t < gec ? 1 : 0) }}>
        <Hap metin="SMALL GAIN IN WEIGHT + BODY FAT" renk={RENK.mercan} boyut={30} />
      </div>
      <Baslik t={t} bas={K(1, "2025")} metin="2025 · ENGLAND" x={140} y={150} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "England")} metin="TRIAL" x={140} y={240} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "smaller") - 0.1} vurgu="SMALLER" not="BUT SIMILAR GAP IN WEIGHT LOSS" x={1000} y={120} genislik={560} boyut={96} renk={RENK.altin} />
    </>
  );
};

export default S55;
