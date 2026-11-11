// Sahne 52 — alışkanlık 1: durulama yok; paketten tavaya; kâğıt havluyla kurula.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSkip = K(1, "skip"), tChick = K(2, "chicken"), tPan = K(2, "pan"), tPat = K(3, "paper towels"), tThrow = K(3, "throw");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={tChick} bitis={tPat - 0.2} capa={[650, 700]} konum={[600, 900]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={tPan} bitis={tPat - 0.2} capa={[1500, 560]} konum={[1700, 780]} metin="STRAIGHT TO THE PAN" renk={RENK.lacivert} boyut={24} />
        <Etiket t={t} bas={tPat} capa={[760, 480]} konum={[900, 230]} metin="PAPER TOWELS" renk={RENK.altin} />
        <Etiket t={t} bas={tThrow} capa={[1400, 230]} konum={[1180, 110]} metin="THROW AWAY" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 20, width: 100, height: 100, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>1</div>
      <Baslik t={t} bas={tSkip} metin="SKIP THE RINSE" x={190} y={72} boyut={76} renk={RENK.koyuYesil} />
    </>
  );
};

export default S52;
