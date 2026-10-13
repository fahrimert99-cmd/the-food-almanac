// Sahne 25 — iki kavanoz: büyük (LDL) ve küçük parçacıklar; ortada yumurta.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBigger = K(0, "bigger"), tLarge = K(1, "large"), tLess = K(1, "less harmful"), tSmall = K(1, "small");
  const bitis1 = tLarge - 0.3;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1730, top: 1000, width: 190, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tLarge} capa={[520, 640]} konum={[800, 440]} metin="LARGE LDL" renk={RENK.yesil} />
        <Etiket t={t} bas={tSmall} capa={[1390, 760]} konum={[1130, 480]} metin="SMALL LDL" renk={RENK.mercan} />
      </Kamera>
      {/* 1. vuruş: büyük artış */}
      <Baslik t={t} bas={0.0} bitis={bitis1} metin="HYPER-RESPONDERS" x={960} y={130} boyut={40} renk={RENK.gri} hiza="orta" font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={tBigger} bitis={bitis1} metin="BIGGER RISE" x={960} y={215} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", inset: 0, transform: "rotate(-90deg)", transformOrigin: "1250px 190px" }}>
        <Ikon t={t} bas={tBigger + 0.2} bitis={bitis1} ad="ok" x={1250} y={190} boyut={70} zemin={RENK.altin} />
      </div>
      {/* 2. vuruş: büyük LDL parçacıkları */}
      <BaslikBlok t={t} bas={tLarge} satirlar={["LARGE", "LDL PARTICLES"]} x={960} y={100} boyut={80} hiza="orta" />
      <Not t={t} bas={tLess} metin="THOUGHT LESS HARMFUL" x={960} y={300} hiza="orta" boyut={40} renk={RENK.yesil} agirlik={800} />
    </>
  );
};

export default S25;
