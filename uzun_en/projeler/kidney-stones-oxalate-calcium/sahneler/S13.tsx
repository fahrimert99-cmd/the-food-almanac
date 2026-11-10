// Sahne 13 — iki bütün diyet karşılaştırıldı: hangi değişikliğin işe yaradığı bilinemez (yol ayrımı).
import React from "react";
import { kagit, Baslik, Etiket, Kamera, RENK, SP, ANTON, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMat = K(0, "matters"), tTwo = K(1, "two whole diets"), tWork = K(1, "did the work");
  const tHold = K(2, "Hold that"), tSalt = K(2, "salt"), tProt = K(2, "protein");
  const [sq, aq] = pop(t, tWork, 0.6);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [260, 60, 1400], [330, 110, 1260])}>
        <Etiket t={t} bas={tSalt} capa={[1173, 545]} konum={[1040, 690]} metin="SALT" renk={RENK.mercan} />
        <Etiket t={t} bas={tProt} capa={[1380, 640]} konum={[1480, 260]} metin="ANIMAL PROTEIN" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 230,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tMat} bitis={tTwo} metin="THAT DETAIL MATTERS" x={960} y={110} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tTwo} bitis={tHold} metin="TWO WHOLE DIETS" x={960} y={110} boyut={80} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 960, top: 380, transform: `translate(-50%,-50%) scale(${sq})`, opacity: aq,
        fontFamily: ANTON, fontSize: 150, color: RENK.altin, WebkitTextStroke: `3px ${RENK.kagitAcik}` }}>?</div>
      <Baslik t={t} bas={tHold} metin="WE'LL RETURN TO THIS" x={960} y={110} boyut={64} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S13;
