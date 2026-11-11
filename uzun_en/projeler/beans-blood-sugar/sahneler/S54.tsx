// Sahne 54 — bakım ekibine danış; fasulye tedavinin yerini almaz.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCheck = K(0, "check"), tTeam = K(0, "care team"), tGentle = K(1, "gentle helper"), tNever = K(1, "never");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        <Etiket t={t} bas={tTeam} bitis={tGentle - 0.2} capa={[1200, 545]} konum={[1580, 300]} metin="CARE TEAM" renk={RENK.lacivert} />
        <Etiket t={t} bas={tGentle} bitis={tNever - 0.2} capa={[1400, 390]} konum={[1580, 300]} metin="GENTLE HELPER" renk={RENK.koyuYesil} />
      </Kamera>
      <AltSis a={0.4} />
      <Baslik t={t} bas={tCheck} bitis={tNever - 0.2} metin="CHECK FIRST" x={900} y={130} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNever} metin="NOT A REPLACEMENT" x={900} y={115} boyut={90} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "treatment")} metin="FOR TREATMENT" x={906} y={170} boyut={34} agirlik={800} />
    </>
  );
};

export default S54;
