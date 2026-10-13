// Sahne 31 — harita: bölgelere göre risk oranları (ABD 1.01, Avrupa 1.05, Asya 0.92).
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tReg = K(0, "regions"), tUs = K(1, "United States"), tEu = K(1, "Europe"), tAs = K(1, "Asia");
  const tOnly = K(2, "Only the Asian"), tDiff = K(2, "difference between");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        {/* sol alttaki başıboş çizgi kalıntıları kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 120, top: 660, width: 360, height: 180,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tUs} capa={[415, 350]} konum={[480, 130]} metin="UNITED STATES 1.01" renk={RENK.altin} />
        <Etiket t={t} bas={tEu} capa={[1010, 330]} konum={[1000, 130]} metin="EUROPE 1.05" renk={RENK.altin} />
        <Etiket t={t} bas={tAs} capa={[1500, 380]} konum={[1450, 130]} metin="ASIA 0.92" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.5} />
      <Not t={t} bas={tReg} bitis={1.6} metin="RATIO BY REGION" x={330} y={720} boyut={40} hiza="orta" agirlik={800} genislik={420} />
      <BaslikBlok t={t} bas={tOnly} satirlar={["ONLY ASIA", "BELOW 1"]} x={330} y={700} boyut={64} hiza="orta" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tDiff} metin="regional differences not clear-cut" x={330} y={850} boyut={30} hiza="orta" genislik={420} agirlik={800} />
    </>
  );
};

export default S31;
