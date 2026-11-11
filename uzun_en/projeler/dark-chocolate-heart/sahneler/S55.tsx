// Sahne 55 — kısa denemeler: küçük tansiyon etkisi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCocoa = K(0, "cocoa"), tBP = K(0, "blood pressure"), tMm = K(0, "two"), tSmall = K(1, "small"),
    tNot = K(1, "not"), tFewer = K(1, "fewer");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1760])}>
        {/* ampulün üzerindeki sahte harf kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 270, top: 70, width: 170, height: 100,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(240,222,176) 0%, rgb(240,222,176) 60%, rgba(240,222,176,0) 100%)" }} />
        <Etiket t={t} bas={tCocoa} bitis={tSmall - 0.1} capa={[1280, 440]} konum={[1230, 200]} metin="COCOA" renk={RENK.altin} />
        <Etiket t={t} bas={tBP} bitis={tSmall - 0.1} capa={[710, 640]} konum={[830, 190]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={tMm} vurgu="≈ 2 mmHg" not="about two mm of mercury" x={1640} y={110} genislik={440} boyut={90}
        bitis={tSmall - 0.1} />
      <BaslikBlok t={t} bas={tSmall} satirlar={["SMALL,", "NOT PROOF"]} x={960} y={110} boyut={90} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tFewer} metin="of fewer heart attacks" x={960} y={290} hiza="orta" />
    </>
  );
};

export default S55;
