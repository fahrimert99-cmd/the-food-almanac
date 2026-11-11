// Sahne 15 — kontrol grubu: kalça yoğunluğu %1,1 düştü (tabak görseli).
import React from "react";
import { BaslikBlok, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, INTER, IkonYol } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tNo = K(0, "no prunes"), tDens = K(0, "total hip"), tPct = K(0, "1.1"), tLoss = K(1, "the loss");
  const [sc, al] = pop(t, tLoss, 0.55);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1790])} />
      <BaslikBlok t={t} bas={tNo - 0.3} satirlar={["NO", "PRUNES"]} x={1860} y={170} boyut={110} hiza="sag" />
      <Not t={t} bas={tDens} metin="TOTAL HIP BONE DENSITY" x={1860} y={440} hiza="sag" boyut={28} agirlik={800} renk={RENK.gri} genislik={440} />
      <VurguRozet t={t} bas={tPct - 0.2} vurgu={b?.vurgu ?? "–1.1%"} not="after 12 months" x={1640} y={530} genislik={400} renk={RENK.mercan} />
      <div style={{ position: "absolute", right: 60, top: 790, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "8px 26px 8px 10px",
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 38, height: 38, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="ok" boyut={24} renk="#fff" kalinlik={7} />
        </span>
        THE LOSS TO SLOW
      </div>
    </>
  );
};

export default S15;
