// Sahne 17 — randomize deney: defter + kapsül şişesi
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRand = K(0, "randomized");
  const tExist = K(1, "exist");
  const tSurp = K(1, "surprising");
  const tMoment = K(2, "moment");
  const pYama = eout(ilerle(t, 0.1, 0.6));
  const [sc, al] = pop(t, tMoment - 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [90, 110, 1730])} />
      {/* sol üstteki pencere alanını kâğıt rengiyle yumuşat: başlık için zemin */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 900, height: 560, opacity: pYama,
        background: `radial-gradient(ellipse 60% 62% at 40% 40%, ${kagit(0.96)} 0%, ${kagit(0.9)} 55%, ${kagit(0)} 100%)` }} />
      <BaslikBlok t={t} bas={tRand - 0.1} satirlar={["RANDOMIZED", "TRIAL"]} x={80} y={180} boyut={104} />
      <Etiket t={t} bas={tRand + 0.3} bitis={tExist - 0.2} capa={[820, 640]} konum={[560, 470]} metin="CLOSED NOTEBOOK" renk={RENK.lacivert} />
      <Etiket t={t} bas={tExist} capa={[1280, 560]} konum={[1640, 780]} metin="CAPSULES" renk={RENK.altin} />
      <Not t={t} bas={tSurp} metin="MORE SURPRISING THAN EXPECTED" x={80} y={420} boyut={34} agirlik={800} genislik={640} />
      <div style={{ position: "absolute", right: 70, top: 120, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14 }}>
        <div><Hap metin="IN A MOMENT" renk={RENK.lacivert} /></div>
      </div>
    </>
  );
};

export default S17;
