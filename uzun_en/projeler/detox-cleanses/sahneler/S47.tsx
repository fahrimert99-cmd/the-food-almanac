// Sahne 47 — alkolü sınırla, kademeli kilo kaybı; sağ boş kâğıtta başlıklar.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit1 = K(1, "recommend") - 0.2;
  const tGrad = K(1, "gradual"), tCrash = K(1, "crash");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1830])}>
        <Etiket t={t} bas={K(0, "alcohol,")} bitis={bit1} capa={[470, 330]} konum={[860, 190]} metin="WINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "liver.")} bitis={bit1} capa={[640, 520]} konum={[900, 360]} metin="LIVER" renk={RENK.mercan} />
        <Etiket t={t} bas={tGrad + 0.3} capa={[700, 830]} konum={[1130, 900]} metin="WALKING SHOES" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "minimize")} bitis={bit1} satirlar={["LIMIT", "ALCOHOL"]} x={1860} y={220} boyut={118}
        hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={tGrad} satirlar={["GRADUAL", "WEIGHT LOSS"]} x={1860} y={220} boyut={92} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.koyuYesil]} />
      <Ikon t={t} bas={tCrash} ad="carpi" x={1360} y={505} boyut={66} zemin={RENK.mercan} />
      <Baslik t={t} bas={tCrash} metin="NOT A CRASH PLAN" x={1860} y={505} boyut={58} hiza="sag" renk={RENK.mercan} />
    </>
  );
};
export default S47;
