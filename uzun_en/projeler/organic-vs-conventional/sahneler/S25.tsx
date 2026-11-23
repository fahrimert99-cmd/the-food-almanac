// Sahne 25 — iki çekince: bir model; organik de kalıntısız değil.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTwo = K(0, "Two honest"), tModel = K(1, "model"), tNot = K(1, "not measurements");
  const tOrg = K(2, "organic food"), tPct = K(2, "23 percent"), tDet = K(2, "detectable");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tModel} bitis={tOrg - 0.2} capa={[610, 850]} konum={[1130, 860]} metin="A MODEL" renk={RENK.altin} />
        <Etiket t={t} bas={tNot} bitis={tOrg - 0.2} capa={[460, 760]} konum={[1130, 740]} metin="NOT MEASURED IN PEOPLE" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tDet} capa={[690, 150]} konum={[1130, 150]} metin="DETECTABLE RESIDUE" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tTwo} bitis={tModel - 0.2} metin="TWO CAVEATS" x={1100} y={400} boyut={110} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={tOrg} satirlar={s.meta.baslik?.satirlar ?? []} x={1180} y={330} boyut={84} renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={tPct} vurgu="23%" not="OF ORGANIC SAMPLES HAD A DETECTABLE RESIDUE" x={1520} y={520} renk={RENK.mercan} genislik={520} boyut={110} />
    </>
  );
};

export default S25;
