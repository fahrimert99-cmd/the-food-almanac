// Sahne 29 — defter ve kronometre: anket, olay sayımı, HR 0.93.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tEvery = K(0, "Every few years"), tQ = K(0, "detailed questions");
  const tHeart = K(1, "heart disease"), tFew = K(2, "fewer than");
  const tThose = K(2, "those eating"), tSeven = K(2, "seven percent");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1790])}>
        <Etiket t={t} bas={tEvery} bitis={4.3} capa={[100, 800]} konum={[560, 820]} metin="EVERY FEW YEARS" renk={RENK.altin} />
        <Etiket t={t} bas={tHeart} bitis={8.4} capa={[1710, 450]} konum={[1480, 250]} metin="HEART DISEASE OR STROKE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <AltSis a={0.5} />
      <Not t={t} bas={tQ} bitis={4.3} metin="DETAILED FOOD QUESTIONS" x={680} y={640} boyut={36} hiza="orta" agirlik={800} genislik={420} />
      <Not t={t} bas={tFew} metin="Compared with fewer than 1 egg a month" x={680} y={560} boyut={34} hiza="orta" agirlik={800} genislik={420} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={tThose} satirlar={b.satirlar} x={1270} y={250} boyut={100} hiza="orta" />
      <VurguRozet t={t} bas={tSeven} vurgu={b.vurgu!} not={b.not} x={1270} y={500} genislik={500} boyut={110} />
    </>
  );
};

export default S29;
