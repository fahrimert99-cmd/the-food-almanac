// Sahne 9 — makula pigmenti: lutein + zeaxanthin makulada toplanır.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(1, "Researchers");
  const tSon = K(2, "That idea") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [20, 11, 1880], [90, 50, 1740])}>
        {/* besinler: yaprak etiketleri */}
        <Etiket t={t} bas={K(0, "lutein")} bitis={K(0, "collect") - 0.1} capa={[640, 250]} konum={[250, 200]} metin="LUTEIN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "zeaxanthin")} bitis={K(0, "collect") - 0.1} capa={[1280, 250]} konum={[1680, 200]} metin="ZEAXANTHIN" renk={RENK.altin} />
        {/* makula */}
        <Etiket t={t} bas={K(0, "macula")} bitis={K(0, "macular") - 0.05} capa={[980, 515]} konum={[1660, 520]} metin="MACULA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "macular")} bitis={tSon} capa={[1010, 560]} konum={[1640, 600]} metin="MACULAR PIGMENT" renk={RENK.altin} />
        {/* spinach + eggs → makula */}
        <Parcaciklar t={t} bas={K(2, "spinach")} kaynak={[1290, 760]} hedef={[980, 520]} adet={14} aralik={0.09} tohum="s9a" kavis={-120} />
        <Parcaciklar t={t} bas={K(2, "eggs")} kaynak={[650, 765]} hedef={[980, 520]} adet={14} aralik={0.09} tohum="s9b" kavis={-120} />
        <Etiket t={t} bas={K(2, "spinach")} capa={[1300, 790]} konum={[1700, 880]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "eggs")} capa={[640, 770]} konum={[250, 860]} metin="EGGS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tBaslik} bitis={tSon} metin="MAY HELP" x={1860} y={720} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBaslik + 0.18} bitis={tSon} metin="PROTECT IT" x={1860} y={815} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S09;
