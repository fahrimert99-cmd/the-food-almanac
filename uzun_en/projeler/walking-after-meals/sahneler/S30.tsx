// Sahne 30 — mekanizma, ölçülmüş doz değil: açık defter sayfalarına notlar
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMek = K(0, "mechanism"), tDoz = K(0, "measured"), tEx = K(1, "exactly"), tGlu = K(1, "glucose");
  const tPl = K(2, "plausible"), tTr = K(2, "trials");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [10, 6, 1900], [50, 28, 1820])}>
        <Etiket t={t} bas={tGlu} bitis={tPl - 0.3} capa={[1240, 493]} konum={[1240, 260]} metin="GLUCOSE" renk={RENK.altin} />
      </Kamera>
      {/* sol sayfa: mekanizma ✓, ölçülmüş doz ✗, tam miktar ? */}
      <Ikon t={t} bas={tMek} ad="onay" x={430} y={215} boyut={76} />
      <Baslik t={t} bas={tMek + 0.05} metin="MECHANISM" x={490} y={215} boyut={78} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tDoz} ad="carpi" x={430} y={375} boyut={76} zemin={RENK.mercan} />
      <Baslik t={t} bas={tDoz + 0.05} metin="NOT A MEASURED" x={490} y={345} boyut={50} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDoz + 0.15} metin="DOSE" x={490} y={405} boyut={50} renk={RENK.lacivert} />
      <Ikon t={t} bas={tEx} ad="soru" x={430} y={595} boyut={76} zemin={RENK.altin} />
      <Baslik t={t} bas={tEx + 0.05} metin="EXACT" x={490} y={565} boyut={50} renk={RENK.lacivert} />
      <Baslik t={t} bas={tEx + 0.15} metin="AMOUNT?" x={490} y={625} boyut={50} renk={RENK.lacivert} />
      {/* sağ sayfa altı: makul, denemeler gösteriyor */}
      <Ikon t={t} bas={tPl} ad="onay" x={1030} y={690} boyut={70} />
      <Baslik t={t} bas={tPl + 0.05} metin="PLAUSIBLE" x={1085} y={690} boyut={66} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tTr} ad="onay" x={1020} y={800} boyut={70} />
      <Baslik t={t} bas={tTr + 0.05} metin="TRIALS SHOW IT HAPPENS" x={1075} y={800} boyut={40} renk={RENK.lacivert} />
    </>
  );
};

export default S30;
