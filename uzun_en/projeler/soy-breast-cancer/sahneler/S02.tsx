// Sahne 2 — Uyarı: büyüteç, şişe ve tofu; başlık sağ altta
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        {/* defter kapağındaki sahte yazıyı kâğıt tonuyla örter */}
        <div style={{ position: "absolute", left: 160, top: 735, width: 210, height: 120,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #EFE3CC 0%, #EFE3CC 62%, rgba(239,227,204,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "soy")} capa={[827, 650]} konum={[1500, 620]} metin="TOFU" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "experiments")} capa={[430, 640]} konum={[250, 400]} metin="EXPERIMENTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "catch")} capa={[880, 335]} konum={[1230, 240]} metin="THE CATCH" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "warning")} metin="THE" x={1860} y={760} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "warning") + 0.15} metin="WARNING" x={1860} y={876} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S02;
