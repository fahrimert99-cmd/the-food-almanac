// Sahne 21 — meta.grafik: kadınlarda taş riskindeki değişim (çubuklar sırayla yükselir).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 260, GY = 490, GW = 1400, GH = 330;

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const b0 = K(0, "findings") + 0.5;
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: c.metin.startsWith("+") ? RENK.mercan : i === 1 ? RENK.koyuYesil : RENK.yesil, bas: b0 + i * 0.75 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "comparing"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const lej = [{ m: "LOWER RISK", r: RENK.yesil, b: K(0, "findings") }, { m: "HIGHER RISK", r: RENK.mercan, b: K(0, "findings") + 0.3 }];
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={202} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 264, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 332, display: "flex", gap: 20 }}>
        {lej.map((l) => {
          const [sc, al] = pop(t, l.b, 0.5);
          return (
            <div key={l.m} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              background: RENK.kagitAcik, border: `3px solid ${l.r}`, borderRadius: 999, padding: "6px 22px 6px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 20, height: 20, borderRadius: "50%", background: l.r }} />
              <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.lacivert }}>{l.m}</span>
            </div>
          );
        })}
      </div>
      <CubukGrafik t={t} bas={b0} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={46} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S21;
