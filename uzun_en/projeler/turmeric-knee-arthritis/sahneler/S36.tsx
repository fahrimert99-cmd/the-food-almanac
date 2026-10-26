// Sahne 36 — üç farklı şişe: her çalışma kendi özütünü test etti.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit0 = c[1].bas - 0.2, bit1 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1830])}>
        {/* şişe etiketleri boş kâğıt alanında; anlatım sırasına göre */}
        <Etiket t={t} bas={K(1, "Thai trial")} bitis={bit1} capa={[493, 400]} konum={[493, 596]} metin="THAI TRIAL" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "Tasmanian")} bitis={bit1} capa={[970, 400]} konum={[970, 596]} metin="TASMANIAN TRIAL" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(1, "branded")} bitis={bit1} capa={[1463, 400]} konum={[1463, 596]} metin="BRANDED CURCUMIN" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* üst boş şeritte başlıklar */}
      <Baslik t={t} bas={K(0, "trial result")} bitis={bit0} metin="NOT ANY BOTTLE" x={960} y={78} boyut={62} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(2, "Different")} metin="DIFFERENT PRODUCTS," x={940} y={78} boyut={58} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "doses")} metin="DIFFERENT DOSES" x={980} y={78} boyut={58} renk={RENK.koyuYesil} hiza="sol" />
    </>
  );
};

export default S36;
