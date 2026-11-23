// Sahne 34 — Fare ve laboratuvar, insan değil: fincandan beyne ulaşan iz kanıtlanmamış.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "no study"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(1, "cup of tea")} capa={[700, 800]} konum={[1180, 790]} metin="A CUP OF TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "brain")} capa={[890, 110]} konum={[1300, 170]} metin="BRAIN" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "mice")} satirlar={["MICE,", "NOT PEOPLE"]} x={1860} y={330} boyut={112} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 1480, top: 600, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NO STUDY FOUND" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S34;
