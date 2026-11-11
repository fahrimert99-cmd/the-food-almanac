// Sahne 6 — kaynayan bakır tencere; kayıp.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLoss = K(1, "first");
  const kapat = K(0, "boiling") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(0, "boiling")} bitis={tLoss - 0.2} capa={[1150, 600]} konum={[1500, 420]} metin="BOILING WATER" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "water-soluble")} bitis={tLoss - 0.2} capa={[880, 600]} konum={[560, 300]} metin="WATER-SOLUBLE" renk={RENK.lacivert} />
        <Parcaciklar t={t} bas={K(0, "boiling")} kaynak={[1070, 570]} hedef={[1230, 600]} adet={16} aralik={0.28} omur={1.6} kavis={-40}
          yayilma={60} hedefYayilma={120} tohum="s6" boyut={5} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Heat")} bitis={kapat} metin="HEAT" x={70} y={150} boyut={120} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "break")} bitis={kapat} metin="BREAKS SOME DOWN" x={70} y={270} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={tLoss} metin="THE FIRST EFFECT OF COOKING" x={1860} y={170} hiza="sag" boyut={34} agirlik={800} genislik={800} />
      <Baslik t={t} bas={K(1, "loss.")} metin="LOSS" x={1860} y={300} boyut={150} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S06;
