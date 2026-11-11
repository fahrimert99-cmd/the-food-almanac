// Sahne 37 — peynirde nüans: yumuşak peynir otomatik riskli değil; çiğ süt ve ısıtılmamış queso fresco tarzı kaçınılır.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit2 = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [100, 100, 1700])}>
        <Etiket t={t} bas={K(1, "Soft")} bitis={bit2} capa={[700, 480]} konum={[330, 300]} metin="SOFT CHEESE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "raw")} capa={[1330, 480]} konum={[1690, 760]} metin="RAW MILK" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={1.0} />
      <Baslik t={t} bas={K(0, "Cheese")} bitis={c[1].bas - 0.1} metin="CHEESE NEEDS NUANCE" x={140} y={160} boyut={84} renk={RENK.lacivert} />
      <Liste t={t} isaret="carpi" x={140} y={135} aralik={72} boyut={30} genislik={1000}
        ogeler={[
          { bas: K(2, "raw"), metin: "RAW MILK CHEESE, UNHEATED", renk: RENK.mercan },
          { bas: K(2, "queso"), metin: "UNHEATED QUESO FRESCO STYLE", renk: RENK.mercan },
          { bas: K(2, "even"), metin: "EVEN WHEN PASTEURIZED", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S37;
