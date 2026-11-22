// Sahne 17 — erken ipuçları (kişniş, nori) hayvan çalışmalarında; insanlarda randomize deney yok.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "no randomized");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1800])}>
        <Etiket t={t} bas={K(0, "coriander")} bitis={7.4} capa={[345, 400]} konum={[330, 130]} metin="CORIANDER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "nori")} bitis={7.4} capa={[760, 330]} konum={[1080, 190]} metin="NORI" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "animal")} capa={[910, 770]} konum={[1230, 850]} metin="ANIMAL RESEARCH" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "early signs")} bitis={7.4} metin="EARLY SIGNS" x={1260} y={330} boyut={34} renk={RENK.altin}
        font="inter" aralik={4} />
      <BaslikBlok t={t} bas={tBas} satirlar={s.meta.baslik!.satirlar} x={1230} y={250} boyut={92}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "commercial")} metin={s.meta.baslik!.not!.toUpperCase()} x={1236} y={455} boyut={28} genislik={600}
        agirlik={800} />
    </>
  );
};

export default S17;
