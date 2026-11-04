// Sahne 19 — Mikrodalga: şüpheli görünse de en iyi yöntemlerden biri.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMikro = K(0, "microwave"), tSus = K(1, "suspicious"), tAma = K(1, "but");
  const tEn = K(1, "best ways"), tBesin = K(1, "nutritional");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tMikro} capa={[1500, 440]} konum={[1740, 800]} metin="MICROWAVE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tSus} bitis={tAma} metin="SUSPICIOUS?" x={70} y={110} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={tEn} metin="BEST WAYS TO PRESERVE" x={70} y={90} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBesin} metin="NUTRITIONAL QUALITY" x={70} y={164} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S19;
