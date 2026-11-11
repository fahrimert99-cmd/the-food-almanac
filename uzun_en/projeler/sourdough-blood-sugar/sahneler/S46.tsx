// Sahne 46 — FDA ekmek standardı sourdough'dan söz etmez: reyon, merkez başlık, alt hap etiketleri.
import React from "react";
import { Baslik, BaslikBlok, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFed = K(1, "no federal");
  const [s1, a1] = pop(t, K(1, "requires"), 0.5);
  const [s2, a2] = pop(t, K(1, "how long"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1680])} />
      <Baslik t={t} bas={K(0, "FDA's")} bitis={tFed - 0.15} metin="FDA STANDARD OF IDENTITY" x={960} y={130} boyut={46} renk={RENK.lacivert}
        hiza="orta" font="inter" aralik={3} />
      <Baslik t={t} bas={K(0, "mention")} bitis={tFed - 0.15} metin="SOURDOUGH: NOT MENTIONED" x={960} y={215} boyut={64} renk={RENK.mercan} hiza="orta" />
      <BaslikBlok t={t} bas={tFed} satirlar={["NO FEDERAL", "DEFINITION"]} x={960} y={150} boyut={120} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 700, top: 905, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="WHAT THE WORD REQUIRES" renk={RENK.altin} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1230, top: 905, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="FERMENTATION TIME" renk={RENK.altin} boyut={28} />
      </div>
      <Ikon t={t} bas={K(1, "requires") + 0.15} ad="soru" x={385} y={905} boyut={64} zemin={RENK.altin} />
      <Ikon t={t} bas={K(1, "how long") + 0.15} ad="saat" x={1545} y={905} boyut={64} zemin={RENK.altin} />
    </>
  );
};

export default S46;
