// Sahne 54 — balık alerjisi
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840])}>
        {/* not defterindeki sahte yazı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 740, top: 625, width: 150, height: 70, borderRadius: "50%",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F4EBD2 0%, #F2E8CD 65%, rgba(242,232,205,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "skip")} capa={[690, 330]} konum={[1000, 250]} metin="SKIP FISH" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "ask")} capa={[1100, 780]} konum={[1250, 915]} metin="ASK YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "fish")} metin="FISH ALLERGY?" x={110} y={120} boyut={100} renk={RENK.lacivert} />
    </>
  );
};
export default S54;
