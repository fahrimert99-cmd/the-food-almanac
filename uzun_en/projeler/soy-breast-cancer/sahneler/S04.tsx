// Sahne 4 — Kanal tanıtımı + soya nedir / neden endişe
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, ilerle, eout, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = s.cumleler[1].bas - 0.1;
  const a = eout(ilerle(t, 0.3, 0.6)) * (1 - eout(ilerle(t, bit, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "soy")} capa={[470, 570]} konum={[330, 440]} metin="SOYBEANS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "worried")} capa={[1100, 700]} konum={[1000, 520]} metin="WHY WORRIED?" renk={RENK.mercan} />
      </Kamera>
      {/* marka bandı: üstte kâğıt rengi yumuşak zemin */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1300, height: 330, opacity: a,
        WebkitMaskImage: "linear-gradient(to right, #000 65%, transparent 100%)",
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.9)} 65%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "The")} bitis={bit} metin={MARKA.ad.toUpperCase()} x={90} y={150} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};
export default S04;
