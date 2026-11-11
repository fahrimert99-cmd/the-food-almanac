// Sahne 20 — FRAX: kalça kırığı risk tahmini; kontrol kötüleşti, erik grupları sabit kaldı.
import React from "react";
import { Baslik, IkonYol, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; ok: "uyari" | "onay" }> = ({ t, bas, metin, renk, y, ok }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 26px 8px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ok} boyut={26} renk="#fff" kalinlik={7} />
      </span>
      {metin}
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={pencere} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Not t={t} bas={K(0, "hip fracture risk")} metin="HIP FRACTURE RISK ESTIMATE" x={150} y={120} boyut={28} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(0, "FRAX")} metin="FRAX" x={150} y={230} boyut={120} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "control group")} metin="CONTROL: WORSENED AT 6 MONTHS" renk={RENK.mercan} y={112} ok="uyari" />
      <Pil t={t} bas={K(2, "prune groups")} metin="PRUNE GROUPS: HELD STEADY" renk={RENK.yesil} y={196} ok="onay" />
    </>
  );
};

export default S20;
