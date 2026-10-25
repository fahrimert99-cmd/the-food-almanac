// Sahne 3 — videonun sözü: ne gösteriyor, neye bakmalı, kan sulandırıcılar.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [60, 60, 1800], [120, 100, 1680])}>
        <Etiket t={t} bas={K(0, "take it")} capa={[800, 560]} konum={[1150, 230]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "what")} metin="WHAT THE TRIALS SHOW" x={100} y={125} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "what to")} metin="WHAT TO CHECK" x={100} y={210} boyut={76} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "blood")} metin="BLOOD THINNERS" x={100} y={295} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S03;
