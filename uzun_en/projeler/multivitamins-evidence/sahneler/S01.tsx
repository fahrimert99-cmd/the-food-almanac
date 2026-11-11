// Sahne 1 — açılış: şişe solda, sağda boş kâğıt üzerine sayı ve başlıklar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1780])}>
        <Etiket t={t} bas={K(0, "daily")} bitis={K(0, "in")} capa={[560, 470]} konum={[1180, 190]} metin="DAILY MULTIVITAMIN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "2,262")} vurgu="2,262" not="OLDER ADULTS" x={1480} y={240} genislik={400} />
      <Baslik t={t} bas={K(0, "three")} metin="3 YEARS" x={1860} y={600} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "slightly")} metin="SLIGHTLY IMPROVED" x={1860} y={720} boyut={64} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "thinking")} metin="THINKING SCORES" x={1860} y={810} boyut={64} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S01;
