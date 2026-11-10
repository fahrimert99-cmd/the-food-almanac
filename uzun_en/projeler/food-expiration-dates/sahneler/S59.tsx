// Sahne 59 — buzdolabı: Listeria istisnası ve üç önlem (sağda başlık/rozet, sonra etiketler).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

// Paket üzerindeki bozuk baskıyı örten küçük kâğıt yamalar
const Yama: React.FC<{ x: number; y: number; w: number; h: number; r: string }> = ({ x, y, w, h, r }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, borderRadius: "50%",
    background: `radial-gradient(ellipse at 50% 50%, ${r} 0%, ${r} 62%, rgba(0,0,0,0) 100%)` }} />
);

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYas = K(1, "Adults 65"), tGrow = K(1, "grow in");
  const bit = K(2, "So") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Yama x={726} y={440} w={120} h={60} r="#EFE4D2" />
        <Yama x={712} y={680} w={110} h={56} r="#F1DFCB" />
        <Etiket t={t} bas={K(2, "40 degrees")} capa={[1230, 520]} konum={[1690, 400]} metin="40°F OR BELOW" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(2, "heat deli meat")} capa={[760, 500]} konum={[235, 500]} metin="HEAT DELI MEAT" renk={RENK.altin} boyut={24} />
        <Etiket t={t} bas={K(2, "pasteurized")} capa={[1200, 750]} konum={[1690, 760]} metin="PASTEURIZED" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Listeria")} bitis={bit} metin="LISTERIA" x={1860} y={250} boyut={96} renk={RENK.mercan} hiza="sag" />
      <VurguRozet t={t} bas={tYas} bitis={bit} vurgu="65+" not="HIGHER RISK" x={1680} y={330} genislik={340} />
    </>
  );
};

export default S59;
