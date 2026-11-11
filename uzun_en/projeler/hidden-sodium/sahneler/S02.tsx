// Sahne 2 — %71 yemeğe önceden eklenmiş; en büyük kaynaklar
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, VurguRozet, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const tGec = c[1].bas - 0.15;
  const tBiggest = K(1, "biggest");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 50, 1800])}>
        <Etiket t={t} bas={tBiggest + 0.1} capa={[307, 440]} konum={[330, 170]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={tBiggest + 0.55} capa={[470, 560]} konum={[230, 860]} metin="PIZZA" renk={RENK.mercan} />
        <Etiket t={t} bas={tBiggest + 1.0} capa={[655, 400]} konum={[820, 130]} metin="SOUP" renk={RENK.yesil} />
        <Etiket t={t} bas={tBiggest + 1.45} capa={[745, 860]} konum={[1210, 900]} metin="DELI MEAT" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "About") + 0.3} bitis={tGec} satirlar={["ALREADY IN", "THE FOOD"]} x={1860} y={230} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "seventy-one")} bitis={tGec} vurgu="71%" not="added before it reached them" x={1640} y={500} genislik={460} boyut={130} />
      <BaslikBlok t={t} bas={tBiggest} satirlar={["THE BIGGEST", "SOURCES?"]} x={1860} y={400} boyut={88} hiza="sag" />
    </>
  );
};

export default S02;
