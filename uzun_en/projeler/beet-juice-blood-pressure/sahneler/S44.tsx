// Sahne 44 — zararsız sürpriz: pembe idrar.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1760])} />
      <Not t={t} bas={K(0, "harmless")} bitis={2.9} x={1860} y={140} hiza="sag" metin="A harmless surprise" boyut={44} agirlik={800} renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "juice")} bitis={6.6} capa={[760, 560]} konum={[1060, 560]} metin="BEET JUICE" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "urine")} satirlar={b.satirlar} x={1860} y={190} boyut={100} hiza="sag" renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={K(1, "stool")} x={1860} y={430} hiza="sag" metin="REDDISH STOOL" boyut={42} agirlik={800} renk={RENK.mercan} />
      <Ikon t={t} bas={K(2, "no")} ad="onay" x={1325} y={548} boyut={80} />
      <Not t={t} bas={K(2, "serious")} x={1860} y={525} hiza="sag" metin="NO SERIOUS SIDE EFFECTS" boyut={40} agirlik={800} renk={RENK.yesil} />
    </>
  );
};

export default S44;
