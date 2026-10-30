// Sahne 9 — süt + hap şişesi: gerçek soru, diyetin üstüne hap eklemek.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCa = K(0, "calcium"), tD = K(0, "vitamin"), tSolma = K(2, "it's");
  const tHap = K(2, "pills"), tDiyet = K(2, "normal"), tKirik = K(2, "fractures");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [120, 70, 1680])}>
        <Etiket t={t} bas={tCa} bitis={tSolma} capa={[1310, 330]} konum={[1640, 220]} metin="CALCIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tD} bitis={tSolma} capa={[1000, 470]} konum={[760, 220]} metin="VITAMIN D" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tHap + 0.1} capa={[1000, 320]} konum={[700, 230]} metin="PILLS" renk={RENK.mercan} />
        <Etiket t={t} bas={tDiyet} capa={[700, 650]} konum={[300, 450]} metin="NORMAL DIET" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tHap - 0.1} satirlar={["PILLS ON TOP", "OF YOUR DIET?"]} x={96} y={150} boyut={78} />
      <Not t={t} bas={tKirik} metin="Do they prevent fractures?" x={100} y={330} boyut={34} />
    </>
  );
};

export default S09;
