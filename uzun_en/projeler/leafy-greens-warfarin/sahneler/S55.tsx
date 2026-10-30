// Sahne 55 — Apiksaban / rivaroksaban: normal beslenmeye devam, tabak ve şişe etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tApi = K(0, "apixaban"), tRiva = K(0, "rivaroxaban"), tNormal = K(0, "normal diet"), tUnless = K(0, "unless");
  const tAyni = K(1, "exactly");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1720])}>
        <Etiket t={t} bas={tApi} capa={[1435, 520]} konum={[1580, 250]} metin="APIXABAN" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tRiva} capa={[1435, 560]} konum={[1580, 380]} metin="RIVAROXABAN" renk={RENK.altin} boyut={30} />
      </Kamera>
      <Baslik t={t} bas={tNormal} bitis={tAyni - 0.2} metin="NORMAL DIET" x={70} y={160} boyut={112} renk={RENK.koyuYesil} />
      <Not t={t} bas={tUnless} bitis={tAyni - 0.2} metin="unless your doctor says otherwise" x={76} y={250} boyut={34} agirlik={700} />
      <Baslik t={t} bas={tAyni} metin="AS PRESCRIBED" x={70} y={160} boyut={112} renk={RENK.mercan} />
      <Not t={t} bas={tAyni + 0.3} metin="keep taking the medicine exactly" x={76} y={250} boyut={34} agirlik={700} />
    </>
  );
};

export default S55;
