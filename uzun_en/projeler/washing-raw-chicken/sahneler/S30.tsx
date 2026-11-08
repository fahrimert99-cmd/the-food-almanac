// Sahne 30 — uygulama bölümü tanıtımı: kısa rutin iki sorunu çözer (sıçrama + eller).
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPrat = K(0, "practical"), tRutin = K(0, "short routine"), tIki = K(0, "both problems");
  const tSplash = K(0, "splash"), tHands = K(0, "hands");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tSplash} capa={[1330, 420]} konum={[1330, 130]} metin="THE SPLASH" renk={RENK.mercan} boyut={32} />
        <Etiket t={t} bas={tHands} capa={[800, 740]} konum={[800, 900]} metin="THE HANDS" renk={RENK.yesil} boyut={32} />
      </Kamera>
      <Baslik t={t} bas={tPrat} metin="THE PRACTICAL PART" x={144} y={112} boyut={36} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={tRutin - 0.1} metin="A SHORT ROUTINE" x={140} y={210} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={tIki} metin="handles both problems" x={146} y={290} boyut={40} />
    </>
  );
};

export default S30;
