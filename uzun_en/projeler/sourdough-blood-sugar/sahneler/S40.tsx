// Sahne 40 — sınırlar: kısa süreli çalışmalar, uzun vadeli sorular yanıtsız.
import React from "react";
import { Etiket, Hap, IkonYol, Kamera, RENK, SP, INTER, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; bitis?: number; soru?: boolean }> = ({
  t, bas, x, y, metin, renk, bitis = 1e9, soru,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a, display: "flex", alignItems: "center",
      gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 999,
      padding: "10px 28px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
        <IkonYol ad={soru ? "soru" : "carpi"} boyut={28} renk="#fff" kalinlik={6} />
      </span>
      {metin}
    </div>
  );
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [0, 80, 1920], [60, 110, 1800]);
  const bit = K(1, "None") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kp}>
        <Etiket t={t} bas={K(0, "single meals")} bitis={bit} capa={[1120, 820]} konum={[1100, 620]} metin="SINGLE MEALS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "week")} bitis={bit} capa={[1560, 480]} konum={[1560, 300]} metin="A WEEK OR TWO" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "sourdough")} capa={[540, 450]} konum={[760, 300]} metin="SOURDOUGH" renk={RENK.yesil} />
      </Kamera>
      <Pil t={t} bas={K(0, "not years")} bitis={bit} x={1320} y={170} metin="NOT YEARS" renk={RENK.mercan} />
      <Pil t={t} bas={K(1, "long-term")} x={100} y={140} metin="LONG-TERM A1C" renk={RENK.lacivert} soru />
      <Pil t={t} bas={K(1, "heart")} x={100} y={230} metin="HEART HEALTH" renk={RENK.lacivert} soru />
    </>
  );
};
export default S40;
