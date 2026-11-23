// Sahne 16 — 26 yıl takip, 2 milyon+ kişi-yıl, 6.529 kalp krizi (2.431 kadın + 4.098 erkek).
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const out = c[1].bas - 0.15;
  const tAll = K(1, "all,");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1740])}>
        <Etiket t={t} bas={K(0, "follow-up,")} bitis={out} capa={[420, 330]} konum={[780, 130]} metin="FOLLOW-UP" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "heart")} capa={[880, 760]} konum={[1130, 560]} metin="HEART ATTACKS" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle */}
      <BaslikBlok t={t} bas={K(0, "26")} bitis={out} satirlar={["26 YEARS", "OF FOLLOW-UP"]} x={1130} y={150} boyut={96} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(0, "two")} bitis={out} vurgu="> 2 MILLION" not="person-years of follow-up" x={1480} y={400} genislik={560} boyut={96} />
      <div style={{ position: "absolute", left: 1130, top: 640, display: "flex", gap: 16, opacity: pop(t, K(0, "fatal"), 0.5)[1] * (t > out ? 0 : 1) }}>
        {["FATAL", "NON-FATAL"].map((m, i) => (
          <div key={m} style={{ transform: `scale(${pop(t, K(0, i ? "non-fatal" : "fatal"), 0.5)[0]})`, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
            borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep }}>{m}</div>
        ))}
      </div>
      {/* 2. cümle */}
      <VurguRozet t={t} bas={tAll} vurgu="6,529" not="heart attacks counted" x={1480} y={170} genislik={560} boyut={150} renk={RENK.mercan} />
      {[{ ifade: "2,431", ad: "2,431", alt: "WOMEN", renk: RENK.mercan }, { ifade: "4,098", ad: "4,098", alt: "MEN", renk: RENK.koyuYesil }].map((g, i) => {
        const [sc, al] = pop(t, K(1, g.ifade), 0.5);
        return (
          <div key={g.alt} style={{ position: "absolute", left: 1210 + i * 320, top: 560, width: 290, transform: `scale(${sc})`, opacity: al, textAlign: "center",
            background: "#FCF8EC", border: `4px solid ${g.renk}`, borderRadius: 24, padding: "8px 0 12px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
            <div style={{ fontFamily: ANTON, fontSize: 84, lineHeight: 1.1, color: g.renk }}>{g.ad}</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{g.alt}</div>
          </div>
        );
      })}
    </>
  );
};

export default S16;
