// Sahne 36 — FDA sınırlı sağlık iddiası: solda masa, sağda başlık + kapsam listesi.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Liste, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760]);
  const [sc, al] = pop(t, K(1, "2023"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={pen} />
      <Panel a={1} taraf="sag" genislik={760} />
      <Etiket t={t} bas={K(0, "FDA")} bitis={7.6} capa={[490, 340]} konum={[250, 130]} metin="FDA" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "high flavanol")} bitis={12.5} capa={[815, 290]} konum={[930, 120]} metin="HIGH-FLAVANOL COCOA" renk={RENK.yesil} boyut={24} />
      <Baslik t={t} bas={K(0, "FDA")} metin="FDA CLAIM:" x={1190} y={190} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "very limited")} metin="VERY LIMITED" x={1190} y={310} boyut={100} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1190, top: 430, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="2023 · LIMITED HEALTH CLAIM" renk={RENK.altin} boyut={26} />
      </div>
      <Liste t={t} isaret="onay" x={1190} y={560} boyut={32} aralik={84} genislik={660}
        ogeler={[{ bas: K(1, "high flavanol cocoa powder"), metin: "HIGH-FLAVANOL COCOA POWDER", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" x={1190} y={644} boyut={32} aralik={84} genislik={660}
        ogeler={[
          { bas: K(2, "regular cocoa powder"), metin: "REGULAR COCOA POWDER", renk: RENK.mercan },
          { bas: K(2, "chocolate"), metin: "CHOCOLATE", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S36;
