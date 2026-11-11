// Sahne 10 — dört pişirme yöntemi: her araç adı söylenince etiketlenir, sonra ölçülen üç besin.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitisAraclar = c[1].bas - 0.15;
  const olcum = [
    { ifade: "vitamin C", metin: "VITAMIN C", renk: RENK.altin },
    { ifade: "folate", metin: "FOLATE", renk: RENK.yesil },
    { ifade: "carotenoids", metin: "CAROTENOIDS", renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "boiling")} bitis={bitisAraclar} capa={[360, 520]} konum={[300, 190]} metin="BOILING" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(0, "steaming")} bitis={bitisAraclar} capa={[800, 560]} konum={[820, 120]} metin="STEAMING" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(0, "pressure")} bitis={bitisAraclar} capa={[1167, 520]} konum={[1160, 170]} metin="PRESSURE STEAMING" renk={RENK.altin} boyut={24} />
        <Etiket t={t} bas={K(0, "microwaving")} bitis={bitisAraclar} capa={[1573, 440]} konum={[1610, 190]} metin="MICROWAVE" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "13 frozen") - 0.1} bitis={K(0, "boiling") - 0.2} metin="13 FROZEN VEGETABLES" x={1860} y={185} boyut={74}
        hiza="sag" renk={RENK.koyuYesil} />
      {/* ölçülen besinler: sağ üstte boş kâğıtta sırayla */}
      <div style={{ position: "absolute", right: 70, top: 128, display: "flex", gap: 16 }}>
        {olcum.map((o) => {
          const [sc, al] = pop(t, K(1, o.ifade), 0.5);
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, transformOrigin: "50% 50%", opacity: al }}>
              <Hap metin={o.metin} renk={o.renk} boyut={26} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S10;
