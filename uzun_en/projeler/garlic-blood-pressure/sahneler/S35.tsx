// Sahne 35 — sarımsak ilaca ek, ilacın yerine değil.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAcross = K(1, "across studies"), tHead = K(1, "head-to-head"), tAdd = K(2, "added");
  const kapat = tAdd - 0.25;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "first-line")} bitis={tAcross - 0.2} capa={[1000, 640]} konum={[1500, 560]} metin="FIRST-LINE DRUGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "medicine")} capa={[330, 440]} konum={[250, 260]} metin="MEDICINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "garlic")} capa={[930, 790]} konum={[1250, 900]} metin="GARLIC" renk={RENK.yesil} />
      </Kamera>
      {/* karşılaştırma notları (sağ boşluk) */}
      <Baslik t={t} bas={tAcross} bitis={kapat} metin="ACROSS STUDIES" x={1220} y={300} boyut={72} renk={RENK.lacivert} />
      <Ikon t={t} bas={tHead} bitis={kapat} ad="carpi" x={1250} y={430} boyut={80} zemin={RENK.mercan} />
      <Baslik t={t} bas={tHead} bitis={kapat} metin="NOT HEAD-TO-HEAD" x={1320} y={430} boyut={62} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tAdd} satirlar={b.satirlar} x={1860} y={290} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S35;
