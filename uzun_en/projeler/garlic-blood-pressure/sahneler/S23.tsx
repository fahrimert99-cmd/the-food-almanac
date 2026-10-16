// Sahne 23 — aynı ekip, aynı ürün; bağımsız doğrulama.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEkip = K(0, "research team"), tUrun = K(0, "same product"), tBag = K(1, "independent");
  const pPanel = eout(ilerle(t, tBag - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [290, 40, 1500], [340, 90, 1400])}>
        <Etiket t={t} bas={tEkip - 0.3} bitis={tBag} capa={[900, 740]} konum={[640, 560]} metin="SAME RESEARCH TEAM" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tUrun - 0.3} bitis={tBag} capa={[1160, 760]} konum={[1520, 640]} metin="SAME PRODUCT" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <AltSis a={0.6} yukseklik={130} />
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <BaslikBlok t={t} bas={tBag} satirlar={["INDEPENDENT", "CONFIRMATION"]} x={1860} y={380} boyut={88} hiza="sag" />
      <Not t={t} bas={K(1, "matters")} metin="matters" x={1860} y={600} hiza="sag" boyut={44} renk={RENK.altin} agirlik={800} />
    </>
  );
};

export default S23;
