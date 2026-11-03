// Sahne 34 — Grafik (meta.grafik): sümüklü kumarin değerleri. Çubuklar adı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const bas = [K(0, "Ceylon") - 0.05, K(0, "cassia") - 0.05, K(0, "cassia") + 0.5];
  const renk = [RENK.yesil, RENK.mercan, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renk[i], bas: bas[i] }));
  const a = eout(ilerle(t, 0.1, 0.6));
  const [sc, al] = pop(t, K(0, "ten to eighteen"), 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.2} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 350, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 26px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)",
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>
        CASSIA: ROUGHLY 10–18× MORE
      </div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={300} y={500} w={1320} h={300} maks={3600} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: eout(ilerle(t, 1.0, 0.6)), textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S34;
