// Sahne 17 — terazi görseli: toplam vücut suyu (kahve 51.5 / su 51.4 kg), sonra kan göstergeleri.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "51.5")} capa={[430, 610]} konum={[300, 850]} metin="COFFEE 51.5 KG" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "51.4")} capa={[1390, 600]} konum={[1560, 850]} metin="WATER 51.4 KG" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0.4} bitis={K(1, "no") - 0.2} metin="TOTAL BODY WATER" x={60} y={160} boyut={64} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(1, "no blood marker")} satirlar={["BLOOD MARKERS", "NO DIFFERENCE"]} x={1860} y={140} boyut={56}
        hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S17;
