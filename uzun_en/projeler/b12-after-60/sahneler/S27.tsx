// Sahne 27 — grafik: 2+ yıl PPI / H2 blokeri kullananlarda B12 eksikliği tanısı olasılığı. Çubuklar sayı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar: Record<string, number> = { "H2 blockers": K(1, "25") - 0.05, PPIs: K(0, "65") - 0.05 };
  const cubuklar = g.cubuklar.map((c) => ({ ...c, renk: c.etiket === "PPIs" ? RENK.mercan : RENK.altin, bas: baslar[c.etiket] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "two"), 0.6));
  const [sL, aL] = pop(t, K(0, "odds") + 0.1, 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* gösterge: gözlemsel bağlantı, kesin neden değil */}
      <div style={{ position: "absolute", left: 160, top: 342, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "7px 24px 7px 8px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 40, height: 40, borderRadius: 10, background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ transform: "rotate(-90deg)", display: "flex" }}><IkonYol ad="ok" boyut={30} renk="#fff" kalinlik={7} /></span>
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.lacivert }}>HIGHER ODDS</span>
      </div>
      <CubukGrafik t={t} bas={1.2} cubuklar={cubuklar} x={300} y={470} w={1320} h={330} maks={75} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S27;
