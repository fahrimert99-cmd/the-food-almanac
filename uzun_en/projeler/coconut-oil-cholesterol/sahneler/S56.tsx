// Sahne 56 — kapanış önerisi: günlük pişirmede zeytin/kanola, hindistan cevizi yağı ara sıra.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Kendi hap bileşenimiz (senkron, arka planlı)
const Pill: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik1 = K(1, "Keep") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1810])}>
        <Etiket t={t} bas={K(0, "olive")} bitis={cik1} capa={[850, 820]} konum={[420, 650]} metin="OLIVE OR CANOLA OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "coconut")} capa={[310, 300]} konum={[330, 480]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "better-supported")} bitis={cik1} satirlar={["BETTER-", "SUPPORTED"]} x={1860} y={440} boyut={80} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.15} />
      <Pill t={t} bas={K(1, "occasional")} metin="OCCASIONAL FLAVOR" x={330} y={600} renk={RENK.altin} />
      <Pill t={t} bas={K(1, "talk")} metin="TALK WITH YOUR DOCTOR" x={1480} y={880} renk={RENK.lacivert} />
    </>
  );
};

export default S56;
