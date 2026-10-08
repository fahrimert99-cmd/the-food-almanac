// Sahne 3 — akşam yemeği tabağı ve cep saati; sağda boş kâğıt üzerine yazılar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 120, 1760])}>
        <Etiket t={t} bas={K(0, "biggest")} bitis={c[1].bas} capa={[693, 747]} konum={[1070, 660]} metin="BIGGEST MEAL OF THE DAY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "different")} capa={[827, 887]} konum={[1130, 900]} metin="DIFFERENT MOMENT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "evening")} satirlar={["EVENING", "MEAL"]} x={1860} y={200} boyut={130} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "22")} vurgu="–22%" not="after-meal walks" x={1600} y={470} genislik={440} boyut={120} renk={RENK.yesil} />
      <Not t={t} bas={K(1, "Same")} metin="SAME TOTAL WALKING" x={1860} y={760} hiza="sag" boyut={42} agirlik={800} />
    </>
  );
};

export default S03;
