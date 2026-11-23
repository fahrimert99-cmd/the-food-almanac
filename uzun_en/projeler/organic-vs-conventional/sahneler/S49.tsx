// Sahne 49 — Dirty Dozen rehberi: üç ürün etiketi + "the rest" sepeti
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTwo = K(0, "Two"), tIf = K(1, "If"), tDirty = K(1, "Dirty"), tRough = K(1, "rough"), tPut = K(2, "Put");
  const tSpin = K(2, "spinach"), tStraw = K(2, "strawberries"), tApple = K(2, "apples"), tRest = K(2, "buy the rest");
  const [sc, al] = pop(t, tTwo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1780])}>
        <Etiket t={t} bas={tSpin} capa={[230, 330]} konum={[300, 150]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={tStraw} capa={[420, 640]} konum={[1060, 700]} metin="STRAWBERRIES" renk={RENK.mercan} />
        <Etiket t={t} bas={tApple} capa={[640, 545]} konum={[1060, 600]} metin="APPLES" renk={RENK.mercan} />
        <Etiket t={t} bas={tRest} capa={[960, 330]} konum={[1450, 640]} metin="THE REST: YOUR CHOICE" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 56, top: 56, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 54, transform: `scale(${sc})`, opacity: al }}>2</div>
      <BaslikBlok t={t} bas={tIf} satirlar={["ORGANIC FOR", "TOP FOODS"]} x={1270} y={190} boyut={104} />
      <VurguRozet t={t} bas={tDirty} bitis={tPut} vurgu="DIRTY DOZEN" x={1500} y={470} genislik={560} boyut={96} renk={RENK.mercan} />
      <Not t={t} bas={tRough} bitis={tPut} metin="A rough guide" x={1500} y={650} hiza="orta" boyut={34} />
    </>
  );
};

export default S49;
