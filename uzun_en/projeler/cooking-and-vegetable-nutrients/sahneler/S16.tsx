// Sahne 16 — mekanizma: kaynar suda vitaminler suya sızar; buharda sebze suyun dışında kalır.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSizma = K(1, "leach");
  const bitis1 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [80, 50, 1760])}>
        <Etiket t={t} bas={K(1, "boiling")} bitis={bitis1} capa={[1300, 900]} konum={[1560, 780]} metin="BOILING WATER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "Steaming")} capa={[1050, 430]} konum={[1560, 330]} metin="STEAMING" renk={RENK.yesil} />
        {/* altın parçacıklar: sebzeden suya akar */}
        <Parcaciklar t={t} bas={K(1, "vitamins")} kaynak={[960, 520]} hedef={[1050, 900]} adet={18} aralik={0.1} omur={1.3} yayilma={260}
          kavis={60} boyut={8} tohum="s16" hedefYayilma={300} />
      </Kamera>
      <Baslik t={t} bas={K(1, "vitamins") - 0.1} bitis={bitis1} metin="VITAMINS" x={60} y={330} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSizma - 0.1} bitis={bitis1} metin="LEACH OUT" x={60} y={415} boyut={76} renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "far less") - 0.1} metin="FAR LESS" x={60} y={330} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "far less") + 0.15} metin="TO WASH AWAY" x={60} y={406} boyut={66} renk={RENK.koyuYesil} />
    </>
  );
};

export default S16;
