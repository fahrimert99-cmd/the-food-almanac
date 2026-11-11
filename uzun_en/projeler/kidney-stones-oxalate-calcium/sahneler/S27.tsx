// Sahne 27 — daha az oksalat böbreğe, daha az kristal
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKris = K(1, "fewer");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [160, 60, 1700], [240, 100, 1560])} />
      <Baslik t={t} bas={0.3} bitis={tKris - 0.3} metin="LESS OXALATE" x={1000} y={120} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "oxalate")} bitis={K(0, "send") + 1.5} capa={[740, 700]} konum={[300, 900]} metin="OXALATE" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "kidneys")} bitis={tKris - 0.2} capa={[1300, 640]} konum={[1690, 780]} metin="KIDNEYS" renk={RENK.lacivert} />
      <Parcaciklar t={t} bas={K(0, "send")} kaynak={[800, 420]} hedef={[1150, 430]} adet={10} aralik={0.15} kavis={-200} tohum="s27" renk={RENK.altin} />
      <Baslik t={t} bas={tKris - 0.1} metin="MAY MEAN" x={1000} y={62} boyut={34} renk={RENK.gri} font="inter" aralik={6} />
      <Baslik t={t} bas={tKris} metin="FEWER CRYSTALS" x={1000} y={130} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "crystals")} capa={[1342, 462]} konum={[1700, 250]} metin="CRYSTALS" renk={RENK.altin} />
    </>
  );
};
export default S27;
