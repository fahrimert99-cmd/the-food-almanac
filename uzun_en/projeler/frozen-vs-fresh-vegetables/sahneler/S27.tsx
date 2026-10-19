// Sahne 27 — iki taze brokoli arasında dondurulmuş poşet: kayıp nerede olur.
import React from "react";
import { AdimAkisi, AltSis, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFroz = K(1, "frozen"), tEarly = K(2, "early"), tSlow = K(2, "slowly"), tFresh = K(3, "fresh"), tLong = K(3, "longer");
  const bit2 = K(3, "fresh") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 30, 1740])} />
      <AltSis a={0.4} />
      <Etiket t={t} bas={tFroz} bitis={bit2} capa={[960, 760]} konum={[960, 330]} metin="FROZEN" renk={RENK.yesil} />
      <div style={{ opacity: sol(t, bit2) }}>
        <AdimAkisi t={t} y={100} x={960} boyut={32} numarali={false} adimlar={[
          { bas: tEarly, metin: "SOME LOSS EARLY", renk: RENK.mercan },
          { bas: tSlow, metin: "THEN SLOWLY IN FREEZER", renk: RENK.altin },
        ]} />
      </div>
      <Etiket t={t} bas={tFresh} capa={[400, 380]} konum={[640, 130]} metin="FRESH" renk={RENK.koyuYesil} />
      <AdimAkisi t={t} y={100} x={1180} boyut={32} numarali={false} adimlar={tLong > 0 ? [
        { bas: tLong, metin: "LONGER WAIT, MORE LOSS", renk: RENK.mercan },
      ] : []} />
    </>
  );
};

export default S27;
