// YouTube kapak görseli (1280x720): sağda gravür kapak görseli, solda kâğıt üstünde büyük başlık + vurgu rozeti.
// Girdi: tam.gen.json -> kapak {satirlar, vurgu, vurgu_alt, gorsel}.
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "./fontlar";
import { ANTON, INTER } from "./fontlar";
import marka from "./marka.gen.json";
import { kagit } from "./ortak";
import { RENK } from "./zaman";
import { TAM } from "./tam/veri";

export const Kapak: React.FC = () => {
  const k = TAM.kapak;
  const satirlar = k.satirlar.length ? k.satirlar : [marka.ad.toUpperCase()];
  const enUzun = Math.max(...satirlar.map((s) => s.length));
  const boyut = Math.floor(Math.min(150, 690 / (enUzun * 0.47), 500 / (satirlar.length * 1.02)));
  const yukseklik = satirlar.length * boyut * 1.02;
  const ust = 120 + (520 - yukseklik) / 2;
  return (
    <AbsoluteFill style={{ backgroundColor: RENK.kagit, overflow: "hidden" }}>
      {k.gorsel && (
        <Img src={staticFile(`img/${k.gorsel}.jpg`)} style={{ position: "absolute", left: 300, top: -10, width: 1280 * 1.03, height: 720 * 1.03,
          objectFit: "cover" }} />
      )}
      <div style={{ position: "absolute", inset: 0,
        background: `linear-gradient(90deg, ${kagit(1)} 0%, ${kagit(0.97)} 40%, ${kagit(0.55)} 58%, ${kagit(0)} 72%)` }} />
      <div style={{ position: "absolute", inset: 14, border: `4px solid ${RENK.altin}`, borderRadius: 18 }} />
      <div style={{ position: "absolute", left: 54, top: 50, display: "flex", alignItems: "center", gap: 12, background: RENK.lacivert,
        color: "#fff", borderRadius: 999, padding: "9px 22px 9px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 4 }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
        {marka.ad.toUpperCase()}
      </div>
      {satirlar.map((s, i) => (
        <div key={i} style={{ position: "absolute", left: 54, top: ust + i * boyut * 1.02, fontFamily: ANTON, fontSize: boyut,
          lineHeight: `${boyut * 1.02}px`, whiteSpace: "nowrap",
          color: i === satirlar.length - 1 ? RENK.koyuYesil : RENK.lacivert }}>{s}</div>
      ))}
      {k.vurgu && (
        <div style={{ position: "absolute", left: 1010, top: 470, transform: "translate(-50%, -50%) rotate(-6deg)", width: 250, height: 250,
          borderRadius: "50%", background: RENK.mercan, border: "8px solid #FBF8F1", boxShadow: "0 14px 34px rgba(48,40,34,0.35)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <div style={{ fontFamily: ANTON, fontSize: k.vurgu.length > 4 ? 62 : 78, lineHeight: 1 }}>{k.vurgu}</div>
          {k.vurgu_alt && (
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 21, lineHeight: 1.15, textAlign: "center", marginTop: 8,
              maxWidth: 190, textTransform: "uppercase", letterSpacing: 1 }}>{k.vurgu_alt}</div>
          )}
        </div>
      )}
    </AbsoluteFill>
  );
};
