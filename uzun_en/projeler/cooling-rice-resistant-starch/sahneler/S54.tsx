// Sahne 54 — güvenlik notu: diyabet / ilaç kullananlar öğün ya da dozu değiştirmesin.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDiy = K(1, "diabetes"), tIns = K(1, "insulin"), tSulf = K(1, "sulfonylureas"), tDeg = K(1, "change");
  const tMeal = K(1, "meals"), tDoz = K(1, "doses"), tKucuk = K(2, "small"), tEkip = K(2, "care team");
  const bit = tDeg - 0.15;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1760], [0, 70, 1600])}>
        <Etiket t={t} bas={tIns} bitis={bit} capa={[880, 640]} konum={[820, 820]} metin="INSULIN" renk={RENK.mercan} />
        <Etiket t={t} bas={tEkip} capa={[430, 700]} konum={[300, 850]} metin="CARE TEAM" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.05, 0.6))} taraf="sag" genislik={1000} />
      <BaslikBlok t={t} bas={0.05} satirlar={["SAFETY", "FIRST"]} x={1860} y={190} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1300} y={500} aralik={80} boyut={34} isaret="nokta" genislik={560} ogeler={[
        { bas: tDiy, metin: "DIABETES", renk: RENK.altin, bitis: bit },
        { bas: tIns, metin: "INSULIN", renk: RENK.altin, bitis: bit },
        { bas: tSulf, metin: "SULFONYLUREAS", renk: RENK.altin, bitis: bit },
      ]} />
      <Liste t={t} x={1300} y={500} aralik={80} boyut={34} isaret="carpi" genislik={560} ogeler={[
        { bas: tMeal - 0.3, metin: "NO MEAL CHANGES", renk: RENK.mercan },
        { bas: tDoz - 0.3, metin: "NO DOSE CHANGES", renk: RENK.mercan },
      ]} />
      <Liste t={t} x={1300} y={730} aralik={80} boyut={34} isaret="onay" genislik={560} ogeler={[
        { bas: tKucuk, metin: "SMALL EFFECT", renk: RENK.altin },
        { bas: tEkip, metin: "YOUR CARE TEAM", renk: RENK.yesil },
      ]} />
    </>
  );
};
export default S54;
