// Sahne 34 — sınırlamalar: masa görseli, üst boş şeritte dört senkron vuruş.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const krem = "#EFE4C8";
const yama = (l: number, t: number, w: number, h: number) => (
  <div style={{ position: "absolute", left: l, top: t, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${krem} 0%, ${krem} 62%, rgba(239,228,200,0) 100%)` }} />
);

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(0, "leftover"), tAlt = K(0, "can't"), tB = K(1, "self-reported"), tC = K(2, "short"), tD = K(3, "pesticides");
  const [sc, al] = pop(t, tC, 0.5);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* anketin bozuk başlık yazıları örtülür */}
        {yama(450, 535, 450, 75)}
        {yama(710, 435, 170, 55)}
      </Kamera>
      <Baslik t={t} bas={tA} metin="LEFTOVER" x={150} y={85} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tA + 0.18} metin="CONFOUNDING" x={150} y={170} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={tAlt} metin="CAN'T BE RULED OUT" x={154} y={248} boyut={34} renk={RENK.lacivert} font="inter" agirlik={800} />
      <Etiket t={t} bas={tB} capa={[700, 640]} konum={[900, 110]} metin="SELF-REPORTED" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 900, top: 215, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="SHORT FOLLOW-UP" renk={RENK.altin} boyut={28} />
      </div>
      <Etiket t={t} bas={tD} capa={[1440, 400]} konum={[1450, 130]} metin="NO BODY PESTICIDE TESTS" renk={RENK.mercan} boyut={26} />
    </>
  );
};
export default S34;
