// Sahne 17 — B12 eksikliğinin nedenleri: pernisiyöz anemi (%15–20) ve gıdadan serbest bırakma sorunu (>%60).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGida = K(1, "problems");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [90, 90, 1720])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "pernicious")} bitis={9.2} metin="PERNICIOUS ANEMIA" x={110} y={250} boyut={92} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "can't")} bitis={9.2} metin="BODY CAN'T ABSORB B12" x={116} y={330} boyut={38} agirlik={800} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "15")} bitis={tGida - 0.2} vurgu="15–20%" not="PERNICIOUS ANEMIA" x={480} y={190} genislik={480} />
      <Etiket t={t} bas={K(1, "freeing")} capa={[700, 700]} konum={[1020, 470]} metin="FOOD B12" renk={RENK.yesil} />
      <Baslik t={t} bas={tGida} metin="FROM FOOD" x={1860} y={330} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(1, "more than")} metin="OVER 60%" x={1860} y={200} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(1, "60")} metin="of cases: B12 not freed from food" x={1860} y={410} boyut={36} hiza="sag" agirlik={700} />
    </>
  );
};

export default S17;
