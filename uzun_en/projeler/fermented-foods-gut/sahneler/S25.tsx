// Sahne 25 — ne gösteriyor: belirteçler, hastalık değil. Sağ panelde liste, sonra başlık + çarpı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHealthy = K(0, "healthy"), tFerm = K(0, "fermented"), tShift = K(0, "shifted"), tWeeks = K(0, "within");
  const tIt = K(1, "It"), tNot = K(1, "not"), tPrev = K(1, "prevent");
  const cik = tIt - 0.1;
  const pPan = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1790])}>
        <Etiket t={t} bas={tFerm} bitis={cik} capa={[480, 470]} konum={[520, 235]} metin="FERMENTED FOODS" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={880} />
      <Liste t={t} x={1230} y={300} aralik={115} boyut={36} isaret="onay" genislik={640} ogeler={[
        { bas: tHealthy, metin: "HEALTHY ADULTS", bitis: cik },
        { bas: tFerm, metin: "FERMENTED FOODS", bitis: cik },
        { bas: tShift, metin: "MARKERS SHIFTED", bitis: cik },
        { bas: tWeeks, metin: "WITHIN WEEKS", bitis: cik, renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={tIt} metin="MARKERS," x={1860} y={290} boyut={112} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tNot} metin="NOT DISEASE" x={1860} y={410} boyut={112} renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={tPrev} ad="carpi" x={1360} y={640} boyut={100} zemin={RENK.mercan} />
      <Not t={t} bas={tPrev + 0.15} metin="PREVENTION NOT SHOWN" x={1860} y={612} boyut={34} agirlik={800} renk={RENK.mercan} hiza="sag" genislik={430} />
    </>
  );
};

export default S25;
