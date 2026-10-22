// Sahne 21 — lif grubu: çeşitlilik aynı, 19 protein düşmedi; fermente grupla kıyas.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFiber = K(0, "fiber"), tDiv = K(1, "diversity"), tPro = K(1, "those"), tFerm = K(1, "fermented");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tDiv} capa={[760, 330]} konum={[1500, 190]} metin="DIVERSITY ABOUT SAME" renk={RENK.altin} />
        <Etiket t={t} bas={tPro} capa={[920, 470]} konum={[1500, 310]} metin="19 PROTEINS DID NOT FALL" renk={RENK.mercan} />
        <Etiket t={t} bas={tFerm} capa={[1290, 500]} konum={[1580, 640]} metin="FERMENTED GROUP" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tFiber} metin="HIGH FIBER GROUP" x={960} y={110} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S21;
