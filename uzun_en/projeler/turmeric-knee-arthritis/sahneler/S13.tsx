// Sahne 13 — pas ve kâse: tek boşluk (sertlik) ve her kişi için kanıt yok.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sp, ap] = pop(t, K(1, "formally"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={K(1, "stiffness")} capa={[560, 640]} konum={[400, 900]} metin="STIFFNESS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "turmeric")} capa={[1250, 520]} konum={[1640, 340]} metin="TURMERIC" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "gap")} bitis={6.4} metin="ONE GAP" x={90} y={190} boyut={130} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1500, top: 150, transform: `translate(-50%, 0) scale(${sp})`, opacity: ap,
        display: "flex", alignItems: "center", gap: 14 }}>
        <Ikon t={t} bas={K(1, "formally")} ad="carpi" x={-10} y={30} boyut={60} zemin={RENK.mercan} />
        <div style={{ marginLeft: 50 }}><Hap metin="NOT FORMALLY SHOWN" renk={RENK.mercan} boyut={28} /></div>
      </div>
      <BaslikBlok t={t} bas={K(2, "trial")} satirlar={["NO TRIAL PROVES", "THE SAME WAY", "IN EVERY PERSON"]} x={90} y={150} boyut={88}
        adim={0.9} renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S13;
