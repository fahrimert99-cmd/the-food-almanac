// Sahne 5 — Soya ürünleri tahtası; etiketler sırayla, sonra İSOFLAVONLAR başlığı
import React from "react";
import { Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const bit = K(2, "Soybeans") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={K(1, "tofu")} bitis={bit} capa={[780, 470]} konum={[560, 190]} metin="TOFU" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "edamame")} bitis={bit} capa={[400, 420]} konum={[220, 200]} metin="EDAMAME" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "soy")} bitis={bit} capa={[1030, 300]} konum={[1430, 170]} metin="SOY MILK" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "miso")} bitis={bit} capa={[640, 690]} konum={[760, 905]} metin="MISO" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "tempeh")} bitis={bit} capa={[1230, 580]} konum={[1620, 640]} metin="TEMPEH" renk={RENK.koyuYesil} />
      </Kamera>
      <Parcaciklar t={t} bas={K(2, "compounds")} kaynak={[840, 520]} hedef={[1560, 260]} adet={26} tohum="izo" />
      <Baslik t={t} bas={K(2, "plant")} metin="PLANT COMPOUNDS" x={1860} y={110} boyut={40} hiza="sag" renk={RENK.altin} font="inter" aralik={4} />
      <Baslik t={t} bas={K(2, "isoflavones")} metin={b?.satirlar[0] ?? "ISOFLAVONES"} x={1860} y={215} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      {b?.not && <Not t={t} bas={K(2, "isoflavones") + 0.4} metin={b.not} x={1860} y={290} hiza="sag" boyut={30} genislik={560} />}
    </>
  );
};
export default S05;
