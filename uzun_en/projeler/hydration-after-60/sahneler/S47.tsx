// Sahne 47 — Diüretik öğleden sonra; dozu doktora/eczacıya danış. Hap kutusu yazı kusurları etiketlerle örtülü.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "diuretic"), t2 = K(0, "mid"), t3 = K(1, "ask");
  const ust = t < 0.9 ? "WATER PILL" : t < t1 ? "WATER PILL" : "DIURETIC";
  const alt = t < t2 ? "WHEN?" : "MID–LATE AFTERNOON";
  const strip = (y: number, m: string, renk: string) => (
    <div style={{ position: "absolute", left: 710, top: y, transform: "translate(-50%, -50%)", opacity: 1 }}>
      <Hap metin={m} renk={renk} boyut={26} style={{ minWidth: 430, justifyContent: "center", boxShadow: "none", border: `3px solid ${RENK.murekkep}` }} />
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {strip(522, ust, RENK.altin)}
        {strip(654, alt, RENK.yesil)}
        <div style={{ position: "absolute", left: 758, top: 806, width: 46, height: 52, borderRadius: "50%",
          background: "radial-gradient(#C49A66 55%, rgba(196,154,102,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "not")} capa={[1480, 640]} konum={[1560, 300]} metin="NOT JUST BEFORE BED" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={t3} satirlar={["ASK YOUR DOCTOR", "OR PHARMACIST"]} x={70} y={110} boyut={84} />
      <Not t={t} bas={K(1, "moving")} metin="BEFORE MOVING ANY DOSE" x={74} y={255} boyut={32} agirlik={800} />
    </>
  );
};
export default S47;
