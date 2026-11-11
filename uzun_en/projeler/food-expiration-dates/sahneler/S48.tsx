// Sahne 48 — "Ask your doctor": doktor masası; sağ panelde riskli durumlar ve başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g1 = K(2, "If") - 0.1;
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(1, "Listeria")} bitis={g1} capa={[540, 300]} konum={[560, 80]} metin="LISTERIA FIGURES" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={720} />
      <Not t={t} bas={K(1, "groups")} bitis={g1} metin="FIGURES DESCRIBE GROUPS, NOT YOU" x={1860} y={150} hiza="sag" genislik={520} boyut={36} agirlik={800} />
      <Liste t={t} x={1260} y={150} aralik={96} boyut={30} isaret="nokta" genislik={600} ogeler={[
        { bas: K(2, "weakened"), metin: "WEAKENED IMMUNE SYSTEM", renk: RENK.altin },
        { bas: K(2, "medicine"), metin: "IMMUNE-LOWERING MEDICINE", renk: RENK.altin },
        { bas: K(2, "pregnant"), metin: "PREGNANT", renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(2, "ask")} satirlar={["ASK YOUR", "DOCTOR"]} x={1860} y={600} boyut={110} hiza="sag" />
    </>
  );
};

export default S48;
