// Sahne 12 — tükürenlerde düşüş yok: ağız önemli bir adım.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAgiz = K(1, "mouth");
  const [sc, al] = pop(t, tAgiz, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 140, 1920], [60, 180, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Not t={t} bas={K(0, "six")} metin="A SMALL TEST · 6 PEOPLE" x={1000} y={90} boyut={34} agirlik={800} renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "spat")} capa={[1067, 770]} konum={[1067, 640]} metin="SPAT OUT" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "swallowing")} capa={[700, 700]} konum={[700, 490]} metin="SWALLOWED" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(0, "did")} satirlar={["NO SALIVA,", "NO DROP"]} x={1000} y={230} boyut={100} adim={0.3}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 1500, top: 600, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MOUTH: KEY STEP" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S12;
