// Sahne 44 — günlük 400 mg sınırı ve duyarlılık: görsel tam kare, soldaki duvarda kartlar.
import React from "react";
import { Etiket, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, eout, ilerle, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHassas = K(1, "sensitivity"), tIlac = K(1, "medicines");
  const kapat = K(1, "But") - 0.1;
  const [sc, al] = pop(t, tIlac, 0.5);
  const a2 = al * sol(t, K(2, "Decaf") - 0.1);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      <VurguRozet t={t} bas={K(0, "400")} bitis={kapat} vurgu="400 mg" not="a day · most adults" x={520} y={95} genislik={400} />
      <Etiket t={t} bas={tHassas} bitis={K(2, "Decaf") - 0.1} capa={[1190, 600]} konum={[1520, 520]} metin="SENSITIVITY VARIES" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 270, top: 110, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: a2,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 22, padding: "16px 26px",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, lineHeight: 1.6,
        boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        MORE SENSITIVE:<br />· SOME MEDICINES<br />· SOME HEALTH CONDITIONS
      </div>
      <Etiket t={t} bas={K(2, "Decaf")} capa={[1190, 600]} konum={[1520, 520]} metin="DECAF: STILL A LITTLE" renk={RENK.yesil} />
    </>
  );
};

export default S44;
