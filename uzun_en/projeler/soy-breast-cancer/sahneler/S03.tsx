// Sahne 3 — Vaat: yeme / atlama / sıcak basması akışı üstte
import React from "react";
import { AdimAkisi, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [180, 90, 1620])} />
      <AdimAkisi t={t} x={600} y={160} boyut={32} numarali={false} adimlar={[
        { bas: K(0, "eat,"), metin: "WHAT TO EAT", renk: RENK.yesil },
        { bas: K(0, "skip,"), metin: "SKIP", renk: RENK.mercan },
        { bas: K(0, "hot"), metin: "HOT FLASHES", renk: RENK.altin },
      ]} />
    </>
  );
};
export default S03;
