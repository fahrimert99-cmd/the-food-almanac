// Sahne 21 — sandalye ve koniler: hangi testlerde fark vardı, hangilerinde yoktu.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, K(0, "knee pain") - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <Etiket t={t} bas={K(0, "Curcumin")} bitis={3.2} capa={[1000, 390]} konum={[1560, 190]} metin="CURCUMIN" renk={RENK.altin} />
      <Panel a={pPanel} taraf="sol" genislik={780} />
      <Baslik t={t} bas={K(0, "knee pain") } metin="BETTER THAN PLACEBO" x={70} y={150} boyut={50} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="onay" x={70} y={230} aralik={86} boyut={34} genislik={680}
        ogeler={[{ bas: K(0, "pain scores"), metin: "KNEE PAIN SCORES" },
                 { bas: K(0, "get-up-and-walk"), metin: "GET-UP-AND-WALK TEST" },
                 { bas: K(0, "six-minute"), metin: "SIX-MINUTE WALK" }]} />
      <Baslik t={t} bas={K(1, "chair-stand")} metin="NO CLEAR BENEFIT" x={70} y={560} boyut={50} renk={RENK.mercan} />
      <Liste t={t} isaret="nokta" x={70} y={640} aralik={86} boyut={34} genislik={680}
        ogeler={[{ bas: K(1, "chair-stand"), metin: "CHAIR-STAND TEST", renk: RENK.gri },
                 { bas: K(1, "fast-walking"), metin: "FAST-WALKING TEST", renk: RENK.gri }]} />
    </>
  );
};

export default S21;
