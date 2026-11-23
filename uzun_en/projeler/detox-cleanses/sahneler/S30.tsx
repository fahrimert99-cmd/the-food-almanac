// Sahne 30 — doktora ya da eczacıya danışın. Sağ boşlukta başlık, etiketler nesnelerde.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const [sc, al] = pop(t, K(1, "meaningful"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={cam}>
        <Etiket t={t} bas={K(0, "juice-heavy")} bitis={4.9} capa={[880, 560]} konum={[1400, 600]} metin="JUICE-HEAVY PLAN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "sounds healthy")} capa={[880, 560]} konum={[1400, 600]} metin="SOUNDS HEALTHY" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "ask")} satirlar={b.satirlar} x={1230} y={210} boyut={120} />
      <div style={{ position: "absolute", left: 1230, top: 470, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800,
        fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>MEANINGFUL POTASSIUM</div>
    </>
  );
};

export default S30;
