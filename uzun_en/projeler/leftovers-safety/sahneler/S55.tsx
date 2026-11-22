// Alışkanlık 5: şüphedeysen at; burun testi değildir. Görsel solda, sağ boş kâğıtta metin.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoubt = K(1, "When in doubt"), tThrow = K(1, "throw it out"), tNose = K(2, "nose"), tRice = K(2, "rice"), tPasta = K(2, "pasta"), tSt = K(2, "starchy");
  const gecis = K(2, "And") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 10, 1800], [40, 50, 1700])}>
        <Etiket t={t} bas={tThrow} bitis={gecis} capa={[1033, 640]} konum={[1033, 440]} metin="THROW IT OUT" renk={RENK.mercan} />
        <Etiket t={t} bas={tRice} capa={[387, 690]} konum={[330, 850]} metin="RICE" renk={RENK.altin} />
        <Etiket t={t} bas={tPasta} capa={[790, 650]} konum={[800, 850]} metin="PASTA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="HABIT 5" x={1860} y={250} boyut={34} renk={RENK.altin} font="inter" aralik={7} hiza="sag" />
      <BaslikBlok t={t} bas={tDoubt} bitis={gecis} satirlar={["WHEN IN DOUBT,", "THROW IT OUT"]} x={1860} y={340} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={tNose} satirlar={["NOSE IS NOT", "A TEST"]} x={1860} y={340} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tSt} metin="Especially rice, pasta and other starchy foods" x={1860} y={570} hiza="sag" genislik={560} boyut={36} />
    </>
  );
};

export default S55;
