// Sahne 41 — Böbrek hastalığında kişiye özel hedef: bakım ekibinden.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHow = K(0, "how much");
  const tTarget = K(1, "target");
  const tCare = K(1, "care");
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [20, 30, 1880], [70, 50, 1780])}>
        {/* ölçek yazısı kusurunu örten soru işareti */}
        <Ikon t={t} bas={0.4} ad="soru" x={1255} y={410} boyut={130} zemin={RENK.altin} bitis={4.9} />
        <Etiket t={t} bas={tHow} bitis={4.9} capa={[1135, 300]} konum={[1590, 300]} metin="HOW MUCH?" renk={RENK.altin} />
        <Etiket t={t} bas={tCare} capa={[1107, 745]} konum={[1590, 330]} metin="CARE TEAM" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tTarget} metin="YOUR TARGET" x={1860} y={150} boyut={100} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};
export default S41;
