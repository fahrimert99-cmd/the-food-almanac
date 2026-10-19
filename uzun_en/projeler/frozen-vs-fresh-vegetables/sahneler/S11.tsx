// Sahne 11 — pişirme bölümüne ön gönderme.
import React from "react";
import { Baslik, Hap, Kamera, RENK, SP, INTER, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "frozen"), 0.5);
  const [s2, a2] = pop(t, K(0, "or"), 0.5);
  const [s3, a3] = pop(t, K(0, "fresh."), 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        {/* alttaki anlamsız yazı şeridi kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 0, top: 944, width: 1920, height: 136,
          background: `linear-gradient(to bottom, ${kagit(0)} 0%, ${kagit(1)} 14%, ${kagit(1)} 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "cooking")} metin="COOKING" x={960} y={170} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "detail")} metin="ONE DETAIL" x={960} y={300} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 430, top: 370, display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="FROZEN" renk={RENK.lacivert} boyut={30} /></div>
        <span style={{ opacity: a2, transform: `scale(${s2})`, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.gri }}>OR</span>
        <div style={{ transform: `scale(${s3})`, opacity: a3 }}><Hap metin="FRESH" renk={RENK.yesil} boyut={30} /></div>
      </div>
    </>
  );
};

export default S11;
