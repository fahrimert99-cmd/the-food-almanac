// Sahne 8 — ortalama büyük aralığı gizler: zayıf ve güçlü demleme.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAralik = K(0, "huge");
  const tSay = K(2, "Remember");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [60, 100, 1780])}>
        <Etiket t={t} bas={K(1, "2")} capa={[360, 560]} konum={[330, 300]} metin="ABOUT 2 MG" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "200")} bitis={tSay} capa={[720, 500]} konum={[1150, 620]} metin="ABOUT 200 MG" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tSay} bitis={K(3, "count") - 0.1} capa={[830, 560]} konum={[1330, 780]} metin="REMEMBER THIS" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "count")} capa={[830, 560]} konum={[1330, 780]} metin="WHEN COUNTING CUPS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tAralik} satirlar={["WEAK BREW,", "STRONG BREW"]} x={1860} y={200} boyut={100} hiza="sag" />
      <Not t={t} bas={K(1, "measured")} metin={s.meta.baslik!.not!} x={1860} y={400} hiza="sag" genislik={820} />
    </>
  );
};

export default S08;
