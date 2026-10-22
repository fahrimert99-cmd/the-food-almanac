// Sahne 6 — bağırsak mikrobiyomu; sağda başlık, etiketler ve çeşitlilik rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "microbes")} bitis={c[0].bas + 7.0} capa={[693, 400]} konum={[1320, 470]} metin="MICROBES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "bacteria")} bitis={c[0].bas + 7.0} capa={[775, 625]} konum={[1320, 580]} metin="BACTERIA" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "gut")} adim={0.3} satirlar={["THE GUT", "MICROBIOME"]} x={1860} y={200} boyut={96} hiza="sag" />
      <Not t={t} bas={K(1, "varied")} metin="HOW VARIED THE COMMUNITY IS" x={1860} y={420} hiza="sag" boyut={34} renk={RENK.lacivert} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "diversity")} vurgu="DIVERSITY" x={1500} y={510} genislik={470} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};

export default S06;
