// Sahne 26 — olası nedenler: başlangıç tansiyonu, ilaçlar, günün saati; soru açık.
import React from "react";
import { Etiket, Ikon, INTER, Kamera, RENK, SP, Baslik, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Senkron açılan hap etiketi (ekran koordinatı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.45);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: a, display: "flex", alignItems: "center",
      gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px 10px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1830]);
  const bit = K(1, "But") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={p}>
        <Etiket t={t} bas={K(0, "time of day")} bitis={K(1, "unresolved")} capa={[540, 515]} konum={[860, 300]} metin="TIME OF DAY" renk={RENK.altin} />
      </Kamera>
      <Pil t={t} bas={K(0, "starting")} x={80} y={90} metin="STARTING PRESSURE" renk={RENK.lacivert} />
      <Pil t={t} bas={K(0, "medicines")} x={80} y={185} metin="MEDICINES" renk={RENK.mercan} />
      <Pil t={t} bas={K(0, "time of day")} x={80} y={280} metin="TIME OF DAY" renk={RENK.altin} />
      <Ikon t={t} bas={K(1, "question")} ad="soru" x={700} y={190} boyut={84} zemin={RENK.altin} />
      <Baslik t={t} bas={K(1, "unresolved") - 0.2} metin="STILL UNRESOLVED" x={760} y={190} boyut={64} renk={RENK.lacivert} />
    </>
  );
};

export default S26;
