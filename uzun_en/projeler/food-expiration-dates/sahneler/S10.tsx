// Sahne 10 — FREEZE BY: USDA listesine yeni eklenen ifade; et ve kümes hayvanında çöpe alternatif.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "clear");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={K(1, "meat")} bitis={tSon} capa={[820, 740]} konum={[1400, 800]} metin="MEAT & POULTRY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "use or freeze")} bitis={tSon} capa={[950, 420]} konum={[1400, 650]} metin="USE OR FREEZE BY" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Freeze")} metin="FREEZE BY" x={1860} y={330} boyut={140} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "newer")} bitis={K(1, "Some") - 0.1} metin="A NEWER ADDITION TO THE USDA'S LIST" x={1860} y={440}
        hiza="sag" genislik={760} boyut={36} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={K(1, "alternative")} metin="an alternative to the trash, says a trade group" x={1860} y={440}
        hiza="sag" genislik={640} boyut={40} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S10;
