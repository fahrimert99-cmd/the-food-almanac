// Sahne 43 — doğal olarak glütensiz yiyecekler; paketli ikameler ve çölyaklar için besin dikkati.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, INTER, sol } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDogal = K(0, "gluten-free");
  const tPaket = K(2, "packaged");
  const tCeliac = K(3, "celiac");
  const tBesin = K(3, "nutrients");
  const bit = 9.0;
  const [sc, al] = pop(t, tBesin, 0.55);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(1, "fruit")} bitis={bit} capa={[690, 385]} konum={[1010, 310]} metin="FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "vegetables")} bitis={bit} capa={[640, 140]} konum={[1020, 180]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "beans")} bitis={bit} capa={[640, 505]} konum={[1060, 440]} metin="BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "eggs")} bitis={bit} capa={[815, 565]} konum={[1060, 560]} metin="EGGS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "fish")} bitis={bit} capa={[600, 760]} konum={[1060, 700]} metin="FISH" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tDogal - 0.7} bitis={bit} metin="NATURALLY" x={1290} y={120} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDogal - 0.5} bitis={bit} metin="GLUTEN-FREE" x={1290} y={218} boyut={88} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tPaket - 0.2} metin="PACKAGED" x={1290} y={160} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPaket} metin="SUBSTITUTES" x={1290} y={258} boyut={88} renk={RENK.altin} />
      <Baslik t={t} bas={tCeliac} metin="FOR CELIAC DISEASE" x={1290} y={420} boyut={40} renk={RENK.gri} font="inter" agirlik={800} aralik={3} />
      <Ikon t={t} bas={tBesin} ad="uyari" x={1340} y={560} boyut={84} zemin={RENK.altin} />
      <div style={{ position: "absolute", left: 1410, top: 520, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        fontFamily: INTER, fontWeight: 800, fontSize: 38, lineHeight: 1.2, color: RENK.lacivert, width: 440 }}>
        SOME NUTRIENTS NEED ATTENTION
      </div>
    </>
  );
};

export default S43;
