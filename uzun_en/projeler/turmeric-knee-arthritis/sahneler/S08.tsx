// Sahne 8 — laboratuvar: mikroskop + şişe etiketleri, anlatımla senkron başlıklar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [20, 30, 1880], [90, 80, 1740])}>
        <Etiket t={t} bas={K(0, "lab")} bitis={3.0} capa={[1640, 420]} konum={[1440, 140]} metin="MICROSCOPE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "curcumin")} bitis={5.2} capa={[1200, 760]} konum={[1000, 270]} metin="CURCUMIN" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "calm")} bitis={3.1} satirlar={["THOUGHT TO CALM", "INFLAMMATION"]} x={90} y={200} boyut={100} />
      <BaslikBlok t={t} bas={K(1, "lab")} bitis={8.5} satirlar={["LAB RESULTS", "DON'T ALWAYS", "CARRY OVER"]} x={90} y={190} boyut={92}
        adim={0.45} renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={K(2, "men")} satirlar={["MEN AND WOMEN", "WITH SORE KNEES"]} x={90} y={200} boyut={100} />
    </>
  );
};

export default S08;
