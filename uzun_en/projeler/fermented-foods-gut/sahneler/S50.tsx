// Sahne 50 — alışkanlık 1: sade seç. Üstte kâğıt şeridi içinde numara + başlık, nesnelere etiketler.
import React from "react";
import { Baslik, ANTON, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "one"), 0.5);
  const tSade = K(1, "choose"), tSeker = K(3, "then");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(2, "plain yogurt")} capa={[930, 540]} konum={[960, 880]} metin="PLAIN YOGURT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "fruit")} capa={[1580, 560]} konum={[1660, 380]} metin="YOUR OWN FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "nuts")} capa={[330, 700]} konum={[300, 480]} metin="A FEW NUTS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 200,
        background: `linear-gradient(to top, ${kagit(0)}, ${kagit(0.96)} 55%)` }} />
      <div style={{ position: "absolute", left: 470, top: 40, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>1</div>
      <Baslik t={t} bas={tSade} bitis={tSeker - 0.1} metin="CHOOSE PLAIN" x={600} y={92} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tSeker} metin="YOU DECIDE THE SUGAR" x={600} y={92} boyut={92} renk={RENK.lacivert} />
    </>
  );
};

export default S50;
