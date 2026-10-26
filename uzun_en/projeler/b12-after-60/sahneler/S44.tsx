// Sahne 44 — bir: metformin. Başlık solda, etiketler şişe ve kum saatinde.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, RENK, SP, VurguRozet, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "metformin")} bitis={tSon} capa={[1170, 800]} konum={[800, 760]} metin="METFORMIN" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={K(1, "long")} bitis={tSon} capa={[1490, 640]} konum={[1100, 470]} metin="LONG TIME" renk={RENK.koyuYesil} boyut={32} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik!.satirlar} x={100} y={200} boyut={120} />
      <VurguRozet t={t} bas={K(2, "routine")} vurgu="ROUTINE TESTING" not="TRIAL AUTHORS: CONSIDER IT" x={470} y={520} genislik={720}
        boyut={74} renk={RENK.koyuYesil} />
    </>
  );
};

export default S44;
