// Sahne 18 — Soğuk buzdolabı sorunu çözmez: Listeria soğukta da büyür.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tL = K(2, "Listeria");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1760])}>
        <Etiket t={t} bas={K(0, "cold")} bitis={K(1, "Because") - 0.1} capa={[1090, 230]} konum={[1500, 190]} metin="COLD FRIDGE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "bacteria")} bitis={tL - 0.15} capa={[1250, 470]} konum={[1560, 420]} metin="BACTERIA" renk={RENK.mercan} />
        <Etiket t={t} bas={tL} capa={[1250, 650]} konum={[1580, 520]} metin="LISTERIA MONOCYTOGENES" renk={RENK.mercan} boyut={26} />
        <Parcaciklar t={t} bas={K(2, "grow")} kaynak={[1130, 560]} hedef={[1130, 330]} adet={14} omur={1.8} yayilma={200} hedefYayilma={140} kavis={-60} tohum="s18" />
      </Kamera>
      <BaslikBlok t={t} bas={K(2, "survive")} satirlar={["GROWS IN", "THE FRIDGE"]} x={1860} y={700} boyut={100} hiza="sag" />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? "FDA · Listeria"} bas={K(2, "FDA")} />
    </>
  );
};

export default S18;
