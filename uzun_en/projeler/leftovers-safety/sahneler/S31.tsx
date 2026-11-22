// Sahne 31 — ocaktaki çorba; sol etiketler, sonra sağ panelde AHA cevabı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWaste = K(0, "wasteful."), tPot = K(1, "pot"), tAha = K(1, "American"), tIf = K(1, "if"), tThrow = K(1, "throw");
  const aP = eout(ilerle(t, tAha - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tWaste - 0.5} capa={[430, 640]} konum={[330, 190]} metin="FEELS WASTEFUL" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tPot + 0.3} bitis={tAha - 0.4} capa={[900, 590]} konum={[1020, 800]} metin="A FEW DOLLARS" renk={RENK.yesil} boyut={32} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={tAha} satirlar={["AMERICAN HEART", "ASSOCIATION"]} x={1860} y={290} boyut={74} hiza="sag" renkler={[RENK.lacivert, RENK.lacivert]} />
      <BaslikBlok t={t} bas={tIf} satirlar={["IF UNSURE,"]} x={1860} y={540} boyut={96} hiza="sag" renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tThrow - 0.1} satirlar={["THROW IT AWAY"]} x={1860} y={650} boyut={96} hiza="sag" renkler={[RENK.mercan]} />
    </>
  );
};

export default S31;
