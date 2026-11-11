// Sahne 29 — dikkat noktası: bu hastaların midesi zaten yavaş boşalıyor; daha da yavaşlatmak dezavantaj olabilir.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const [sc, al] = pop(t, K(3, "safety part"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760])}>
        <Etiket t={t} bas={K(1, "too slowly")} capa={[760, 560]} konum={[1230, 430]} metin="ALREADY TOO SLOW" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "catch")} metin={b.satirlar[0]} x={1860} y={170} boyut={130} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "stomachs")} metin={b.not!} x={1860} y={260} hiza="sag" genislik={560} boyut={34} />
      <Ikon t={t} bas={K(2, "slowing")} ad="uyari" x={1250} y={800} zemin={RENK.altin} boyut={84} />
      <Not t={t} bas={K(2, "slowing")} metin="SLOWING THEM FURTHER" x={1320} y={750} boyut={36} agirlik={800} />
      <Not t={t} bas={K(2, "disadvantage")} metin="COULD BE A DISADVANTAGE" x={1320} y={800} boyut={36} agirlik={800} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1860, top: 880, transform: `translateX(-100%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="MORE IN THE SAFETY PART" renk={RENK.altin} boyut={26} />
      </div>
    </>
  );
};

export default S29;
