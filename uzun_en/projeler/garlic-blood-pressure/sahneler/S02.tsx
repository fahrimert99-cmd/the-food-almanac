// Sahne 2 — yüksek tansiyonda –8,7: görsel soluk, rozet ve soru ön planda.
import React from "react";
import { Baslik, Ikon, Not, Ortu, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuksek = K(0, "high blood pressure");
  const tDokuz = K(0, "nearly nine");
  const tBulgu = K(1, "finding");
  const tSoru = K(2, "how much to trust");
  const pOrtu = 0.92;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [320, 40, 1500], [380, 70, 1400])} />
      <Ortu a={pOrtu} />
      <Baslik t={t} bas={tYuksek} metin="HIGH BP:" x={160} y={290} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tYuksek + 0.25} metin="GARLIC" x={160} y={425} boyut={120} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tDokuz} vurgu="–8.7" not={s.meta.baslik!.not} x={1300} y={300} genislik={620} boyut={190} />
      <Not t={t} bas={tBulgu} metin="THAT IS THE FINDING" x={160} y={640} boyut={44} renk={RENK.altin} agirlik={800} />
      <Ikon t={t} bas={tSoru} ad="soru" x={190} y={800} boyut={92} zemin={RENK.lacivert} />
      <Not t={t} bas={tSoru + 0.15} metin="HOW MUCH TO TRUST IT?" x={260} y={780} boyut={44} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S02;
