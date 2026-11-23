// Sahne 35 — zencefilli gazoz: toplu dava.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(1, "class action")} capa={[465, 190]} konum={[1500, 190]} metin="CLASS ACTION" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "real ginger")} capa={[760, 430]} konum={[1500, 350]} metin="“REAL GINGER” CLAIM" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "missing")} capa={[960, 850]} konum={[1500, 510]} metin="NOT IN THE LIST" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "ginger")} bitis={K(1, "class") - 0.1} satirlar={["GINGER ALE", "ON TRIAL"]} x={1500} y={700} boyut={104}
        hiza="orta" renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S35;
