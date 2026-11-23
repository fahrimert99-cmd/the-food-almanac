// Sahne 27 — "Hayır. Belirtiler gerçek": laboratuvar, üstte kâğıt şeritte kinetik yazılar.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(0, "No."), tReal = K(1, "symptoms"), tCause = K(2, "question");
  const tAus = K(3, "Australia"), tNam = K(3, "Biesiekierski"), tTest = K(3, "test");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [330, 349, 1300], [430, 349, 1160])}>
        <Etiket t={t} bas={tTest} capa={[910, 690]} konum={[960, 900]} metin="IS GLUTEN THE TRIGGER?" renk={RENK.altin} boyut={28} />
      </Kamera>
      {/* üst şerit: haritalardaki sahte yazıları örter */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 330,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tNo} bitis={tReal - 0.1} metin="NO." x={960} y={150} boyut={150} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tReal - 0.1} bitis={tCause - 0.1} metin="THE SYMPTOMS ARE REAL" x={960} y={150} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tCause} bitis={tAus - 0.1} metin="WHAT CAUSES THEM?" x={960} y={150} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tAus} metin="AUSTRALIA" x={960} y={115} boyut={90} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tNam} metin="JESSICA BIESIEKIERSKI" x={960} y={225} boyut={72} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S27;
