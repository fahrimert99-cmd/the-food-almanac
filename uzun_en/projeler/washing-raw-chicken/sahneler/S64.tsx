// Sahne 64 — yaşla birlikte önem artar; küçük alışkanlıklar, tavuk yemeği sadece yemek kalır.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S64: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aUst = eout(ilerle(t, 0.1, 0.6));
  const tYeni = K(1, "A few");
  return (
    <>
      <Kamera gorsel="tam/64" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800])} />
      {/* üst kâğıt şeridi: başlık zemini */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 250, opacity: aUst,
        background: `linear-gradient(to bottom, ${kagit(0.97)} 0%, ${kagit(0.95)} 72%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "matter")} bitis={tYeni - 0.15} metin="MATTERS A LITTLE MORE WITH AGE" x={960} y={125} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "food")} bitis={tYeni - 0.15} metin="Food poisoning can hit harder" x={960} y={175} hiza="orta" boyut={34} />
      <Baslik t={t} bas={tYeni} metin="A FEW SMALL HABITS" x={960} y={125} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(1, "stays")} metin="The chicken dinner stays just a dinner" x={960} y={175} hiza="orta" boyut={34} />
      <Etiket t={t} bas={K(1, "chicken")} capa={[960, 700]} konum={[960, 915]} metin="ROAST CHICKEN" renk={RENK.altin} />
    </>
  );
};

export default S64;
