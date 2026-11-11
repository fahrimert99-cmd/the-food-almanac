// Sahne 46 — ipucu 1: çikolata ilaç değildir
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "One."), tCandy = K(1, "candy"), tMed = K(1, "medicine."), tTrial = K(2, "trial"), tCaps = K(2, "capsule,");
  const tNoth = K(2, "nothing");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={tCandy} capa={[1440, 520]} konum={[1440, 190]} metin="CANDY BAR" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tMed} bitis={tTrial - 0.1} capa={[470, 520]} konum={[470, 130]} metin="MEDICINE" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tCaps} capa={[470, 520]} konum={[470, 130]} metin="BEST TRIAL: A CAPSULE" renk={RENK.koyuYesil} boyut={30} />
      </Kamera>
      <VurguRozet t={t} bas={tOne} vurgu="1" x={960} y={80} genislik={170} boyut={100} />
      <BaslikBlok t={t} bas={tMed + 0.1} bitis={tNoth - 0.1} satirlar={["NOT A", "MEDICINE"]} x={960} y={420} boyut={84} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={tMed + 0.5} bitis={tNoth - 0.1} ad="carpi" x={960} y={640} boyut={96} zemin={RENK.mercan} />
      <BaslikBlok t={t} bas={tNoth} satirlar={["NOT SHOWN TO", "PREVENT", "HEART ATTACKS"]} x={960} y={400} boyut={66} hiza="orta"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S46;
