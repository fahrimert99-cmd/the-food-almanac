// Sahne 12 — iki mide: kalın astarlı ve incelmiş astarlı; atrofik gastrit başlığı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Görseldeki sahte yazıları örten kâğıt rengi yama
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 78%, ${kagit(0)} 100%)` }} />
);

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tLess = K(0, "less stomach acid"), tAtr = K(1, "atrophic"), tLong = K(1, "long-term"), tThins = K(1, "thins"), tLin = K(1, "lining");
  const pPanel = eout(ilerle(t, c[1].bas - 0.1, 0.6));
  const [sa, aa] = pop(t, tAtr, 0.5);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 10, 1840]);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={pencere}>
        <Yama x={240} y={890} w={680} h={150} />
        <Yama x={1100} y={890} w={560} h={150} />
        <Etiket t={t} bas={tLess} bitis={tAtr} capa={[1560, 560]} konum={[1520, 900]} metin="LESS ACID" renk={RENK.mercan} />
        <Etiket t={t} bas={tLin} capa={[1610, 330]} konum={[1640, 160]} metin="THINNED LINING" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1000, opacity: pPanel,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 90%, ${kagit(0)} 100%)` }} />
      <div style={{ position: "absolute", left: 90, top: 190, transform: `scale(${sa})`, transformOrigin: "0 50%", opacity: aa }}>
        <Hap metin="ATROPHIC GASTRITIS" renk={RENK.mercan} boyut={32} />
      </div>
      <Not t={t} bas={tLong} metin="A long-term inflammation" x={96} y={290} boyut={38} renk={RENK.lacivert} agirlik={700} />
      <Baslik t={t} bas={tThins} metin="A THINNING" x={90} y={500} boyut={140} renk={RENK.lacivert} />
      <Baslik t={t} bas={tThins + 0.2} metin="LINING" x={90} y={660} boyut={140} renk={RENK.koyuYesil} />
    </>
  );
};

export default S12;
