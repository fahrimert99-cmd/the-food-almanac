// Sahne 14 — dört servis kahve; su kıyası. Suyun üstündeki sahte buhar örtülür.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, kagit } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFour = K(0, "four"), tMl = K(0, "200"), tMg = K(0, "4");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1700], [0, 70, 1620])}>
        {/* su bardaklarının üstündeki buhar kâğıt rengi yamayla örtülü */}
        <div style={{ position: "absolute", left: 740, top: 130, width: 400, height: 380,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "coffee")} capa={[250, 650]} konum={[420, 190]} metin="4 COFFEES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "water")} capa={[870, 700]} konum={[930, 330]} metin="WATER" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tFour} satirlar={["4 SERVINGS", "A DAY"]} x={1860} y={250} boyut={100} hiza="sag" />
      <VurguRozet t={t} bas={tMl} vurgu="200 ML" not="EACH SERVING" x={1650} y={440} genislik={420} boyut={96} />
      <VurguRozet t={t} bas={tMg} vurgu="4 MG / KG" not="CAFFEINE PER KG OF BODY WEIGHT" x={1650} y={650} genislik={440} boyut={86} renk={RENK.mercan} />
    </>
  );
};

export default S14;
