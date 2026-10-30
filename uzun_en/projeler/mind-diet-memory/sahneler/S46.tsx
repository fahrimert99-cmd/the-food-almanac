// Sahne 46 — diğer hedefler: kuruyemiş, balık, zeytinyağı; sonra "puanlama sisteminden, tek tek test edilmedi".
import React from "react";
import { Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; metin: string; renk: string; ikon: "onay" | "carpi"; y: number }> = ({ t, bas, metin, renk, ikon, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 100, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 28px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={28} renk="#fff" />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.murekkep }}>{metin}</span>
    </div>
  );
};

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        <Etiket t={t} bas={K(0, "Nuts")} bitis={cik} capa={[610, 400]} konum={[560, 200]} metin="NUTS · 5 A WEEK" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fish")} bitis={cik} capa={[1000, 640]} konum={[1020, 330]} metin="FISH · 1+ A WEEK" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "olive")} bitis={cik} capa={[1420, 520]} konum={[1630, 780]} metin="MAIN COOKING OIL" renk={RENK.koyuYesil} />
      </Kamera>
      <Satir t={t} bas={K(1, "scoring")} metin="FROM A SCORING SYSTEM" renk={RENK.yesil} ikon="onay" y={80} />
      <Satir t={t} bas={K(1, "test")} metin="NOT TESTED ONE BY ONE" renk={RENK.mercan} ikon="carpi" y={170} />
    </>
  );
};

export default S46;
