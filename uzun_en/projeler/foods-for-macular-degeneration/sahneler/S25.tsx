// Sahne 25 — beta-karoten endişesi, sonra AREDS2
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBeta = K(0, "beta-carotene"), tLung = K(0, "lung cancer"), tSmoke = K(0, "smoke");
  const tSecond = K(1, "second"), tAreds = K(1, "AREDS2");
  const tBit = K(1, "So") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [50, 70, 1760])}>
        <Etiket t={t} bas={tBeta - 0.1} bitis={tBit} capa={[560, 700]} konum={[1000, 230]} metin="BETA-CAROTENE" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <BaslikBlok t={t} bas={tLung} bitis={tBit} satirlar={["LUNG CANCER", "RISK"]} x={1860} y={420} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tSmoke} bitis={tBit} metin="in people who smoke or used to" x={1860} y={640} hiza="sag" genislik={640} />
      <Not t={t} bas={tSecond} metin="the second trial" x={1860} y={300} hiza="sag" boyut={40} agirlik={800} />
      <Baslik t={t} bas={tAreds} metin="AREDS2" x={1860} y={420} boyut={170} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S25;
