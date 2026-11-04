// Sahne 7 — bakteri ve asit: mikroskop dairesi solda, başlıklar üstte.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const yama = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: x, top: y, width: w, height: h,
  background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(249,243,214,1) 0%, rgba(249,243,214,1) 55%, rgba(249,243,214,0) 100%)",
});

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTang = K(1, "tang");
  const tSindirim = K(1, "change how");
  const [sc, al] = pop(t, tTang, 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* daire yanındaki ok karalamaları ve sağ alttaki imzalar kâğıt yamayla örtülür */}
        <div style={yama(60, 250, 200, 280)} />
        <div style={yama(1430, 960, 520, 120)} />
        <Etiket t={t} bas={K(0, "bacteria")} bitis={K(0, "lactic") + 5} capa={[440, 287]} konum={[900, 420]} metin="BACTERIA" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lactic acid")} bitis={tTang - 0.2} metin="LACTIC ACID" x={780} y={105} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "organic")} bitis={tTang - 0.2} metin="+ ORGANIC ACIDS" x={780} y={190} boyut={58} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 780, top: 80, opacity: al * sol(t, tSindirim - 0.2), transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="THE TANG" renk={RENK.altin} boyut={40} />
      </div>
      <Ikon t={t} bas={tSindirim} ad="saat" x={110} y={655} zemin={RENK.altin} boyut={76} />
      <Baslik t={t} bas={tSindirim + 0.1} metin="MAY CHANGE" x={170} y={635} boyut={62} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSindirim + 0.28} metin="DIGESTION SPEED" x={170} y={700} boyut={46} renk={RENK.altin} />
    </>
  );
};

export default S07;
