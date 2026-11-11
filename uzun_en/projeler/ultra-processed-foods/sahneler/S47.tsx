// Sahne 47 — Bir: önce içecekler. Üstte başlık ve notlar, altta içecek sırası.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSwap = c[3].bas - 0.15;
  const [s1, a1] = pop(t, K(2, "Sweetened"), 0.5);
  const [s2, a2] = pop(t, K(2, "artificially"), 0.5);
  const g = sol(t, tSwap, 0.4);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1800])}>
        <Etiket t={t} bas={K(3, "Water,")} capa={[235, 760]} konum={[300, 470]} metin="WATER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "plain")} capa={[680, 810]} konum={[760, 500]} metin="PLAIN COFFEE OR TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "milk")} capa={[1647, 700]} konum={[1580, 380]} metin="MILK" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "One.")} bitis={tSwap} satirlar={["ONE:", "DRINKS FIRST"]} x={100} y={150} boyut={118}
        renkler={[RENK.altin, RENK.lacivert]} />
      <div style={{ position: "absolute", left: 1000, top: 140, opacity: a1 * g, transform: `scale(${s1})`, transformOrigin: "0 50%" }}>
        <Hap metin="SWEETENED DRINKS" renk={RENK.mercan} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 236, opacity: a2 * g, transform: `scale(${s2})`, transformOrigin: "0 50%" }}>
        <Hap metin="ARTIFICIALLY SWEETENED" renk={RENK.mercan} boyut={30} />
      </div>
      <Not t={t} bas={K(2, "linked")} bitis={tSwap} metin="Linked with higher risk in both big studies" x={1000} y={340} genislik={820}
        boyut={38} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={K(3, "easy")} metin="EASY SWAPS" x={1840} y={170} hiza="sag" boyut={64} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};
export default S47;
