// Sahne 5 — balın bileşimi: çubuklar sırayla gelir
import React from "react";
import { BaslikBlok, CubukGrafik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const cubuklar = [
    { etiket: "FRUCTOSE", deger: 38, metin: "38%", renk: RENK.altin, bas: K(1, "38") - 0.1 },
    { etiket: "GLUCOSE", deger: 31, metin: "31%", renk: RENK.yesil, bas: K(1, "31") - 0.1 },
    { etiket: "WATER", deger: 17, metin: "17%", renk: RENK.lacivert, bas: K(1, "17") - 0.1 },
    { etiket: "SUCROSE", deger: 1, metin: "1%", renk: RENK.mercan, bas: K(1, "one percent") - 0.1 },
  ];
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(1, "honey")} capa={[430, 800]} konum={[820, 330]} metin="HONEY" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "mostly")} satirlar={b.satirlar} x={1860} y={150} boyut={110} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "sugar.")} bitis={3.3} vurgu={b.vurgu!} not={b.not} x={1600} y={380} genislik={420} />
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={1130} y={520} w={730} h={330} maks={46} />
    </>
  );
};

export default S05;
