// Sahne 51 — güvenlik notu: ilaç yerine geçmez
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "safety"), tIlac = K(1, "medicine"), tCik = K(1, "chocolate"), tPlease = K(2, "Please"),
    tDoc = K(2, "doctor"), tEcz = K(2, "pharmacist");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={tIlac} bitis={tPlease - 0.1} capa={[1130, 610]} konum={[1560, 600]} metin="YOUR MEDICINE" renk={RENK.mercan} />
        <Etiket t={t} bas={tCik} bitis={tPlease - 0.1} capa={[950, 720]} konum={[1560, 790]} metin="A FEW SQUARES" renk={RENK.altin} />
        <Etiket t={t} bas={tDoc} capa={[640, 730]} konum={[800, 860]} metin="ASK YOUR DOCTOR" renk={RENK.yesil} />
        <Etiket t={t} bas={tEcz} capa={[1150, 600]} konum={[1560, 700]} metin="OR PHARMACIST" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={["SAFETY", "FIRST"]} x={1860} y={260} boyut={120} hiza="sag" bitis={tPlease - 0.1} />
      <BaslikBlok t={t} bas={tPlease} satirlar={["DON'T CHANGE", "ANY MEDICINE"]} x={1860} y={260} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tPlease + 0.6} metin="because of this video" x={1860} y={470} hiza="sag" />
    </>
  );
};

export default S51;
