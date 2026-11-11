// Sahne 55 — güvenlik notu: masa solda, yazılar sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, INTER, ANTON, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(1, "ask");
  const [sc, al] = pop(t, tAsk, 0.55);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        {/* stetoskop = doktor */}
        <Etiket t={t} bas={K(1, "doctor")} capa={[470, 430]} konum={[520, 640]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["SAFETY", "FIRST"]} x={1860} y={190} boyut={128} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1150} y={470} aralik={86} boyut={32} isaret="nokta" genislik={720}
        ogeler={[
          { bas: K(1, "cholesterol"), metin: "CHOLESTEROL MEDICINE", renk: RENK.altin },
          { bas: K(1, "blood"), metin: "BLOOD PRESSURE MEDICINE", renk: RENK.altin },
          { bas: K(1, "limit"), metin: "TOLD TO LIMIT FAT", renk: RENK.altin },
        ]} />
      <div style={{ position: "absolute", left: 1150, top: 770, width: 710, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: "#FCF8EC", border: `4px solid ${RENK.koyuYesil}`, borderRadius: 26, padding: "14px 26px 18px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 3, color: RENK.altin }}>BEFORE BIG CHANGES</div>
        <div style={{ fontFamily: ANTON, fontSize: 56, lineHeight: 1.1, color: RENK.koyuYesil }}>ASK YOUR DOCTOR OR PHARMACIST</div>
      </div>
    </>
  );
};

export default S55;
