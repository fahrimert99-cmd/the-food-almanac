// Sahne 9 — SELL BY: gönüllü kalite tarihi, güvenlik son kullanma tarihi değil.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Alt solda küçük hap (ikonlu)
const Plaka: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 30px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="carpi" boyut={26} renk="#fff" kalinlik={7} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [100, 50, 1720])}>
        <Etiket t={t} bas={K(1, "voluntary")} capa={[1260, 567]} konum={[1130, 250]} metin="VOLUNTARY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "quality dates")} capa={[1420, 560]} konum={[1600, 250]} metin="QUALITY DATE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Sell")} metin="SELL BY" x={160} y={150} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "same")} metin="ON THE SAME LIST" x={164} y={232} boyut={38} agirlik={800} renk={RENK.altin} />
      <Plaka t={t} bas={K(1, "not a safety")} metin="NOT A SAFETY DEADLINE" renk={RENK.mercan} x={600} y={885} />
    </>
  );
};

export default S09;
