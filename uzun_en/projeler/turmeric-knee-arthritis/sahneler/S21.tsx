// Sahne 21 — yürüme testleri: hangilerinde fayda görüldü, hangilerinde net fayda yok.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const s1Son = c[1].bas - 0.1;
  const tDid = K(0, "better"), tNo = K(1, "no clear");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "Curcumin")} capa={[820, 358]} konum={[640, 300]} metin="TURMERIC" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "pain")} satirlar={["LOWER KNEE", "PAIN SCORES"]} x={70} y={170} boyut={80} bitis={s1Son} />
      <Not t={t} bas={K(0, "placebo")} metin="MORE THAN PLACEBO" x={70} y={340} boyut={30} agirlik={800} renk={RENK.gri} bitis={s1Son} />
      <Liste t={t} x={1390} y={170} isaret="onay" boyut={30} aralik={92} genislik={480} ogeler={[
        { bas: K(0, "get-up-and-walk"), metin: "GET-UP-AND-WALK", renk: RENK.yesil, bitis: s1Son },
        { bas: K(0, "six-minute"), metin: "SIX-MINUTE WALK", renk: RENK.yesil, bitis: s1Son },
      ]} />
      <Liste t={t} x={1390} y={170} isaret="nokta" boyut={30} aralik={92} genislik={480} ogeler={[
        { bas: K(1, "chair-stand"), metin: "CHAIR-STAND TEST", renk: RENK.gri },
        { bas: K(1, "fast-walking"), metin: "FAST-WALKING TEST", renk: RENK.gri },
      ]} />
      <BaslikBlok t={t} bas={tNo} satirlar={["NO CLEAR", "BENEFIT"]} x={70} y={170} boyut={80} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S21;
