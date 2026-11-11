// Sahne 40 — B12: günlük miktar, NIH notu, kan testi.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, INTER, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t > bitis ? Math.max(0, 1 - (t - bitis) / 0.35) : 1);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%",
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = s.cumleler[1].bas - 0.1, b2 = s.cumleler[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1780])}>
        {/* tepedeki sahte şişe boynu kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 690, top: 260, width: 140, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(2, "blood")} bitis={b2 + 3.6} capa={[470, 520]} konum={[300, 250]} metin="BLOOD TEST" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "2.4") - 0.1} bitis={b1} metin="2.4" x={1860} y={170} boyut={170} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(0, "micrograms.")} bitis={b1} metin="MICROGRAMS" x={1860} y={310} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "recommended")} bitis={b1} metin="B12 · DAILY AMOUNT · ADULTS" x={1860} y={410} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={4} />
      <Hapcik t={t} bas={K(1, "NIH")} bitis={b2} metin="NIH: NO HARM SHOWN" renk={RENK.yesil} x={1860} y={200} />
      <Hapcik t={t} bas={K(1, "high")} bitis={b2} metin="EVEN AT HIGH DOSES" renk={RENK.yesil} x={1860} y={290} />
      <Hapcik t={t} bas={K(1, "healthy")} bitis={b2} metin="HEALTHY PEOPLE" renk={RENK.altin} x={1860} y={380} />
      <Baslik t={t} bas={K(2, "ask")} metin="ASK YOUR DOCTOR" x={1860} y={190} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Hapcik t={t} bas={K(2, "metformin")} metin="ON METFORMIN" renk={RENK.mercan} x={1860} y={290} />
      <Hapcik t={t} bas={K(2, "acid")} metin="ON ACID REDUCERS" renk={RENK.mercan} x={1860} y={380} />
    </>
  );
};

export default S40;
