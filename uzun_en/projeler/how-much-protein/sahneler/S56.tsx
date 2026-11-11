// Sahne 56 — iki tabak: resmi pay ve uzman önerisi.
import React from "react";
import { Etiket, Hap, INTER, Kamera, RENK, SP, ANTON, VurguRozet, ilerle, eout, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Alttaki iki senkron hap (ekran koordinatı)
const HAPLAR = [
  { cum: 1, ifade: "exercise", metin: "MORE IF YOU EXERCISE", x: 640, renk: RENK.yesil },
  { cum: 1, ifade: "illness", metin: "OR LIVE WITH ILLNESS", x: 1280, renk: RENK.altin },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOver = K(1, "over 65");
  const aOver = eout(ilerle(t, tOver, 0.5));
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        {/* 1. vuruş: resmi pay, sol tabak */}
        <Etiket t={t} bas={K(0, "allowance")} bitis={K(1, "Experts") - 0.1} capa={[430, 650]} konum={[500, 880]} metin="OFFICIAL ALLOWANCE" renk={RENK.altin} />
        <VurguRozet t={t} bas={K(0, "0.8")} vurgu="0.8" not="grams per kilogram" x={500} y={250} renk={RENK.mercan} genislik={400} />
        {/* 2. vuruş: 65 yaş üstü, sağ tabak */}
        {aOver > 0 && (
          <div style={{ position: "absolute", left: 1400, top: 100, transform: `translate(-50%, ${(1 - aOver) * 14}px)`, opacity: aOver,
            background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, borderRadius: 999, padding: "4px 36px 8px",
            fontFamily: ANTON, fontSize: 60, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
            ADULTS OVER 65
          </div>
        )}
        <VurguRozet t={t} bas={K(1, "1.0")} vurgu="1.0–1.2" not="g/kg · at least" x={1400} y={235} renk={RENK.yesil} genislik={400} />
      </Kamera>
      {HAPLAR.map((h) => {
        const [sc, al] = pop(t, K(h.cum, h.ifade), 0.5);
        if (al <= 0) return null;
        return (
          <div key={h.metin} style={{ position: "absolute", left: h.x, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
            <Hap metin={h.metin} renk={h.renk} boyut={30} />
          </div>
        );
      })}
    </>
  );
};

export default S56;
