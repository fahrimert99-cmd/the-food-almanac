// Sahne 45 — avuç içi porsiyon kuralı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPalm = K(0, "palm"), tServ = K(0, "serving"), tEasy = K(1, "easy way");
  const [sc, al] = pop(t, tEasy, 0.55);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tServ} capa={[1000, 740]} konum={[1520, 760]} metin="A SERVING" renk={RENK.mercan} />
        <Etiket t={t} bas={tPalm} capa={[950, 270]} konum={[1450, 330]} metin="YOUR PALM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.25} bitis={s.cumleler[1].bas - 0.1} metin="THE FDA SUGGESTS" x={90} y={150} boyut={60} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 90, top: 250, width: 330, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, padding: "10px 28px", whiteSpace: "normal", lineHeight: 1.25, borderRadius: 28,
        fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.koyuYesil,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>PALM: AN EASY WAY TO PICTURE IT</div>
    </>
  );
};
export default S45;
