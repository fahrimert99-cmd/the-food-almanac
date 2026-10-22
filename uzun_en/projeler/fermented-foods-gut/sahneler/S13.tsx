// Sahne 13 — fermente ≠ probiyotik: tanımlı mikrop + kanıtlı fayda vs. yalnızca mikroplarla yapılmış.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tDef = K(1, "defined microbe");
  const tBen = K(1, "shown");
  const tFer = K(2, "fermented");
  const tMade = K(2, "made with");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        {/* probiyotik: kavanozdaki kapsüller */}
        <Etiket t={t} bas={tDef} bitis={tBen - 0.1} capa={[920, 580]} konum={[1130, 430]} metin="DEFINED MICROBE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tBen} bitis={tFer - 0.3} capa={[920, 580]} konum={[1130, 430]} metin="HEALTH BENEFIT SHOWN" renk={RENK.yesil} boyut={26} />
        {/* fermente yiyecek: yoğurt kâsesi */}
        <Etiket t={t} bas={tFer} bitis={tMade - 0.1} capa={[373, 540]} konum={[330, 175]} metin="FERMENTED FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tMade} capa={[373, 540]} konum={[330, 175]} metin="MADE WITH MICROBES" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "A probiotic")} />
      <BaslikBlok t={t} bas={K(0, "distinction")} satirlar={b.satirlar} x={1860} y={340} boyut={108}
        hiza="sag" renkler={[RENK.lacivert, RENK.mercan, RENK.koyuYesil]} />
    </>
  );
};

export default S13;
