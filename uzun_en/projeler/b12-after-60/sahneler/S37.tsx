// Sahne 37 — BÖLÜM 5 kartı: yaşa yorulan işaretler. Üç görsel kartı + altta tek senkron not.
import React from "react";
import { BolumKarti, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/38", kirp: [0, 300, 800, 900] },
        { gorsel: "tam/39", kirp: [120, 300, 1080, 1020] },
        { gorsel: "tam/40", kirp: [0, 200, 1100, 1025] },
      ]} />
      <Not t={t} bas={K(1, "dramatic")} metin="Often, nothing dramatic" x={142} y={780} boyut={36} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S37;
