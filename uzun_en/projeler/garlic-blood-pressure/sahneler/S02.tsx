// Sahne 2 — yüksek tansiyonlu kişilerde düşüş: –8.7 rozeti, ardından "ne kadar güvenmeli?".
import React from "react";
import { Baslik, BaslikBlok, Kamera, Ikon, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSoru = K(2, "how much");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1660])} />
      <Panel a={eout(ilerle(t, 0.3, 0.6))} taraf="sag" genislik={900} />
      <BaslikBlok t={t} bas={K(0, "high blood pressure")} satirlar={b.satirlar} x={1860} y={290} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(0, "nearly nine")} vurgu={b.vurgu!} not={b.not} x={1560} y={500} genislik={460} />
      <Ikon t={t} bas={K(1, "finding")} bitis={tSoru - 0.1} ad="onay" x={1100} y={870} boyut={84} />
      <Baslik t={t} bas={K(1, "finding")} bitis={tSoru - 0.1} metin="THAT IS THE FINDING" x={1860} y={870} boyut={66}
        renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={tSoru} ad="soru" x={1100} y={870} boyut={84} zemin={RENK.altin} />
      <Baslik t={t} bas={tSoru} metin="HOW MUCH TO TRUST IT?" x={1860} y={870} boyut={66} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S02;
