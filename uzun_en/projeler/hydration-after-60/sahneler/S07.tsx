// Sahne 7 — beyin sensörleri: vazopressin ve susama; yazılar sağ boş alanda.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 50, 1840]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pen}>
        <Etiket t={t} bas={K(0, "brain")} bitis={c[1].bas} capa={[820, 330]} konum={[1230, 170]} metin="BRAIN SENSORS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "hormone")} bitis={K(2, "feel") - 0.1} capa={[507, 745]} konum={[200, 830]} metin="HORMONE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "feel thirsty")} capa={[960, 750]} konum={[1330, 820]} metin="THIRSTY" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "two things")} metin="TWO THINGS" x={1860} y={290} boyut={40} hiza="sag" renk={RENK.gri} font="inter" aralik={5} />
      <Baslik t={t} bas={K(1, "vasopressin")} metin="VASOPRESSIN" x={1860} y={400} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "tells")} metin="the hormone that tells kidneys to save water" x={1860} y={480} boyut={30} hiza="sag" genislik={640} />
      <Baslik t={t} bas={K(2, "thirsty") - 0.1} metin="+ THIRST" x={1860} y={620} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S07;
