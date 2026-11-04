// Sahne 8 — tip 3 dirençli nişasta: kristaller sindirilmeden geçer. Sağda başlık, solda/ortada etiketler.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1820])}>
        <Etiket t={t} bas={K(0, "crystals")} bitis={c[1].bas - 0.1} capa={[1130, 470]} konum={[1290, 300]} metin="TIGHT CRYSTALS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "down")} bitis={c[1].bas + 1.5} capa={[230, 620]} konum={[200, 800]} metin="GLUCOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "small intestine")} capa={[650, 640]} konum={[860, 905]} metin="SMALL INTESTINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "undigested")} capa={[1300, 470]} konum={[1290, 770]} metin="UNDIGESTED" renk={RENK.koyuYesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "type")} vurgu="TYPE 3" x={1640} y={230} genislik={340} boyut={84} />
      <Baslik t={t} bas={K(1, "resistant")} metin="RESISTANT" x={1860} y={480} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "starch")} metin="STARCH" x={1860} y={595} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "starch") + 0.3} metin="starch your enzymes struggle to digest" x={1860} y={665} hiza="sag" boyut={28} genislik={440} />
      <Baslik t={t} bas={K(2, "like")} metin="A BIT LIKE FIBER" x={1860} y={880} boyut={60} hiza="sag" renk={RENK.altin} />
    </>
  );
};

export default S08;
