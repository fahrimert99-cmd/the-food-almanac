// Sahne 51 — her şeyi say: tepsi, üstte etiketler
import React from "react";
import { Etiket, Hap, Ikon, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(3, "Just") - 0.15;
  const [sc, al] = pop(t, K(3, "caffeine and"), 0.5);
  const [sc2, al2] = pop(t, K(3, "caffeine"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1760])}>
        <Etiket t={t} bas={K(2, "Coffee")} bitis={cik} capa={[533, 520]} konum={[300, 140]} metin="COFFEE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "milk")} bitis={cik} capa={[793, 450]} konum={[800, 140]} metin="MILK" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "fruits")} bitis={cik} capa={[1087, 520]} konum={[1160, 140]} metin="FRUITS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "water in")} bitis={cik} capa={[1373, 380]} konum={[1580, 140]} metin="WATER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "caffeine earlier")} bitis={K(3, "caffeine and") - 0.1} capa={[533, 520]} konum={[420, 140]} metin="CAFFEINE: EARLIER" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 760, top: 120, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin="CAFFEINE + ALCOHOL BEFORE BED" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};
export default S51;
