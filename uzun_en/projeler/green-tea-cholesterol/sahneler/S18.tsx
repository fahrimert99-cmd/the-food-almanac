// Sahne 18 — Minnesota Green Tea Trial, yaşlı yetişkinler.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYas = K(0, "older");
  const [sc, al] = pop(t, tYas, 0.55);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [300, 50, 1250], [380, 80, 1150])}>
        <Etiket t={t} bas={K(0, "green")} capa={[985, 640]} konum={[780, 470]} metin="GREEN TEA" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={800} />
      <Not t={t} bas={K(0, "largest")} metin="ONE OF THE LARGEST AND LONGEST TRIALS" x={90} y={250} boyut={34} genislik={560} agirlik={800} />
      <BaslikBlok t={t} bas={K(0, "Minnesota")} satirlar={["MINNESOTA", "GREEN TEA", "TRIAL"]} x={90} y={470} boyut={96} />
      <div style={{ position: "absolute", left: 90, top: 790, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="OLDER ADULTS" renk={RENK.altin} boyut={36} />
      </div>
    </>
  );
};
export default S18;
