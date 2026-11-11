// Sahne 52 — ipucu 1: baharat, ilaç değil.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.5);
  const tKeep = K(2, "Keep taking");
  const pK = eout(ilerle(t, tKeep, 0.5));
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [100, 60, 1720])}>
        <Etiket t={t} bas={K(1, "cinnamon")} capa={[1040, 430]} konum={[1610, 400]} metin="CINNAMON" renk={RENK.altin} />
      </Kamera>
      {/* 1 numaralı rozet */}
      <div style={{ position: "absolute", left: 120, top: 100, transform: `scale(${sb})`, opacity: ab, width: 108, height: 108, borderRadius: "50%",
        background: RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON,
        fontSize: 76, border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>1</div>
      <Baslik t={t} bas={K(1, "flavor,")} metin="FLAVOR, NOT MEDICINE" x={270} y={158} boyut={104} renk={RENK.koyuYesil} />
      {/* reçeteli tedaviye devam */}
      <div style={{ position: "absolute", left: 960, top: 870, transform: `translate(-50%, -50%) translateY(${(1 - pK) * 14}px)`, opacity: pK,
        display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999,
        padding: "10px 32px 10px 14px", whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        <IkonYol ad="onay" boyut={40} renk={RENK.yesil} />
        KEEP YOUR PRESCRIBED TREATMENT
      </div>
    </>
  );
};

export default S52;
