// Sahne 49 — Bir: yeşilleri kendi başına bırakma
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(2, "talk");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      <VurguRozet t={t} bas={K(0, "One")} vurgu="1" x={1250} y={100} genislik={190} boyut={100} />
      <BaslikBlok t={t} bas={K(1, "cut")} bitis={t2 - 0.2} satirlar={["DON'T CUT", "GREENS OUT"]} x={1860} y={130} boyut={76} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "own")} bitis={t2 - 0.2} metin="ON YOUR OWN" x={1860} y={270} hiza="sag" boyut={32} agirlik={800} />
      <Etiket t={t} bas={K(2, "anticoagulation")} capa={[640, 520]} konum={[900, 75]} metin="ANTICOAGULATION CLINIC" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(2, "adding")} capa={[1130, 540]} konum={[1620, 430]} metin="ADDING GREENS BACK" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(2, "dose")} satirlar={["DOSE MAY", "NEED ADJUSTING"]} x={1860} y={140} boyut={70} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S49;
