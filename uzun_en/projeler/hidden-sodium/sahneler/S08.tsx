// Sahne 8 — AHA 1,500 mg; doktorunuz farklı bir hedef koyabilir
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tGec = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 25, 1820])}>
        <Etiket t={t} bas={K(0, "American")} capa={[920, 480]} konum={[905, 130]} metin="AMERICAN HEART ASSOCIATION" renk={RENK.mercan} boyut={24} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "1,500")} bitis={tGec} vurgu="1,500 MG" not="a day" x={245} y={300} genislik={400} boyut={100} />
      <Not t={t} bas={K(0, "ideal")} bitis={tGec} metin="IDEAL FOR MOST ADULTS" x={245} y={470} hiza="orta" genislik={400} boyut={28} agirlik={800} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "Your")} satirlar={["YOUR DOCTOR", "MAY SET A", "DIFFERENT", "NUMBER"]} x={60} y={210} boyut={62} adim={0.2} renkler={[RENK.lacivert, RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S08;
