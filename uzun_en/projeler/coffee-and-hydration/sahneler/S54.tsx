// Sahne 54 — terazi: 50 kişilik çalışma, 51.5 / 51.4 kg ve idrar çıkışı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g1 = K(0, "with") - 0.1; // 1. grup biter
  const g2 = K(1, "In") - 0.1; // 2. cümle başlar
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <VurguRozet t={t} bas={K(0, "50")} bitis={g1} vurgu="50" not="HABITUAL DRINKERS" x={270} y={70} genislik={380} boyut={96} />
      <Etiket t={t} bas={K(0, "four")} bitis={g1} capa={[390, 520]} konum={[250, 800]} metin="4 SERVINGS A DAY" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "water,")} bitis={g1} capa={[1410, 520]} konum={[1580, 800]} metin="WATER" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(0, "total")} bitis={g2} satirlar={["TOTAL BODY WATER"]} x={1560} y={150} boyut={60} hiza="sag" renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={K(0, "51.5")} bitis={g2} vurgu="51.5 KG" not="COFFEE" x={390} y={730} genislik={340} boyut={84} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "51.4.")} bitis={g2} vurgu="51.4 KG" not="WATER" x={1430} y={730} genislik={340} boyut={84} renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(1, "four-hour")} satirlar={["4-HOUR", "URINE OUTPUT"]} x={70} y={95} boyut={64} adim={0.15} />
      <VurguRozet t={t} bas={K(1, "differ")} vurgu="NO DIFFERENCE" not="COFFEE VS WATER" x={1430} y={730} genislik={520} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S54;
