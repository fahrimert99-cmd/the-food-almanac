// Sahne 55 — Fikir 4: sabah ilaçlarının zamanını eczacıya sor; kartı ilaç kutusunun yanına koy.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  const [s2, a2] = pop(t, K(2, "don't"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [60, 80, 1760])}>
        <Etiket t={t} bas={K(1, "morning")} bitis={K(2, "Write")} capa={[800, 640]} konum={[800, 200]} metin="MORNING MEDICINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "card")} bitis={K(2, "don't") - 0.1} capa={[640, 470]} konum={[640, 200]} metin="WRITE IT ON A CARD" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 50, top: 50, width: 100, height: 100, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", opacity: al, transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 62, border: `5px solid ${RENK.altin}` }}>4</div>
      <Baslik t={t} bas={K(1, "pharmacist")} bitis={K(1, "with") - 0.1} metin="ASK YOUR PHARMACIST" x={1860} y={125} boyut={64} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "with")} bitis={K(2, "Write")} metin="WITH FOOD OR WITHOUT?" x={1860} y={130} hiza="sag" boyut={40} agirlik={800} />
      <div style={{ position: "absolute", right: 60, top: 120, opacity: a2, transform: `scale(${s2})`, transformOrigin: "100% 50%", display: "flex",
        alignItems: "center", gap: 14, background: "#FCF8EC", border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px 10px 14px",
        fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap",
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={26} renk="#fff" kalinlik={7} />
        </span>
        DON'T SHIFT YOUR TIMES
      </div>
    </>
  );
};
export default S55;
