// Sahne 10 — sirke şişesi, asetik asit ve 25 g'lık doz.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAcik = K(0, "acetic");
  const tKoku = K(0, "sharp");
  const t25 = K(1, "25");
  const tKasik = K(1, "tablespoons");
  const t125 = K(1, "1.25");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 70, 1720])} />
      <Etiket t={t} bas={0.15} bitis={tAcik - 0.1} capa={[440, 620]} konum={[960, 400]} metin="APPLE CIDER VINEGAR" renk={RENK.altin} />
      <BaslikBlok t={t} bas={tAcik - 0.1} satirlar={["ACETIC", "ACID"]} x={1080} y={210} boyut={140} />
      <Parcaciklar t={t} bas={tKoku} kaynak={[480, 150]} hedef={[860, 90]} adet={16} aralik={0.12} kavis={-60} yayilma={30} hedefYayilma={120} tohum="koku" />
      <Not t={t} bas={tKoku} metin="SHARP SMELL" x={640} y={205} boyut={40} agirlik={800} renk={RENK.altin} />
      <Etiket t={t} bas={t25} capa={[620, 900]} konum={[1010, 890]} metin="25 G OF VINEGAR" renk={RENK.altin} />
      <Etiket t={t} bas={tKasik} capa={[760, 740]} konum={[1130, 760]} metin="UNDER 2 TABLESPOONS" renk={RENK.yesil} />
      <VurguRozet t={t} bas={t125} vurgu="1.25 g" not="acetic acid in a 25 gram dose of vinegar" x={1500} y={480} genislik={420} renk={RENK.koyuYesil} />
    </>
  );
};

export default S10;
