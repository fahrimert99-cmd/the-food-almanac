// Sahne 37 — "teşvik edici ama kesin değil": sağda başlık, iki not.
import React from "react";
import { BaslikBlok, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])} />
      <BaslikBlok t={t} bas={K(0, "encouraging")} satirlar={[b.satirlar[0]]} x={1160} y={250} boyut={92} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(0, "not")} satirlar={[b.satirlar[1]]} x={1160} y={355} boyut={92} renkler={[RENK.koyuYesil]} />
      <Ikon t={t} bas={K(1, "hint")} ad="soru" x={1265} y={600} zemin={RENK.altin} boyut={84} />
      <Not t={t} bas={K(1, "hint")} metin="A HINT WORTH TESTING AGAIN" x={1330} y={578} boyut={32} agirlik={800} genislik={600} />
      <Ikon t={t} bas={K(1, "proven") - 0.2} ad="carpi" x={1265} y={730} zemin={RENK.mercan} boyut={84} />
      <Not t={t} bas={K(1, "proven") - 0.2} metin="NOT A PROVEN BENEFIT" x={1330} y={708} boyut={32} agirlik={800} genislik={600} />
    </>
  );
};

export default S37;
