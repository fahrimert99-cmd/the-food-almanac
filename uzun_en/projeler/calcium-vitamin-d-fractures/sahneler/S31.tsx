// Sahne 31 — dürüst özet: bakımevindeki zayıf yaşlılarda mütevazı yarar; evde yaşayan sağlıklılarda az ya da hiç.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tCare = K(1, "Calcium"), tHome = K(2, "healthy");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [70, 80, 1740])} />
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={K(0, "honest")} satirlar={b.satirlar} x={1860} y={170} boyut={110} hiza="sag" />
      <Etiket t={t} bas={K(2, "home")} capa={[500, 640]} konum={[560, 120]} metin="AT HOME" renk={RENK.altin} boyut={30} />
      <Liste t={t} isaret="onay" x={1130} y={470} aralik={190} boyut={34} genislik={740}
        ogeler={[{ bas: tCare, metin: "IN CARE: MODEST BENEFIT" }, { bas: tHome, metin: "AT HOME: LITTLE OR NO BENEFIT", renk: RENK.altin }]} />
      <Not t={t} bas={K(1, "frail")} metin="frail older people" x={1210} y={535} boyut={30} renk={RENK.gri} />
      <Not t={t} bas={K(2, "healthy") + 0.3} metin="healthy people, big trials" x={1210} y={725} boyut={30} renk={RENK.gri} />
    </>
  );
};

export default S31;
