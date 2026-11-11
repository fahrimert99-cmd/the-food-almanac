// Sahne 14 — "Bir taban, hedef değil": azot dengesi çalışmaları; eksiklik önleme. Sağ boşlukta başlık ve maddeler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tPrev = K(1, "prevent deficiency");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [90, 100, 1720])}>
        {/* mikroskop */}
        <Etiket t={t} bas={K(0, "nitrogen")} bitis={tPrev - 0.3} capa={[690, 470]} konum={[1330, 330]} metin="NITROGEN BALANCE" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: tanım maddeleri */}
      <Liste t={t} x={1180} y={440} aralik={86} boyut={36} isaret="nokta" genislik={690} ogeler={[
        { bas: K(0, "smallest intake"), metin: "SMALLEST INTAKE", renk: RENK.altin, bitis: tPrev - 0.3 },
        { bas: K(0, "losing protein"), metin: "NO STEADY PROTEIN LOSS", renk: RENK.altin, bitis: tPrev - 0.3 },
      ]} />
      {/* 2. cümle: başlık + sonuç */}
      <BaslikBlok t={t} bas={tPrev} satirlar={b.satirlar} x={1860} y={190} boyut={104} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1250} y={470} aralik={80} boyut={34} isaret="onay" genislik={620} ogeler={[
        { bas: tPrev + 0.2, metin: "PREVENTS DEFICIENCY" },
        { bas: K(1, "healthy adults"), metin: "IN HEALTHY ADULTS" },
      ]} />
      <Liste t={t} x={1250} y={630} aralik={80} boyut={34} isaret="carpi" genislik={620} ogeler={[
        { bas: K(1, "not to keep"), metin: "NOT FOR STRONG MUSCLE", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S14;
