// Alışkanlık 2: sığ ve aralıklı. Görsel solda, sağ boş kâğıtta başlık + rozet.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSh = K(1, "shallow"), t3 = K(1, "three inches"), tBig = K(2, "big pot"), tFr = K(2, "fridge"), tSp = K(2, "space between");
  const cik = K(2, "Divide") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [10, 20, 1800], [50, 50, 1700])}>
        <Etiket t={t} bas={tSh} bitis={cik} capa={[595, 835]} konum={[1010, 830]} metin="SHALLOW" renk={RENK.yesil} />
        <Etiket t={t} bas={tBig} bitis={tFr - 0.1} capa={[330, 600]} konum={[330, 120]} metin="BIG POT" renk={RENK.altin} />
        <Etiket t={t} bas={tFr} bitis={tSp - 0.2} capa={[900, 330]} konum={[1180, 220]} metin="FRIDGE" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSp} capa={[750, 790]} konum={[1010, 760]} metin="SPACE BETWEEN" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="HABIT 2" x={1860} y={250} boyut={34} renk={RENK.altin} font="inter" aralik={7} hiza="sag" />
      <BaslikBlok t={t} bas={K(1, "Cool")} satirlar={["SHALLOW", "AND SPACED"]} x={1860} y={340} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={t3} vurgu="≤ 3 IN" not="deep or less" x={1600} y={580} genislik={420} boyut={100} renk={RENK.yesil} />
    </>
  );
};

export default S52;
