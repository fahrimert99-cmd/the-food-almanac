// Sahne 36 — Finansman notu: National Honey Board desteği; çoğu çalışma kamu fonlu; yalnızca bağlam.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFon = K(0, "funding"), tKhan = K(1, "Khan"), tArast = K(1, "research support"), tBoard = K(1, "National"),
    tKamu = K(2, "publicly"), tSade = K(3, "just"), tYanlis = K(3, "isn't");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [100, 70, 1720])}>
        <Etiket t={t} bas={tKhan} bitis={tBoard - 0.2} capa={[800, 830]} konum={[900, 560]} metin="KHAN · SIEVENPIPER" renk={RENK.lacivert} boyut={32} />
        <Etiket t={t} bas={tBoard} bitis={8.6} capa={[340, 790]} konum={[560, 540]} metin="NATIONAL HONEY BOARD" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tKamu} bitis={tSade - 0.2} capa={[1400, 840]} konum={[1100, 600]} metin="PUBLICLY FUNDED" renk={RENK.yesil} boyut={32} />
      </Kamera>
      <BaslikBlok t={t} bas={tFon} satirlar={["FUNDING"]} x={110} y={180} boyut={120} renkler={[RENK.koyuYesil]} bitis={8.6} />
      <Not t={t} bas={tArast} metin="RESEARCH SUPPORT REPORTED" x={116} y={265} boyut={44} agirlik={800} bitis={8.6} />
      <BaslikBlok t={t} bas={tSade} satirlar={["JUST", "CONTEXT"]} x={110} y={180} boyut={110} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tYanlis} metin="NOT A SIGN THE WORK IS WRONG" x={116} y={440} boyut={44} agirlik={800} />
    </>
  );
};

export default S36;
