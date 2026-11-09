// Sahne 63 — sonuç: ipucu, kanıt değil; üç sakin adım.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const a = eout(ilerle(t, K(0, "interesting"), 0.6));
  return (
    <>
      <Kamera gorsel="tam/63" pencere={kam}>
        <Etiket t={t} bas={K(0, "Pickle")} capa={[320, 520]} konum={[270, 330]} metin="PICKLE JUICE" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1100, top: 80, width: 760, height: 760, opacity: a, background: "#FCF8EC",
        border: `4px solid ${RENK.altin}`, borderRadius: 30, boxShadow: "0 14px 34px rgba(48,40,34,0.22)" }} />
      <Baslik t={t} bas={K(0, "interesting")} metin="A CLUE," x={1480} y={200} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "not a proven")} metin="NOT A CURE" x={1480} y={320} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Liste t={t} x={1170} y={500} aralik={104} boyut={40} genislik={640} ogeler={[
        { bas: K(1, "patient"), metin: "BE PATIENT", renk: RENK.altin },
        { bas: K(1, "stretch"), metin: "STRETCH GENTLY", renk: RENK.yesil },
        { bas: K(1, "ask your doctor"), metin: "ASK YOUR DOCTOR", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S63;
