// Sahne 53 — 2023 derlemesi, genetik kanıt, resveratrol.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// görseldeki küçük sahte rakamları (1, 2, 3) kâğıt rengi yamayla örter
const yama = (x: number, y: number, w = 90, h = 60) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t23 = K(0, "2023"), t107 = K(0, "107"), tLight = K(0, "light"), tHeavy = K(0, "higher"), tGen = K(1, "genetic"),
    tStroke = K(1, "stroke"), tRes = K(2, "resveratrol"), tTiny = K(2, "tiny");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 70, 1780])}>
        {yama(449, 727)}{yama(961, 1040, 120)}{yama(1491, 731)}
      </Kamera>
      <BaslikBlok t={t} bas={t23} satirlar={["2023 REVIEW"]} x={460} y={170} boyut={78} hiza="orta" bitis={tGen - 0.2} />
      <VurguRozet t={t} bas={t107} vurgu="107" not="STUDIES" x={460} y={250} genislik={300} boyut={96} bitis={tGen - 0.2} />
      <Etiket t={t} bas={tLight} bitis={tHeavy} capa={[960, 400]} konum={[1450, 250]} metin="LIGHT DRINKERS" renk={RENK.altin} boyut={30} />
      <Etiket t={t} bas={tHeavy} bitis={tGen - 0.2} capa={[1060, 560]} konum={[1450, 250]} metin="HEAVIER LEVELS: HIGHER RISK" renk={RENK.mercan} boyut={30} />
      <Etiket t={t} bas={tStroke} bitis={tRes - 0.2} capa={[820, 330]} konum={[480, 330]} metin="GENETIC EVIDENCE" renk={RENK.koyuYesil} boyut={30} />
      <Etiket t={t} bas={tRes} capa={[1480, 500]} konum={[1500, 250]} metin="RESVERATROL" renk={RENK.koyuYesil} boyut={32} />
      <Etiket t={t} bas={tTiny} capa={[960, 440]} konum={[480, 330]} metin="ONLY A TINY AMOUNT" renk={RENK.altin} boyut={30} />
    </>
  );
};

export default S53;
