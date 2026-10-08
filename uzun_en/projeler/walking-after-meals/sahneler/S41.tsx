// Sahne 41 — yürüyüş yemeği silmez, ilacın / dengeli beslenmenin / tıbbi bakımın yerini tutmaz.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWalk = K(0, "walk"), tErase = K(0, "erase"), tLow = K(1, "lowers"), tCan = K(1, "cancel"), tDes = K(1, "dessert");
  const tSub = K(2, "isn't"), tMed = K(2, "medication,"), tDiet = K(2, "balanced"), tCare = K(2, "medical");
  const gec = K(2, "It") - 0.3;
  const a1 = sol(t, gec);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1720])}>
        <Etiket t={t} bas={tWalk} bitis={gec} capa={[250, 800]} konum={[300, 400]} metin="A WALK" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, tErase - 0.2, 0.6))} taraf="sag" genislik={680} />
      <div style={{ opacity: a1 }}>
        <BaslikBlok t={t} bas={tErase} satirlar={["DOESN'T ERASE", "A MEAL"]} x={1860} y={200} boyut={78} hiza="sag"
          renkler={[RENK.lacivert, RENK.mercan]} />
        <Liste t={t} x={1340} y={420} aralik={100} boyut={30} genislik={540} isaret="onay" ogeler={[
          { bas: tLow, metin: "LOWERS GLUCOSE CURVE" },
        ]} />
        <Liste t={t} x={1340} y={520} aralik={110} boyut={30} genislik={540} isaret="carpi" ogeler={[
          { bas: tCan, metin: "DOESN'T CANCEL CALORIES", renk: RENK.mercan },
          { bas: tDes, metin: "DESSERT ≠ SALAD", renk: RENK.mercan },
        ]} />
      </div>
      <BaslikBlok t={t} bas={tSub} satirlar={["NOT A", "SUBSTITUTE"]} x={1860} y={200} boyut={78} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1340} y={420} aralik={110} boyut={30} genislik={540} isaret="carpi" ogeler={[
        { bas: tMed, metin: "FOR MEDICATION", renk: RENK.mercan },
        { bas: tDiet, metin: "FOR A BALANCED DIET", renk: RENK.mercan },
        { bas: tCare, metin: "FOR MEDICAL CARE", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S41;
