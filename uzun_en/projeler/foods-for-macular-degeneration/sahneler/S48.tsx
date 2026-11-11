// Sahne 48 — Günde bir yumurta: tabak solda, başlık sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYum = K(1, "Eggs"), tBir = K(2, "one egg"), tDok = K(3, "doctor"), tUyar = K(3, "follow that advice");
  const [sc, al] = pop(t, tUyar, 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1780])}>
        <Etiket t={t} bas={tYum} bitis={tBir + 0.6} capa={[640, 380]} konum={[640, 170]} metin="EGGS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tBir} satirlar={["ONE EGG", "A DAY"]} x={1330} y={330} boyut={120} />
      <Not t={t} bas={tDok} metin={s.meta.baslik?.not ?? ""} x={1330} y={560} genislik={520} boyut={34} />
      <div style={{ position: "absolute", left: 1330, top: 700, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 26px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        FOLLOW THAT ADVICE
      </div>
    </>
  );
};

export default S48;
