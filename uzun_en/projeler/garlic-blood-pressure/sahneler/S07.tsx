// Sahne 7 — mmHg ve uzun süreli yüksek basıncın yükü: sol panelde.
import React from "react";
import { Baslik, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  const tBitis = K(1, "Doctors") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [700, 230, 1220], [740, 260, 1160])} />
      <Panel a={pPanel} taraf="sol" genislik={860} opak={0.97} />
      <Baslik t={t} bas={K(0, "millimeters")} bitis={tBitis} metin="MILLIMETERS" x={90} y={330} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "mercury")} bitis={tBitis} metin="OF MERCURY" x={90} y={450} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Doctors")} metin="HIGH FOR YEARS" x={90} y={250} boyut={70} renk={RENK.mercan} />
      <Liste t={t} isaret="nokta" x={90} y={370} aralik={120} boyut={44} genislik={760} ogeler={[
        { bas: K(1, "strain"), metin: "STRAIN ON YOUR HEART", renk: RENK.mercan },
        { bas: K(1, "arteries"), metin: "STRAIN ON ARTERIES", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S07;
