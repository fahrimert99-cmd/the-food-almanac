// Sahne 2 — fincan mı kapsül mü: iki nesne etiketi + karaciğer uyarısı.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFinc = K(0, "the cup");
  const tUyari = K(0, "liver");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [70, 80, 1760])}>
        <Etiket t={t} bas={K(0, "concentrated")} bitis={tFinc - 0.2} capa={[1010, 560]} konum={[1450, 520]} metin="CONCENTRATED CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={tFinc} bitis={tUyari - 0.2} capa={[470, 520]} konum={[540, 210]} metin="THE CUP" renk={RENK.yesil} />
        <Etiket t={t} bas={tUyari} capa={[860, 840]} konum={[1450, 760]} metin="LIVER WARNING" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.25} satirlar={["CUP OR", "CAPSULE?"]} x={1860} y={170} boyut={100} hiza="sag" />
      <Ikon t={t} bas={tUyari + 0.4} ad="uyari" x={1180} y={760} zemin={RENK.mercan} boyut={84} />
    </>
  );
};

export default S02;
