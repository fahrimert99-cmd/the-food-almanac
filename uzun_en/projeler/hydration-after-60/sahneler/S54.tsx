// Sahne 54 — kalp/böbrek hastaları: komodin görseli, sağda liste + başlık
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [40, 60, 1780])}>
        <Etiket t={t} bas={K(0, "care team")} capa={[790, 630]} konum={[1330, 880]} metin="CARE TEAM" renk={RENK.yesil} />
      </Kamera>
      <Liste t={t} isaret="nokta" x={1220} y={150} aralik={86} boyut={32} genislik={640}
        ogeler={[
          { bas: K(0, "heart failure"), metin: "HEART FAILURE", renk: RENK.mercan, bitis: K(0, "use the") + 0.5 },
          { bas: K(0, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.mercan, bitis: K(0, "use the") + 0.5 },
          { bas: K(0, "diuretic"), metin: "TAKING A DIURETIC", renk: RENK.mercan, bitis: K(0, "use the") + 0.5 },
        ]} />
      <BaslikBlok t={t} bas={K(0, "use the")} satirlar={b.satirlar} x={1860} y={260} boyut={84} hiza="sag" />
      <Not t={t} bas={K(0, "not the")} metin="NOT THE GENERAL GUIDELINE" x={1860} y={470} boyut={32} hiza="sag" agirlik={800} genislik={640} renk={RENK.gri} />
    </>
  );
};
export default S54;
