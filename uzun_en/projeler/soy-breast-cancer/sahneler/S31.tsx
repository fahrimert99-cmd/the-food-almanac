// Sahne 31 — soya yiyecekleri: solda dört yiyecek etiketi, sağ panelde başlık.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <Panel a={eout(ilerle(t, 0.2, 0.7))} taraf="sag" genislik={820} />
      <Baslik t={t} bas={K(0, "survivor")} metin="SURVIVOR STUDIES" x={1860} y={250} boyut={56} renk={RENK.gri} hiza="sag" />
      <Baslik t={t} bas={K(0, "soy")} metin="SOY FOODS" x={1860} y={350} boyut={112} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "actually")} metin="WHAT THE SURVIVOR STUDIES MEASURED" x={1860} y={440} hiza="sag" genislik={600} boyut={30} agirlik={800} />
      <Etiket t={t} bas={K(1, "Tofu,")} capa={[347, 690]} konum={[300, 880]} metin="TOFU" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "soy")} capa={[400, 520]} konum={[190, 110]} metin="SOY MILK" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "edamame,")} capa={[700, 690]} konum={[720, 880]} metin="EDAMAME" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "miso.")} capa={[1020, 640]} konum={[1040, 400]} metin="MISO" renk={RENK.mercan} />
    </>
  );
};

export default S31;
