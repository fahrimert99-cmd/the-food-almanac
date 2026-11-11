// S35 — kan şekeri/kilo; düşük şekerli seçenekler; en iyi form belirsiz
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, eout, ilerle, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBS = K(0, "blood sugar"), tUn = K(1, "Unsweetened"), tLow = K(1, "low-sugar"), tCap = K(1, "capsules"), tBest = K(1, "which form");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 20, 1860], [50, 60, 1760])} />
      <Etiket t={t} bas={tBS} bitis={3.0} capa={[1330, 640]} konum={[1180, 130]} metin="BLOOD SUGAR" renk={RENK.mercan} />
      <Panel a={eout(ilerle(t, 2.9, 0.6))} genislik={520} opak={0.97} />
      <Liste t={t} isaret="onay" x={1470} y={200} aralik={84} boyut={32} genislik={400} ogeler={[
        { bas: tUn, metin: "UNSWEETENED", bitis: 8.7 },
        { bas: tLow, metin: "LOW-SUGAR", bitis: 8.7 },
        { bas: tCap, metin: "CAPSULES", bitis: 8.7 },
      ]} />
      <Baslik t={t} bas={tBest} metin="BEST FORM?" x={1860} y={240} boyut={100} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={tBest + 0.4} metin="the evidence can't tell us" x={1860} y={310} hiza="sag" genislik={400} />
    </>
  );
};
export default S35;
