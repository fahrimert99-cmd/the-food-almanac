// Sahne 23 — LDL parçacık sayısı; HDL ve trigliserit değişmedi.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tIdl = K(0, "intermediate-density"), t168 = K(0, "16.8"), tTop = K(0, "total"), t43 = K(0, "4.3"), tHdl = K(1, "HDL");
  const e1 = tTop - 0.15, e2 = tHdl - 0.25;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])} />
      <AltSis a={0.5} />
      <Etiket t={t} bas={tIdl} bitis={e1} capa={[400, 480]} konum={[860, 300]} metin="INTERMEDIATE-DENSITY" renk={RENK.altin} />
      <VurguRozet t={t} bas={t168} vurgu="−16.8%" not="INTERMEDIATE-DENSITY CHOL." x={1480} y={420} genislik={560} bitis={e1} />
      <BaslikBlok t={t} bas={tTop} satirlar={b.satirlar} x={1860} y={260} boyut={100} hiza="sag" bitis={e2} />
      <VurguRozet t={t} bas={t43} vurgu={b.vurgu!} not="TOTAL LDL PARTICLES" x={1560} y={470} genislik={440} bitis={e2} />
      <Not t={t} bas={tHdl} metin="NO SIGNIFICANT CHANGE" x={1860} y={200} hiza="sag" boyut={46} agirlik={800} renk={RENK.lacivert} />
      <Liste t={t} isaret="nokta" x={1180} y={320} aralik={110} boyut={44} genislik={680}
        ogeler={[{ bas: tHdl + 0.3, metin: "HDL CHOLESTEROL", renk: RENK.gri }, { bas: K(1, "triglycerides"), metin: "TRIGLYCERIDES", renk: RENK.gri }]} />
    </>
  );
};
export default S23;
