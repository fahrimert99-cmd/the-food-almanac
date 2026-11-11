// Sahne 39 — "tek büyük etiket fazla kaba"; dürüst cevap: hangileri ve günün ne kadarı.
import React from "react";
import { AbsoluteFill, Baslik, Ikon, INTER, Kamera, Ortu, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const KARTLAR = [
  { ifade: "which", metin: "WHICH ONES", renk: RENK.koyuYesil, x: 560 },
  { ifade: "how", metin: "HOW MUCH OF YOUR DAY", renk: RENK.altin, x: 1330 },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "honest");
  const tBit = tSon - 0.1;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={[0, 0, 1920]} />
      <Ortu a={1} />
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 70% at 50% 50%, #FBF8F1 0%, ${RENK.kagit} 60%, #EFE9DC 100%)` }} />
      {/* 1. vuruş: tek büyük etiket */}
      <Baslik t={t} bas={K(0, "scientists") - 0.3} bitis={tBit} metin="ONE BIG LABEL" x={960} y={330} boyut={150} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "say") + 0.1} bitis={tBit} metin="IS TOO BLUNT" x={960} y={500} boyut={150} hiza="orta" renk={RENK.mercan} />
      <Ikon t={t} bas={K(0, "blunt")} bitis={tBit} ad="carpi" zemin={RENK.mercan} x={960} y={680} />
      {/* 2. vuruş: dürüst cevap */}
      <Baslik t={t} bas={K(1, "honest")} metin="IT DEPENDS" x={960} y={200} boyut={130} hiza="orta" renk={RENK.koyuYesil} />
      {KARTLAR.map((k) => {
        const [sc, al] = pop(t, K(1, k.ifade), 0.5);
        return (
          <div key={k.metin} style={{ position: "absolute", left: k.x, top: 440, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
            background: RENK.kagitAcik, border: `4px solid ${k.renk}`, borderRadius: 30, padding: "40px 48px", width: 640, textAlign: "center",
            fontFamily: INTER, fontWeight: 800, fontSize: 54, letterSpacing: 2, lineHeight: 1.2, color: RENK.lacivert,
            boxShadow: "0 12px 30px rgba(48,40,34,0.16)" }}>{k.metin}</div>
        );
      })}
    </>
  );
};
export default S39;
