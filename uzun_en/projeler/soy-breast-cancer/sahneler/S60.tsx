// Sahne 60 — korkunun kökeni (hayvan çalışmaları) ve insan verileri.
import React from "react";
import { Baslik, Etiket, ANTON, INTER, Kamera, Liste, Panel, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIns = K(1, "In people");
  const cikis = tIns - 0.1;
  const pPan = einout(ilerle(t, tIns - 0.2, 0.8));
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(0, "animal studies")} bitis={cikis} capa={[700, 430]} konum={[360, 210]} metin="ANIMAL STUDIES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "genistein")} bitis={cikis} capa={[1250, 330]} konum={[1300, 100]} metin="CONCENTRATED GENISTEIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "soy foods")} capa={[1130, 780]} konum={[1020, 900]} metin="SOY FOODS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.2} bitis={cikis} metin="THE FEAR BEGAN" x={80} y={90} boyut={72} renk={RENK.lacivert} />
      <Panel a={pPan} taraf="sol" genislik={1100} opak={1} />
      <Baslik t={t} bas={tIns} metin="IN PEOPLE" x={90} y={200} boyut={80} renk={RENK.koyuYesil} />
      <Liste t={t} x={90} y={330} aralik={190} boyut={38} isaret="onay" genislik={800}
        ogeler={[
          { bas: K(1, "haven't been linked"), metin: "NOT LINKED WITH HIGHER BREAST CANCER RISK" },
          { bas: K(1, "survivor studies"), metin: "LINKED WITH LOWER RECURRENCE IN LARGE SURVIVOR STUDIES" },
        ]} />
    </>
  );
};
export default S60;
