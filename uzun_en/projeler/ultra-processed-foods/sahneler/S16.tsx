// Sahne 16 — +508 kcal/gün; fazlalık karbonhidrat ve yağdan, proteinden değil.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sh, ah] = pop(t, K(0, "ultra-processed"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [40, 90, 1800])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <div style={{ position: "absolute", left: 160, top: 128, transform: `scale(${sh})`, transformOrigin: "0% 50%", opacity: ah }}>
        <Hap metin="ULTRA-PROCESSED DIET" renk={RENK.mercan} boyut={32} />
      </div>
      <Baslik t={t} bas={K(0, "508")} metin="+508" x={150} y={282} boyut={150} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "calories")} metin="CALORIES A DAY" x={156} y={398} boyut={64} renk={RENK.lacivert} />
      <Liste t={t} x={1010} y={130} aralik={84} boyut={36} isaret="nokta" genislik={760} ogeler={[
        { bas: K(1, "carbohydrate"), metin: "MORE CARBOHYDRATE", renk: RENK.altin },
        { bas: K(1, "fat,"), metin: "MORE FAT", renk: RENK.altin },
      ]} />
      <Liste t={t} x={1010} y={298} aralik={84} boyut={36} isaret="carpi" genislik={760} ogeler={[
        { bas: K(1, "protein"), metin: "NOT PROTEIN", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S16;
