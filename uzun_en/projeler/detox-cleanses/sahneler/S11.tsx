// Sahne 11 — 1–2 quart idrar, gerisi kana döner; kalan atıklar ve asit temizlenir
import React from "react";
import { Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUrine = K(0, "one to two"), tBack = K(1, "back to your blood"), tClear = K(1, "clear wastes"), tAcid = K(1, "extra acid");
  const pP = eout(ilerle(t, tClear - 0.4, 0.7));
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])} />
      <Panel a={pP} taraf="sag" genislik={700} />
      <Etiket t={t} bas={tUrine} capa={[1180, 700]} konum={[1500, 790]} metin="1–2 QUARTS: URINE" renk={RENK.altin} />
      <Etiket t={t} bas={tBack} capa={[580, 560]} konum={[250, 330]} metin="BACK TO YOUR BLOOD" renk={RENK.mercan} />
      <Liste t={t} x={1330} y={180} aralik={110} boyut={36} isaret="onay" genislik={560} ogeler={[
        { bas: tClear, metin: "CLEARS WASTES" },
        { bas: tAcid, metin: "CLEARS EXTRA ACID" },
      ]} />
    </>
  );
};

export default S11;
