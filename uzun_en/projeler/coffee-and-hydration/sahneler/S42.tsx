// Sahne 42 — EFSA'nın iki uyarısı: uykuya etki (tek doz 100 mg) ve hamilelikte 200 mg sınır.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tB = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1830])}>
        <Etiket t={t} bas={K(1, "single dose")} bitis={tB} capa={[520, 640]} konum={[1060, 700]} metin="A SINGLE DOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "close to bedtime")} bitis={tB} capa={[270, 140]} konum={[1100, 100]} metin="CLOSE TO BEDTIME" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Two cautions")} bitis={c[1].bas - 0.1} satirlar={["TWO", "CAUTIONS"]} x={1040} y={260} boyut={130} renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={K(1, "EFSA")} bitis={tB} satirlar={["CAFFEINE", "AND SLEEP"]} x={1040} y={260} boyut={120} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "100 milligrams")} bitis={tB} vurgu="100 MG" not="in a single dose, some adults" x={1330} y={480} genislik={520} boyut={110} />
      <BaslikBlok t={t} bas={K(2, "pregnancy")} satirlar={["IN", "PREGNANCY"]} x={1040} y={260} boyut={120} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "put the daily limit")} metin="DAILY LIMIT PUT LOWER" x={1046} y={500} boyut={38} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "200 milligrams")} vurgu="200 MG" not="a day, from all sources" x={1330} y={580} genislik={520} boyut={110} />
    </>
  );
};

export default S42;
