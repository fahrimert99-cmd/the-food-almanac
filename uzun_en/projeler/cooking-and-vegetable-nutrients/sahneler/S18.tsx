// Sahne 18 — NIH: C vitamini kayıpları; buharda veya mikrodalgada daha az.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tC = K(1, "vitamin"), tAzalt = K(1, "reduce"), tBuhar = K(1, "steaming"), tMikro = K(1, "microwaving"), tKayip = K(1, "lessen");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 16, 1860])}>
        <Etiket t={t} bas={tC} bitis={tBuhar - 0.2} capa={[330, 520]} konum={[330, 250]} metin="VITAMIN C" renk={RENK.altin} />
        <Etiket t={t} bas={tAzalt} bitis={tBuhar - 0.2} capa={[520, 640]} konum={[900, 150]} metin="CAN BE REDUCED" renk={RENK.mercan} />
        <Etiket t={t} bas={tMikro} capa={[820, 500]} konum={[1000, 160]} metin="MICROWAVE" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "National") - 0.3} />
      <Baslik t={t} bas={tBuhar} metin="STEAM OR" x={1860} y={470} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tMikro} metin="MICROWAVE" x={1860} y={580} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tKayip} metin="MAY LESSEN THE LOSSES" x={1860} y={660} hiza="sag" boyut={34} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S18;
