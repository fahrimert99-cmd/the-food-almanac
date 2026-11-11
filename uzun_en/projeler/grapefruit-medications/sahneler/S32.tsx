import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

// kâğıt rengi yama (kusur örtüsü)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLiver = K(0, "liver"), tChg = K(0, "didn't"), tGut = K(1, "wall of the gut"), tPill = K(1, "pills");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Yama x={1800} y={32} w={260} h={100} />
        <Yama x={960} y={1060} w={400} h={90} />
        <Yama x={160} y={1062} w={340} h={70} />
        <Yama x={1840} y={1062} w={260} h={70} />
      </Kamera>
      <AltSis a={0.4} yukseklik={120} />
      <Etiket t={t} bas={tLiver} capa={[700, 420]} konum={[250, 190]} metin="LIVER ENZYMES" renk={RENK.lacivert} boyut={26} />
      <Baslik t={t} bas={tChg} bitis={s.cumleler[1].bas} metin="NO CHANGE" x={1880} y={440} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Etiket t={t} bas={tGut} bitis={tPill - 0.2} capa={[1060, 800]} konum={[1080, 650]} metin="GUT WALL" renk={RENK.mercan} boyut={26} />
      <Etiket t={t} bas={tPill} capa={[1060, 800]} konum={[1080, 650]} metin="PILLS ABSORBED HERE" renk={RENK.altin} boyut={24} />
    </>
  );
};
export default S32;
