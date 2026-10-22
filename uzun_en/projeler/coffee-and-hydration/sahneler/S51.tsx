// Sahne 51 — belirtiler listesi ve "doktora söyleyin"; gazete (sahte yazı) kâğıt yamayla örtülü.
import React from "react";
import { BaslikBlok, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Gazeteyi örten yumuşak kâğıt yama (görsel koordinatı)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse closest-side, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
);

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gecis = K(1, "Those") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Yama x={780} y={700} w={1100} h={400} />
        <Yama x={1370} y={520} w={520} h={260} />
        <Yama x={1360} y={590} w={560} h={200} />
      </Kamera>
      <Liste t={t} isaret="nokta" x={60} y={330} aralik={92} boyut={32} genislik={480} ogeler={[
        { bas: K(0, "thirsty,"), metin: "VERY THIRSTY", bitis: gecis, renk: RENK.altin },
        { bas: K(0, "dark,"), metin: "VERY DARK URINE", bitis: gecis, renk: RENK.altin },
        { bas: K(0, "dizzy,"), metin: "DIZZY", bitis: gecis, renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(0, "blame")} bitis={gecis} satirlar={["DON'T JUST BLAME", "THE COFFEE"]} x={1860} y={800} boyut={68} hiza="sag" />
      <Not t={t} bas={K(1, "causes,") - 0.4} bitis={K(1, "mentioning") - 0.1} metin="OTHER CAUSES ARE POSSIBLE" x={1860} y={800} hiza="sag" boyut={44} agirlik={800} genislik={800} />
      <BaslikBlok t={t} bas={K(1, "mentioning")} satirlar={["MENTION IT", "TO A DOCTOR"]} x={1860} y={800} boyut={68} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S51;
