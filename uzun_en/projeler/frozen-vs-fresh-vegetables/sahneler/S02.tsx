// Sahne 2 — iki kase: donmuş etiketi, ısıtma adımı, soru başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, INTER, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tIsi = K(0, "mostly");
  const tSoru = c[1].bas;
  const [sc, al] = pop(t, tIsi, 0.5);
  const solIsi = t > tSoru - 0.1 ? Math.max(0, 1 - (t - (tSoru - 0.1)) / 0.3) : 1;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [60, 40, 1800])}>
        {/* sağ alttaki imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1700, top: 930, width: 200, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "frozen")} bitis={tIsi - 0.1} capa={[1300, 480]} konum={[1330, 140]} metin="FROZEN, 60 DAYS" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümlenin ikinci yarısı: ısıtma adımı */}
      <div style={{ position: "absolute", left: 960, top: 80, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * solIsi,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "12px 32px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.mercan }} />
        MOSTLY THE QUICK HEATING STEP
      </div>
      <Baslik t={t} bas={tSoru} metin="WHICH IS BETTER?" x={960} y={120} boyut={112} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S02;
