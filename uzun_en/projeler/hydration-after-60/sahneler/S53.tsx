// Sahne 53 — sıcak ve aktif günler: bank, sağda başlık + liste
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [40, 60, 1780])}>
        <Etiket t={t} bas={K(1, "Drink")} capa={[593, 430]} konum={[1000, 140]} metin="A LITTLE MORE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "hot weather")} capa={[600, 800]} konum={[1560, 775]} metin="HOT WEATHER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "active days")} capa={[1030, 850]} konum={[1560, 895]} metin="ACTIVE DAYS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "Drink")} satirlar={b.satirlar} x={1860} y={290} boyut={100} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1260} y={480} aralik={84} boyut={32} genislik={600}
        ogeler={[
          { bas: K(1, "heat"), metin: "HEAT", renk: RENK.mercan },
          { bas: K(1, "exercise"), metin: "EXERCISE", renk: RENK.altin },
          { bas: K(1, "raise"), metin: "RAISE FLUID NEEDS", renk: RENK.yesil },
        ]} />
    </>
  );
};
export default S53;
