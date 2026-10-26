import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

// kâğıt rengi yama (kusur örtüsü)
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, #FAF8DC 0%, #FAF8DC 70%, rgba(250,248,220,0) 100%)` }} />
);

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "surprise"), tFex = K(1, "fexofenadine"), tGreyfurt = K(1, "grapefruit"), tOpp = K(1, "opposite");
  const tLess = K(2, "less of the drug"), tWork = K(2, "work less well");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Yama x={960} y={590} w={500} h={340} />
        <Yama x={1095} y={670} w={160} h={120} />
        <Yama x={745} y={582} w={120} h={50} />
      </Kamera>
      <AltSis a={0.6} yukseklik={140} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={b.satirlar} x={1860} y={190} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tOpp + 0.2} metin={b.not!.toUpperCase()} x={1860} y={365} hiza="sag" boyut={30} genislik={800} />
      <Etiket t={t} bas={tFex} bitis={tGreyfurt - 0.2} capa={[1050, 915]} konum={[960, 790]} metin="FEXOFENADINE" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tGreyfurt} bitis={tLess - 0.3} capa={[1480, 640]} konum={[1330, 440]} metin="GRAPEFRUIT" renk={RENK.mercan} boyut={26} />
      <Baslik t={t} bas={tLess} metin="LESS ABSORBED" x={760} y={560} boyut={64} renk={RENK.mercan} />
      <Baslik t={t} bas={tWork} metin="MAY WORK LESS WELL" x={764} y={640} boyut={34} renk={RENK.lacivert} font="inter" agirlik={800} aralik={2} />
    </>
  );
};
export default S25;
