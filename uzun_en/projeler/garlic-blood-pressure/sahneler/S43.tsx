// Sahne 43 — Macan 2006 pilot çalışması: warfarin kullananlarda kanama artışı yok.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKanama = K(2, "no increased");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [130, 70, 1680])}>
        {/* kitap: çalışma */}
        <Etiket t={t} bas={K(1, "pilot trial")} bitis={K(1, "warfarin,") + 0.6} capa={[1230, 660]} konum={[1020, 330]} metin="2006 PILOT TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "aged garlic")} bitis={K(1, "weeks.") + 0.1} capa={[1640, 520]} konum={[1500, 310]} metin="AGED GARLIC EXTRACT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "placebo")} bitis={K(1, "weeks.") + 0.1} capa={[640, 560]} konum={[640, 140]} metin="OR PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "52")} bitis={K(1, "warfarin,") + 0.4} vurgu="52" not="PEOPLE ON WARFARIN" x={1560} y={110} genislik={420} />
      <Baslik t={t} bas={K(1, "12")} bitis={K(1, "weeks.") + 0.6} metin="12 WEEKS" x={1860} y={175} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tKanama} metin="NO INCREASED" x={1860} y={175} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tKanama + 0.2} metin="BLEEDING" x={1860} y={281} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S43;
