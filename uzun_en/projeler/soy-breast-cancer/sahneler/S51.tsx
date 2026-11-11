// Sahne 51 — soya tedavinin yerini tutmaz. Sol panel + çarpılı liste; cüzdan/steteskop görselde kalır.
import React from "react";
import { Baslik, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [120, 60, 1700]);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={p} />
      <Panel a={eout(ilerle(t, 0.0, 0.5))} taraf="sol" genislik={800} opak={0.96} />
      <Baslik t={t} bas={K(0, "isn't a cure")} metin="NOT A CURE" x={70} y={170} boyut={104} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "replaces")} metin="IT DOES NOT REPLACE:" x={74} y={300} boyut={32} renk={RENK.gri} agirlik={800} />
      <Liste t={t} x={74} y={370} aralik={92} boyut={38} isaret="carpi" genislik={700} ogeler={[
        { bas: K(1, "surgery"), metin: "SURGERY", renk: RENK.mercan },
        { bas: K(1, "chemotherapy"), metin: "CHEMOTHERAPY", renk: RENK.mercan },
        { bas: K(1, "hormone therapy"), metin: "HORMONE THERAPY", renk: RENK.mercan },
        { bas: K(1, "any other treatment"), metin: "ANY OTHER TREATMENT", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S51;
