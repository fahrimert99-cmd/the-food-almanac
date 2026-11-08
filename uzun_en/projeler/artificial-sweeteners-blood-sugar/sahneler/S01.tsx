// Sahne 1 — Suez 2022: 120 yetişkin, 2 hafta. Sol: gravür; sağ: boş kâğıtta başlık + rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={0.4} bitis={K(0, "120") - 0.1} capa={[520, 330]} konum={[980, 250]} metin="DIET SODA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "blood")} capa={[850, 700]} konum={[1300, 790]} metin="GLUCOSE METER" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "120") - 0.1} metin="120 ADULTS" x={1860} y={250} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "two") - 0.05} vurgu="2 OF 4" not="COMMON SWEETENERS" x={1560} y={410} genislik={420} />
      <Baslik t={t} bas={K(0, "just") + 0.2} metin="2 WEEKS" x={1860} y={690} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S01;
