// Sahne 49 — Nokta 4: sarımsağı ezip/doğrayıp ~10 dk beklet; tansiyon için test edilmedi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSit = K(1, "ten");
  const tEnz = K(2, "enzyme");
  const tYok = K(3, "hasn't");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [120, 70, 1680])}>
        <Etiket t={t} bas={K(1, "crush")} bitis={tSit - 0.2} capa={[600, 780]} konum={[330, 440]} metin="CRUSH OR CHOP" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "hits")} bitis={tEnz - 0.2} capa={[1080, 210]} konum={[880, 150]} metin="BEFORE THE PAN" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={0.05} vurgu="4" not="OF 5 POINTS" x={200} y={100} genislik={230} bitis={tSit - 0.2} />
      <VurguRozet t={t} bas={tSit} vurgu="~10 MIN" not="LET IT SIT" x={420} y={100} genislik={420} bitis={tEnz - 0.2} />
      <Baslik t={t} bas={tEnz} bitis={tYok - 0.1} metin="ENZYME RESEARCH" x={140} y={120} boyut={86} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "may")} bitis={tYok - 0.1} metin="MAY PRESERVE MORE" x={140} y={216} boyut={86} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "forms")} bitis={tYok - 0.1} metin="WHEN GARLIC IS CRUSHED" x={142} y={272} boyut={34} agirlik={800} />
      <Baslik t={t} bas={tYok} metin="NOT TESTED" x={140} y={120} boyut={96} renk={RENK.mercan} />
      <Not t={t} bas={K(3, "blood")} metin="FOR BLOOD PRESSURE" x={142} y={180} boyut={38} agirlik={800} />
    </>
  );
};

export default S49;
