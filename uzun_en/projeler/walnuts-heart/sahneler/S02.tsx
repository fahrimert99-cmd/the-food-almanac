// Sahne 2 — küçük düşüş, beyin sonucu: ceviz çekirdeği + gözlük
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [120, 100, 1700], [190, 150, 1560])}>
        <Etiket t={t} bas={K(0, "brain")} capa={[860, 470]} konum={[330, 450]} metin="BRAIN RESULTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "catch")} capa={[1400, 620]} konum={[1480, 330]} metin="A CATCH" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "small")} metin="A SMALL DROP" x={70} y={170} boyut={104} renk={RENK.lacivert} />
    </>
  );
};

export default S02;
