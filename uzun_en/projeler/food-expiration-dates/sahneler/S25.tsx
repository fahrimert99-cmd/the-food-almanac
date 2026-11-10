// Sahne 25 — Listeria tanıtımı: büyüteç dairesindeki çubuk bakteriler + hazır dilimli et paketi.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGerm = K(0, "germ"), tLis = K(0, "Listeria"), tHazir = K(1, "ready-to-eat"), t65 = K(1, "over 65");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tGerm} bitis={tHazir - 0.3} capa={[560, 330]} konum={[230, 270]} metin="A GERM" renk={RENK.mercan} />
        <Etiket t={t} bas={tHazir} capa={[1000, 880]} konum={[560, 790]} metin="READY-TO-EAT FOODS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tLis} metin="LISTERIA" x={70} y={880} boyut={120} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t65} vurgu="65+" not="adults need extra care" x={1400} y={130} genislik={400} />
    </>
  );
};

export default S25;
