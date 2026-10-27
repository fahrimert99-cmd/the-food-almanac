// Sahne 19 — düzeltilmiş makale, 1,588 kişi dışarıda bırakılınca sonuç benzer
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tBenzer = K(1, "similar"), tSayi = K(1, "1,588");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1740])}>
        <Etiket t={t} bas={K(0, "reanalyzed")} bitis={K(1, "olive") - 0.2} capa={[520, 560]} konum={[1020, 660]} metin="CORRECTED PAPER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "fewer") - 0.1} capa={[830, 200]} konum={[1330, 200]} metin="FEWER EVENTS" renk={RENK.yesil} />
      </Kamera>
      <Ikon t={t} bas={tBenzer} ad="onay" x={1420} y={590} boyut={80} />
      <Not t={t} bas={tBenzer} metin={b.not!.toUpperCase()} x={1860} y={555} hiza="sag" genislik={380} boyut={32} agirlik={800} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tSayi} satirlar={b.satirlar} x={1860} y={290} boyut={92} hiza="sag" />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S19;
