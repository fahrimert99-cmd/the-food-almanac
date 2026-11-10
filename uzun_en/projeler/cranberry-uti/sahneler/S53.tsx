// Sahne 53 — telefon: infections keep returning -> call your provider (sağ başlıklar, solda etiket).
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810]);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={pencere}>
        <Etiket t={t} bas={K(0, "call your provider")} capa={[520, 470]} konum={[390, 300]} metin="CALL YOUR PROVIDER" renk={RENK.yesil} boyut={32} />
        <Etiket t={t} bas={K(0, "cranberry")} capa={[1010, 560]} konum={[1010, 800]} metin="CRANBERRY JUICE" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "keep returning") - 0.1} satirlar={["INFECTIONS", "KEEP RETURNING"]} x={1860} y={130} boyut={78} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={K(0, "not to drink")} metin="NOT MORE JUICE" x={1860} y={440} boyut={76} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S53;
