// Sahne 34 — süt de bakterileri biraz değiştirdi: kontrol grubu neden önemli.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tKontrol = K(1, "control");
  const pPanel = eout(ilerle(t, tKontrol - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1760], [60, 90, 1620])}>
        <Etiket t={t} bas={K(0, "Plain milk")} bitis={tKontrol - 0.1} capa={[260, 520]} konum={[210, 130]} metin="PLAIN MILK" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "little")} bitis={tKontrol - 0.1} capa={[330, 760]} konum={[330, 940]} metin="SHIFTED A LITTLE" renk={RENK.mercan} />
        <Etiket t={t} bas={tKontrol} capa={[260, 520]} konum={[210, 130]} metin="CONTROL GROUP" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={tKontrol} satirlar={s.meta.baslik!.satirlar} x={1860} y={290} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "small trials")} metin="SMALL TRIALS CAN SEE CHANGES" x={1860} y={540} hiza="sag" genislik={640} boyut={36} agirlik={800} />
      <Not t={t} bas={K(1, "not caused")} metin="NOT CAUSED BY THE KEFIR" x={1860} y={650} hiza="sag" genislik={640} boyut={36} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S34;
