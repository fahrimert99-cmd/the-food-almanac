// Sahne 58 — Emin değilsen önce ara: telefon ve tabak etiketleri, ardından kapanış başlığı.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCall = K(0, "call your clinic"), tMeal = K(0, "before the meal"), tNot = K(0, "not after");
  const tSor = K(1, "questions");
  const [sn, an] = pop(t, tNot, 0.5);
  const kapat = tSor - 0.2;
  const sol_ = Math.max(0, Math.min(1, (kapat + 0.4 - t) / 0.4));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tCall} bitis={kapat} capa={[820, 520]} konum={[1250, 170]} metin="CALL YOUR CLINIC" renk={RENK.yesil} boyut={30} />
        <Etiket t={t} bas={tMeal} bitis={kapat} capa={[1330, 450]} konum={[1640, 290]} metin="BEFORE THE MEAL" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <div style={{ position: "absolute", left: 1640, top: 375, transform: `translate(-50%, -50%) scale(${sn})`, opacity: an * sol_ }}>
        <Hap metin="NOT AFTER" renk={RENK.mercan} boyut={28} />
      </div>
      <BaslikBlok t={t} bas={tSor} satirlar={["FOOD QUESTIONS", "ARE NORMAL"]} x={1090} y={190} boyut={100} />
    </>
  );
};

export default S58;
