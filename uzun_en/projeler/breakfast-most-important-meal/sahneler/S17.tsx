// Sahne 17 — yeme, insülin ve bağırsak hormonlarını açar; sonraki öğün "ısınmış" bedene gelir.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYe = K(0, "Eating"), tIns = K(0, "insulin"), tGut = K(0, "gut hormones"), tIsin = K(1, "warmed");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [90, 110, 1740])}>
        {/* kasedeki yiyecekten mideye akan parçacıklar */}
        <Parcaciklar t={t} bas={tYe + 0.2} kaynak={[560, 700]} hedef={[1180, 620]} adet={26} aralik={0.12} omur={1.6} tohum="s17" />
        <Etiket t={t} bas={tYe + 0.1} bitis={tIsin - 0.3} capa={[460, 760]} konum={[470, 560]} metin="EATING" renk={RENK.altin} />
        <Etiket t={t} bas={tIns} bitis={tIsin - 0.3} capa={[1450, 520]} konum={[1020, 300]} metin="INSULIN RESPONSE" renk={RENK.mercan} />
        <Etiket t={t} bas={tGut} bitis={tIsin - 0.3} capa={[1250, 760]} konum={[1100, 930]} metin="GUT HORMONES" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tIsin} metin="WARMED UP" x={110} y={200} boyut={118} renk={RENK.lacivert} />
      <Baslik t={t} bas={tIsin + 0.35} metin="FOR LUNCH" x={110} y={330} boyut={118} renk={RENK.koyuYesil} />
    </>
  );
};

export default S17;
