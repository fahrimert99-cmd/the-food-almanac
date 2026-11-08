// Sahne 49 — makul okuma: kimler doktora danışmalı; diğerleri için açık soru. Steteskop, defter, bardak.
import React from "react";
import { Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "doctor")} capa={[570, 470]} konum={[330, 200]} metin="DOCTOR OR PHARMACIST" renk={RENK.koyuYesil} boyut={26} />
        <Etiket t={t} bas={K(1, "open")} capa={[1390, 600]} konum={[1480, 780]} metin="OPEN QUESTION" renk={RENK.altin} />
      </Kamera>
      <Liste t={t} x={620} y={60} aralik={80} boyut={30} isaret="nokta" genislik={580} ogeler={[
        { bas: K(0, "heart"), metin: "HEART DISEASE", renk: RENK.mercan },
        { bas: K(0, "clotting"), metin: "CLOTTING CONDITION", renk: RENK.mercan },
        { bas: K(0, "blood"), metin: "BLOOD THINNERS", renk: RENK.mercan },
      ]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1480, top: 885, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="NOT A PROVEN DANGER" renk={RENK.yesil} boyut={28} />
        </div>
      )}
    </>
  );
};

export default S49;
