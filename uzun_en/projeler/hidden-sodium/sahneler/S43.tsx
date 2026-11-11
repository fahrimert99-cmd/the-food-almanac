// Sahne 43 — TONE (1998): dört koltuk, tuzluk ve ilaç kutusu olan yuvarlak masa.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(1, "high blood")} bitis={K(1, "controlled") - 0.15} capa={[1093, 455]} konum={[640, 190]} metin="HIGH BLOOD PRESSURE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "controlled")} capa={[833, 470]} konum={[1000, 150]} metin="CONTROLLED WITH MEDICINE" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "older")} bitis={c[1].bas - 0.1} metin="OLDER TRIAL" x={70} y={185} boyut={90} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "different")} bitis={c[1].bas - 0.1} metin="A DIFFERENT QUESTION" x={72} y={250} boyut={28} agirlik={800} />
      <Baslik t={t} bas={K(1, "TONE")} metin="TONE TRIAL" x={1860} y={175} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "975")} bitis={K(1, "high blood") - 0.1} vurgu="975" not="ADULTS AGED 60 TO 80" x={960} y={70} genislik={460} />
    </>
  );
};

export default S43;
