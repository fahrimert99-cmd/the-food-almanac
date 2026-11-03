// Sahne 52 — tek işarete güvenme: sağda panel + liste
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 50, 1760])}>
        <Etiket t={t} bas={K(2, "clues")} capa={[1170, 760]} konum={[1500, 740]} metin="CLUES, NOT PROOF" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, K(1, "Don't") - 0.2, 0.6))} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={K(1, "Don't")} satirlar={["DON'T LEAN", "ON ONE SIGN"]} x={1860} y={170} boyut={84} hiza="sag" />
      <Liste t={t} isaret="carpi" x={1360} y={400} aralik={96} boyut={34} genislik={500}
        ogeler={[
          { bas: K(2, "thirst"), metin: "THIRST", renk: RENK.mercan },
          { bas: K(2, "urine"), metin: "URINE COLOR", renk: RENK.mercan },
        ]} />
      <Not t={t} bas={K(2, "unreliable")} metin="UNRELIABLE ALONE" x={1360} y={600} boyut={34} agirlik={800} renk={RENK.mercan} />
      <KaynakEtiketi t={t} bas={K(2, "Cochrane")} metin="COCHRANE REVIEW 2015" />
    </>
  );
};
export default S52;
