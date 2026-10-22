// Sahne 7 — sanayi şehri ve çayır; iki etiket, bölge ve soru hapı.
import React from "react";
import { Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, INTER, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitis = c[1].bas - 0.1;
  const [sc, al] = pop(t, K(1, "wondered"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "lower")} bitis={bitis} capa={[480, 350]} konum={[330, 80]} metin="LOWER DIVERSITY" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "higher")} bitis={bitis} capa={[700, 400]} konum={[800, 80]} metin="HIGHER INFLAMMATION" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "industrialized")} bitis={bitis} capa={[250, 640]} konum={[220, 790]} metin="INDUSTRIALIZED" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1415, top: 250, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "12px 30px",
        fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap",
        boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>CAN FOOD SHIFT BOTH?</div>
    </>
  );
};

export default S07;
