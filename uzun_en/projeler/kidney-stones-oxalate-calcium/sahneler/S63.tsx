// Sahne 63 — özet: su, tuz, şekerli içecekler; taş tipine göre diyet, doktora danış.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBit = K(1, "But") - 0.25;
  const [sc, al] = pop(t, K(0, "sugary"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/63" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 60, 1740])}>
        <Etiket t={t} bas={K(0, "Water,")} bitis={tBit} capa={[740, 440]} konum={[1000, 230]} metin="WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "less")} bitis={tBit} capa={[440, 820]} konum={[330, 650]} metin="LESS SALT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[933, 627]} konum={[1130, 330]} metin="ASK YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      {al > 0 && t < tBit + 0.25 && (
        <div style={{ position: "absolute", left: 1480, top: 150, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
          background: "#FCF8EC", border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800,
          fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>FEWER SUGARY DRINKS</div>
      )}
      <Baslik t={t} bas={K(1, "depends")} metin="DEPENDS ON YOUR STONE" x={1860} y={140} boyut={76} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S63;
