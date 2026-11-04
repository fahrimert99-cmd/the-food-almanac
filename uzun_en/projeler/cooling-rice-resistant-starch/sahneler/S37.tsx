// Sahne 37 — test edilmeyenler: sağ panelde çarpılı maddeler (sağdaki dikiş kâğıtla örtülü).
import React from "react";
import { Baslik, IkonYol, INTER, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; metin: string; y: number; ad: "carpi" | "uyari"; renk: string }> = ({ t, bas, metin, y, ad, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 27, letterSpacing: 1.5,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ad} boyut={22} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1820])}>
        <div style={{ position: "absolute", left: 1250, top: -40, width: 900, height: 1200,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 8%, ${kagit(1)} 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "did not test")} metin="NOT YET" x={1860} y={150} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "did not test") + 0.2} metin="TESTED" x={1860} y={268} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Madde t={t} bas={K(1, "adults over")} metin="ADULTS OVER 60" y={430} ad="carpi" renk={RENK.mercan} />
      <Madde t={t} bas={K(1, "people with diabetes")} metin="PEOPLE WITH DIABETES" y={525} ad="carpi" renk={RENK.mercan} />
      <Madde t={t} bas={K(1, "medicines")} metin="MEDICINES: METFORMIN" y={620} ad="carpi" renk={RENK.mercan} />
      <Madde t={t} bas={K(2, "prediabetes")} metin="PREDIABETES: THIN" y={760} ad="uyari" renk={RENK.altin} />
    </>
  );
};

export default S37;
