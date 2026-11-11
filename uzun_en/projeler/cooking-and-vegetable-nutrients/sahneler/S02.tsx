// Sahne 2 — fırın tepsisi; etiketler, sağda "IT DEPENDS".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "depends");
  const cikis = tB - 0.1;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [50, 50, 1780])}>
        <Etiket t={t} bas={K(0, "cooking")} bitis={cikis} capa={[600, 540]} konum={[330, 190]} metin="CARROTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "boosts")} bitis={cikis} capa={[975, 610]} konum={[1250, 860]} metin="TOMATO" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "nutrients")} bitis={cikis} capa={[540, 775]} konum={[200, 900]} metin="OIL" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, tB - 0.3, 0.7))} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={tB} satirlar={["IT", "DEPENDS"]} x={1860} y={330} boyut={130} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "vegetable")} metin="on the vegetable" x={1860} y={640} hiza="sag" boyut={44} genislik={640} />
    </>
  );
};

export default S02;
