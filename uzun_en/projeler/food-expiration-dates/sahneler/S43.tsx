// Sahne 43 — "Less certain": terazi + defter; sağ panelde başlık ve soru.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const gec = K(1, "And") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={K(0, "three billion")} bitis={gec} capa={[650, 440]} konum={[250, 330]} metin="3 BILLION POUNDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "people say")} capa={[330, 720]} konum={[240, 510]} metin="WHAT PEOPLE SAY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "actually")} capa={[910, 750]} konum={[1560, 760]} metin="WHAT THEY ACTUALLY DO" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={K(0, "less")} satirlar={["LESS", "CERTAIN"]} x={1860} y={230} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(0, "truly")} ad="soru" x={1790} y={640} zemin={RENK.altin} bitis={gec} />
      <Not t={t} bas={K(0, "truly")} metin="HOW MUCH IS AVOIDABLE?" x={1860} y={470} hiza="sag" genislik={380} boyut={34} bitis={gec} agirlik={800} />
    </>
  );
};

export default S43;
