// Sahne 32 — Tip 2 diyabet denemesi: HbA1c yükseldi (Bahrami 2009).
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTip = K(0, "type 2");
  const tRand = K(1, "randomized trial"), t48 = K(1, "48"), tDoga = K(1, "natural"), tRise = K(1, "rise"), tUc = K(1, "three-month");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [285, 170, 1500], [330, 215, 1420])}>
        <Etiket t={t} bas={tRand} bitis={8.0} capa={[880, 850]} konum={[1000, 640]} metin="RANDOMIZED TRIAL" renk={RENK.lacivert} />
        <Etiket t={t} bas={t48} bitis={8.0} capa={[400, 860]} konum={[760, 480]} metin="48 PATIENTS" renk={RENK.altin} />
        <Etiket t={t} bas={tDoga} capa={[430, 790]} konum={[800, 600]} metin="NATURAL HONEY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={tTip} satirlar={["TYPE 2", "DIABETES"]} x={1860} y={230} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={tRise} vurgu="HbA1c ↑" not="8 weeks of honey" x={1640} y={500} renk={RENK.mercan} genislik={420} />
      <Not t={t} bas={tUc} metin="HbA1c: THREE-MONTH BLOOD SUGAR AVERAGE" x={1860} y={790} hiza="sag" genislik={760} boyut={30} agirlik={700} />
    </>
  );
};

export default S32;
