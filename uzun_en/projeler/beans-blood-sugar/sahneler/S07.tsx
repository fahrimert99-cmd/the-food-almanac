// Sahne 7 — kesilmiş tohum: hücre duvarları, lif + protein, yavaş sindirim
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSlow = K(1, "so");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1780])}>
        <Etiket t={t} bas={K(1, "tough")} capa={[267, 270]} konum={[330, 110]} metin="TOUGH CELL WALLS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "fiber")} capa={[413, 480]} konum={[860, 110]} metin="FIBER + PROTEIN" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={tSlow + 0.2} kaynak={[1500, 620]} hedef={[430, 420]} adet={9} aralik={0.45} omur={3.2}
          yayilma={80} hedefYayilma={140} kavis={-60} renk={RENK.lacivert} boyut={7} tohum="enz" />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "packed") - 0.1} bitis={tSlow - 0.15} satirlar={["PACKED", "DIFFERENTLY"]} x={1860} y={300} boyut={96} hiza="sag" />
      <BaslikBlok t={t} bas={tSlow} satirlar={b.satirlar} x={1860} y={300} boyut={110} hiza="sag" />
      <Not t={t} bas={K(1, "digestive")} metin="ENZYMES WORK THROUGH IT SLOWLY" x={1860} y={540} boyut={34} hiza="sag" genislik={520} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S07;
