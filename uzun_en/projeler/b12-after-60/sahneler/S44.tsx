// Sahne 44 — birinci durum: uzun süreli metformin.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, INTER, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "One");
  const tMet = K(1, "metformin");
  const tLong = K(1, "long time");
  const tCons = K(2, "considering");
  const p = eout(ilerle(t, tCons, 0.5));
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])} />
      <BaslikBlok t={t} bas={tOne} satirlar={["ONE:", "METFORMIN"]} x={140} y={190} boyut={140} />
      <Etiket t={t} bas={tMet} capa={[1170, 800]} konum={[900, 700]} metin="METFORMIN" renk={RENK.mercan} />
      <Etiket t={t} bas={tLong} capa={[1490, 650]} konum={[1130, 420]} metin="LONG TIME" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 140, top: 480, opacity: p, transform: `translateY(${(1 - p) * 14}px)` }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.gri, marginBottom: 10 }}>TRIAL AUTHORS SUGGESTED</div>
        <Hap metin="CONSIDER ROUTINE TESTING" renk={RENK.yesil} boyut={40} />
      </div>
    </>
  );
};

export default S44;
