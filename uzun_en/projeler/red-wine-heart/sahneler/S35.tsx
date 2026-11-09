// Sahne 35 — yoğun içmenin kalp riskleri; AHA: her düzeyde risk.
import React from "react";
import { BaslikBlok, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "the aha") - 0.1;
  const o = (f: string, m: string) => ({ bas: K(0, f), metin: m, renk: RENK.altin, bitis: gec });
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={760} />
      <BaslikBlok t={t} bas={0.2} bitis={gec} satirlar={["HEAVY & BINGE", "DRINKING"]} x={70} y={170} boyut={78}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.5} />
      <Not t={t} bas={K(0, "consistently")} bitis={gec} metin="CONSISTENTLY LINKED WITH:" x={70} y={350} boyut={30} agirlik={800} renk={RENK.gri} />
      <Liste t={t} x={70} y={410} aralik={88} boyut={34} isaret="nokta" genislik={680}
        ogeler={[o("high", "HIGH BLOOD PRESSURE"), o("coronary", "CORONARY ARTERY DISEASE"), o("stroke", "STROKE"),
          o("irregular", "IRREGULAR HEART RHYTHMS"), o("failure", "HEART FAILURE")]} />
      <Ikon t={t} bas={K(1, "the aha")} ad="uyari" x={130} y={250} zemin={RENK.altin} boyut={84} />
      <BaslikBlok t={t} bas={K(1, "any level")} satirlar={["ANY LEVEL", "OF DRINKING"]} x={70} y={420} boyut={86}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.3} />
      <Not t={t} bas={K(1, "potential")} metin="CARRIES POTENTIAL HEALTH RISKS" x={70} y={660} boyut={34} agirlik={800} genislik={640} />
    </>
  );
};

export default S35;
