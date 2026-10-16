// Sahne 46 — 1. nokta: tansiyon değerlerini bil
import React from "react";
import { AltSis, ANTON, Baslik, BaslikBlok, Kamera, Liste, Not, Panel, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = einout(ilerle(t, 0, 0.15));
  const [sc, al] = pop(t, 0.05, 0.55);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 60, 1700])} />
      <AltSis a={0.9} />
      <Panel a={pPanel} taraf="sol" genislik={1020} opak={0.97} />
      <div style={{ position: "absolute", left: 90, top: 150, width: 96, height: 96, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64, transform: `scale(${sc})`, opacity: al }}>1</div>
      <BaslikBlok t={t} bas={K(1, "Know")} satirlar={["KNOW YOUR", "NUMBERS FIRST"]} x={90} y={340} boyut={92} />
      <Not t={t} bas={K(2, "effect")} metin="THE EFFECT WAS SEEN IN PEOPLE WITH" x={90} y={570} boyut={34} agirlik={800} renk={RENK.gri} />
      <Liste t={t} isaret="nokta" boyut={40} x={90} y={640} aralik={96} genislik={880}
        ogeler={[
          { bas: K(2, "high"), metin: "HIGH PRESSURE", renk: RENK.mercan },
          { bas: K(2, "clinic"), metin: "CLINIC OR HOME READING", renk: RENK.koyuYesil },
          { bas: K(2, "whether"), metin: "DOES IT APPLY TO YOU?", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S46;
