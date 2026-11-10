// Sahne 40 — NIH: içecek olarak sorun bildirilmemiş; karaciğer hasarı nadir, çoğunlukla ekstre
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNih = K(0, "National Institutes"), tNo = K(1, "No safety"), tLiv = K(2, "Liver injury"), tExt = K(2, "extracts");
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1760])}>
        <Etiket t={t} bas={tNo} bitis={tLiv - 0.2} capa={[735, 560]} konum={[260, 400]} metin="NO SAFETY CONCERNS" renk={RENK.yesil} />
        <Etiket t={t} bas={tLiv} capa={[1290, 600]} konum={[1500, 190]} metin="INJURY: UNCOMMON" renk={RENK.altin} />
        <Etiket t={t} bas={tExt} capa={[1507, 727]} konum={[1620, 890]} metin="MAINLY EXTRACTS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tNih} metin="THE NIH VIEW" x={70} y={190} boyut={84} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S40;
