// Sahne 46 — Yatmadan 2 saat önce sıvıyı kes, mesaneyi boşalt, ilaçtan önce 3 ay dene; uzman görüşü.
import React from "react";
import { BaslikBlok, Hap, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "expert"), 0.5);
  const [s2, a2] = pop(t, K(1, "not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={940} opak={0.92} />
      <BaslikBlok t={t} bas={0.3} satirlar={s.meta.baslik!.satirlar} x={1020} y={150} boyut={100} hiza="sol" />
      <Liste t={t} isaret="sayi" x={1020} y={380} aralik={120} boyut={34} genislik={840}
        ogeler={[
          { bas: K(0, "avoiding"), metin: "NO FLUIDS 2+ HOURS BEFORE BED", renk: RENK.altin },
          { bas: K(0, "emptying"), metin: "EMPTY YOUR BLADDER", renk: RENK.altin },
          { bas: K(0, "trying"), metin: "TRY UP TO 3 MONTHS FIRST", renk: RENK.altin },
        ]} />
      <div style={{ position: "absolute", left: 1020, top: 790, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
        <Hap metin="EXPERT GUIDANCE" renk={RENK.lacivert} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1020, top: 870, transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
        <Hap metin="NOT LARGE TRIALS" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};
export default S46;
