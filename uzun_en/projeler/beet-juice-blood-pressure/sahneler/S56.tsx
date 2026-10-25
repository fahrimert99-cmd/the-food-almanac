// Sahne 56 — oksalat nedeniyle böbrek taşı olanlar doktora danışsın; tıbbi bakımın yerine geçmez.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOx = K(0, "oxalate"), tKid = K(0, "kidney"), tAdd = K(1, "addition");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1700])}>
        <Etiket t={t} bas={tOx} bitis={tKid - 0.1} capa={[720, 700]} konum={[600, 220]} metin="HIGH IN OXALATE" renk={RENK.mercan} />
        <Etiket t={t} bas={tKid} bitis={tAdd - 0.1} capa={[1340, 810]} konum={[1500, 520]} metin="KIDNEY STONES? ASK DOCTOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={tAdd} capa={[1340, 810]} konum={[1500, 520]} metin="NEVER A REPLACEMENT" renk={RENK.koyuYesil} />
      </Kamera>
    </>
  );
};

export default S56;
