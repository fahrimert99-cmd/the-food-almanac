// Sahne 56 — adım 3: turşu suyu küçük bir deney; 2,5 oz; sodyumu say.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  const tJuice = K(1, "pickle"), tSmall = K(1, "small"), tNot = K(1, "not a"), tAmount = K(2, "small"), tOz = K(2, "two and"), tSod = K(2, "count");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={p} />
      <Baslik t={t} bas={0} metin="3" x={1340} y={170} boyut={190} renk={RENK.altin} />
      <Etiket t={t} bas={tJuice} bitis={tSmall + 1.6} capa={[540, 570]} konum={[330, 250]} metin="PICKLE JUICE" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={tSmall} satirlar={["A SMALL", "EXPERIMENT"]} x={1340} y={380} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={tNot} metin="NOT A TREATMENT" x={1340} y={560} boyut={36} font="inter" agirlik={800} renk={RENK.mercan} />
      <Etiket t={t} bas={tAmount} capa={[540, 570]} konum={[330, 250]} metin="SMALL AMOUNT" renk={RENK.altin} />
      <VurguRozet t={t} bas={tOz} vurgu="2½ OZ" not="the amount in the study" x={1590} y={620} genislik={420} boyut={90} />
      <Baslik t={t} bas={tSod} metin="COUNT THE SODIUM" x={1590} y={880} boyut={38} font="inter" agirlik={800} renk={RENK.mercan} hiza="orta" />
    </>
  );
};
export default S56;
