// Sahne 20 — İki tepsi: çalışmada karşılaştırma grubu plasebo değil, yalnızca olağan bakım aldı.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [120, 70, 1700])} />
      <AltSis a={0.5} />
      {/* karşılaştırma grubu: boş peçete */}
      <Etiket t={t} bas={K(0, "usual care")} bitis={K(1, "That")} capa={[1427, 540]} konum={[1480, 880]} metin="USUAL CARE ALONE" renk={RENK.lacivert} />
      {/* plasebo kapsülü yok: boş tepsi */}
      <Etiket t={t} bas={K(0, "placebo")} bitis={K(1, "That")} capa={[1230, 700]} konum={[900, 880]} metin="NO PLACEBO" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "look better")} metin="CAN LOOK BETTER THAN IT IS" x={960} y={150} boyut={84} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S20;
