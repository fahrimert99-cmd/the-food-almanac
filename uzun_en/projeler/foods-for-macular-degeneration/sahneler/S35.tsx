// Sahne 35 — sağlıklı gözler için değil; Cochrane sınırı
import React from "react";
import { BaslikBlok, Ikon, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tC = K(1, "Cochrane") - 0.15;
  const a1 = [
    { bas: K(0, "healthy,"), metin: "HEALTHY EYES", bitis: tC },
    { bas: K(0, "drusen,"), metin: "ONLY A FEW SMALL DRUSEN", bitis: tC },
    { bas: K(0, "risk"), metin: "LOW FIVE-YEAR RISK", bitis: tC },
  ];
  const a2 = [
    { bas: K(1, "only"), metin: "ONLY PEOPLE WHO ALREADY HAD THE DISEASE", renk: RENK.altin },
    { bas: K(1, "can't"), metin: "CAN'T SAY IF PILLS PREVENT IT", renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 50, 1780])} />
      <BaslikBlok t={t} bas={0.4} satirlar={["NOT FOR", "HEALTHY EYES"]} x={1250} y={190} boyut={88} adim={0.18}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} ogeler={a1} x={1250} y={410} aralik={84} boyut={30} isaret="nokta" genislik={620} />
      <Ikon t={t} bas={K(0, "isn't")} ad="carpi" x={1290} y={720} boyut={64} zemin={RENK.mercan} bitis={tC} />
      <Not t={t} bas={K(0, "isn't")} bitis={tC} metin="FORMULA NOT RECOMMENDED" x={1340} y={696} boyut={30} agirlik={800} genislik={520} renk={RENK.mercan} />
      <Liste t={t} ogeler={a2} x={1250} y={410} aralik={150} boyut={30} isaret="nokta" genislik={600} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tC} y={24} />
    </>
  );
};

export default S35;
