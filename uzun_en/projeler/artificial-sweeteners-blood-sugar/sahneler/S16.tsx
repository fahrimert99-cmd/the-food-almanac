// Sahne 16 — Greyling 2020: dozdan sonraki ilk saatler, 26 randomize deneme.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2020 = K(0, "2020,"), tFirst = K(0, "first"), tHours = K(0, "hours"), t26 = K(1, "26"), tBS = K(1, "sugar"), tIns = K(1, "insulin"), tDose = K(1, "sweetener.");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 60, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={t2020} metin="2020" x={1860} y={190} boyut={96} renk={RENK.altin} hiza="sag" />
      <BaslikBlok t={t} bas={tFirst} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={310} boyut={100} hiza="sag" />
      <Etiket t={t} bas={tHours} capa={[370, 740]} konum={[900, 170]} metin="AFTER A DOSE" renk={RENK.mercan} />
      <VurguRozet t={t} bas={t26} vurgu="26 TRIALS" not="RANDOMIZED" x={1560} y={540} genislik={460} boyut={80} />
      <div style={{ position: "absolute", left: 1330, top: 770, opacity: eout(ilerle(t, tBS, 0.4)) }}>
        <Hap metin="BLOOD SUGAR" renk={RENK.mercan} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1330, top: 850, opacity: eout(ilerle(t, tIns, 0.4)) }}>
        <Hap metin="INSULIN" renk={RENK.yesil} boyut={28} />
      </div>
      <Etiket t={t} bas={tDose} capa={[560, 420]} konum={[1020, 460]} metin="SWEETENER DOSE" renk={RENK.altin} />
    </>
  );
};

export default S16;
