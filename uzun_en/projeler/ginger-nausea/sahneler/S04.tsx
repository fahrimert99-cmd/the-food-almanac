// Sahne 4 — kanal tanıtımı + zencefil nedir (botanik gravür)
import React from "react";
import { BaslikBlok, Etiket, Kamera, MARKA, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(1, "Let's");
  const ad = MARKA.ad.toUpperCase();
  const [a, b] = [ad.replace(/ \S+$/, ""), ad.split(" ").pop()!];
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1780])}>
        <Etiket t={t} bas={K(1, "ginger")} capa={[975, 850]} konum={[1450, 900]} metin="THE ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "actually")} capa={[1170, 330]} konum={[1560, 300]} metin="LEAVES" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Food")} bitis={tIki - 0.1} satirlar={[a, b]} x={90} y={420} boyut={110} />
      <Not t={t} bas={K(1, "why")} metin="WHY SO MANY REACH FOR IT" x={90} y={690} boyut={40} agirlik={800} genislik={420} />
    </>
  );
};

export default S04;
