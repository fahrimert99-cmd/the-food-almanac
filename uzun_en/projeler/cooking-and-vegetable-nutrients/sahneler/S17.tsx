// Sahne 17 — Palermo: buharda pişirme; brokoli suya hiç değmez.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFen = K(1, "phenols"), tGlu = K(1, "glucosinolates"), tBrok = K(1, "broccoli"), tSu = K(1, "never touches");
  const tBuhar = K(1, "Steaming");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Parcaciklar t={t} bas={tBuhar} kaynak={[960, 700]} hedef={[960, 560]} adet={26} aralik={0.4} omur={1.8} yayilma={300} kavis={-60}
          boyut={5} tohum="buhar" hedefYayilma={200} />
        <Etiket t={t} bas={tBrok} bitis={tSu - 0.2} capa={[1000, 330]} konum={[1560, 330]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={tSu} capa={[820, 730]} konum={[330, 790]} metin="NEVER TOUCHES WATER" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Palermo") - 0.3} />
      <BaslikBlok t={t} bas={K(1, "Steaming")} satirlar={["STEAMING"]} x={1860} y={200} boyut={96} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Liste t={t} isaret="onay" x={60} y={250} boyut={34} aralik={80} genislik={520}
        ogeler={[{ bas: tFen, metin: "PHENOLS" }, { bas: tGlu, metin: "GLUCOSINOLATES" }]} />
    </>
  );
};

export default S17;
