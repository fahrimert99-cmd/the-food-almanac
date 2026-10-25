// Sahne 5 — diz osteoartriti: kıkırdak incelir, ağrı ve sertlik.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tKart = K(1, "cartilage");
  const tInce = K(1, "thins");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={tKart} bitis={tInce + 0.3} capa={[560, 465]} konum={[1150, 470]} metin="CARTILAGE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Knee")} satirlar={b.satirlar} x={1000} y={190} boyut={100} />
      <Not t={t} bas={K(0, "wear-and-tear")} bitis={4.4} metin="THE WEAR-AND-TEAR KIND" x={1004} y={400} boyut={38} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={tInce} metin="CARTILAGE THINS" x={1000} y={560} boyut={76} renk={RENK.koyuYesil} />
      <Liste t={t} x={1000} y={650} aralik={84} boyut={38} isaret="nokta" ogeler={[
        { bas: K(1, "painful"), metin: "PAINFUL", renk: RENK.mercan },
        { bas: K(1, "stiff"), metin: "STIFF", renk: RENK.mercan },
        { bas: K(1, "after sitting"), metin: "AFTER SITTING STILL", renk: RENK.altin },
      ]} />
      <Ikon t={t} bas={K(1, "after sitting")} ad="saat" x={1700} y={820} zemin={RENK.altin} boyut={84} />
    </>
  );
};

export default S05;
