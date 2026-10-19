// Sahne 50 — GÜVENLİK NOTU: sağda başlık + liste, solda doktor/sebze nesneleri.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const kapat = K(1, "for example") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1780])}>
        <Etiket t={t} bas={K(1, "doctor")} bitis={kapat} capa={[540, 808]} konum={[880, 560]} metin="DOCTOR OR DIETITIAN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "vegetables,")} bitis={kapat} capa={[300, 650]} konum={[300, 500]} metin="VEGETABLES" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "short") - 0.1} satirlar={b.satirlar} x={1860} y={230} boyut={130} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1150} y={520} aralik={96} boyut={40} isaret="nokta" genislik={710}
        ogeler={[
          { bas: K(1, "medical"), metin: "MEDICAL CONDITION", renk: RENK.altin },
          { bas: K(1, "medicine,"), metin: "A MEDICINE", renk: RENK.altin },
        ]} />
      <Baslik t={t} bas={K(1, "keep")} metin="KEEP FOLLOWING IT" x={1860} y={800} boyut={76} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S50;
