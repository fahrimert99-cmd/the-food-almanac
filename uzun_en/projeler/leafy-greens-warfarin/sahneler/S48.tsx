// Sahne 48 — bölüm kartı: How to use it
import React from "react";
import { BolumKarti, SP, VurguRozet, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/49", kirp: [160, 100, 1120, 820] },
        { gorsel: "tam/50", kirp: [60, 290, 1020, 1010] },
      ]} />
      <VurguRozet t={t} bas={K(1, "five")} vurgu="5" not="PRACTICAL WAYS" x={330} y={720} genislik={300} boyut={84} />
    </>
  );
};

export default S48;
