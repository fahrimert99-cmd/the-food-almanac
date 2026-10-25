// Sahne 25 — mide bir kapı bekçisi: yiyecek ince bağırsağa azar azar bırakılır (mide boşalması).
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBekci = K(0, "gatekeeper");
  const tBag = K(1, "small intestine");
  const tAz = K(1, "a little at a time");
  const tBosal = K(1, "gastric emptying");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1780])}>
        {/* yiyecek mideden çıkışa azar azar akar */}
        <Parcaciklar t={t} bas={tAz} kaynak={[560, 560]} hedef={[935, 315]} adet={12} aralik={0.4} omur={1.8} yayilma={140}
          hedefYayilma={20} kavis={-120} boyut={11} tohum="p25" />
        <Etiket t={t} bas={tBag} capa={[945, 315]} konum={[1290, 470]} metin="SMALL INTESTINE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tBekci} satirlar={["THE", "GATEKEEPER"]} x={1860} y={170} boyut={110} hiza="sag" />
      <Not t={t} bas={tAz} metin="released a little at a time" x={1860} y={640} hiza="sag" boyut={42} />
      <Baslik t={t} bas={tBosal} metin="GASTRIC EMPTYING" x={1860} y={780} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S25;
