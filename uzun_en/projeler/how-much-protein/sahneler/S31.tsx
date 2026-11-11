// Sahne 31 — protein + direnç egzersizi: kahvaltı tabağı ve dambıllar.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProtein = K(0, "protein"), tEgz = K(0, "resistance"), tAlone = K(1, "alone");
  const tFar = K(1, "far more");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1800])}>
        <Etiket t={t} bas={tProtein} capa={[640, 470]} konum={[820, 250]} metin="PROTEIN" renk={RENK.mercan} />
        <Etiket t={t} bas={tEgz} capa={[1300, 850]} konum={[1000, 700]} metin="RESISTANCE EXERCISE" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.7} yukseklik={130} />
      <BaslikBlok t={t} bas={K(0, "best-supported")} satirlar={s.meta.baslik!.satirlar} x={1860} y={210} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tAlone} metin="Protein alone: less benefit in frail adults" x={1860} y={470} hiza="sag" genislik={640} boyut={34} agirlik={800}
        renk={RENK.mercan} />
      <Not t={t} bas={tFar} metin="Far more than needed: no clear help" x={1860} y={590} hiza="sag" genislik={640} boyut={34} agirlik={800}
        renk={RENK.gri} />
    </>
  );
};

export default S31;
