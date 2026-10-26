// Sahne 40 — hafıza: duvar boşluğunda başlık, liste ve NIH rozeti.
import React from "react";
import { BaslikBlok, Kamera, kameraYolu, Liste, RENK, SP, VurguRozet, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tListeSon = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 70, 1700])} />
      <BaslikBlok t={t} bas={K(0, "touch")} satirlar={s.meta.baslik!.satirlar} x={720} y={230} boyut={150} />
      <Liste t={t} x={720} y={560} aralik={100} boyut={48} isaret="nokta" genislik={760}
        ogeler={[
          { bas: K(1, "poor"), metin: "POOR MEMORY", renk: RENK.altin, bitis: tListeSon },
          { bas: K(1, "confusion"), metin: "CONFUSION", renk: RENK.altin, bitis: tListeSon },
          { bas: K(1, "depression"), metin: "DEPRESSION", renk: RENK.altin, bitis: tListeSon },
        ]} />
      <Liste t={t} x={720} y={560} aralik={100} boyut={48} isaret="nokta" genislik={760}
        ogeler={[
          { bas: K(2, "nerve"), metin: "NERVE DAMAGE", renk: RENK.altin },
          { bas: K(2, "without"), metin: "EVEN WITHOUT ANEMIA", renk: RENK.koyuYesil },
        ]} />
      <VurguRozet t={t} bas={K(2, "early")} vurgu="EARLY TREATMENT" not="NIH: IT MATTERS" x={1570} y={300} genislik={560}
        boyut={62} renk={RENK.koyuYesil} />
    </>
  );
};

export default S40;
