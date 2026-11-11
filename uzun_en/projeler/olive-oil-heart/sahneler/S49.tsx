// Sahne 49 — yağ kalori yoğundur; FDA: doymuş yağın yerine, üstüne ekleme değil
import React from "react";
import { AdimAkisi, Baslik, Etiket, Ikon, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tYag = K(0, "oil"), tYogun = K(0, "dense");
  const tDeg = K(1, "replace"), tDoy = K(1, "saturated fat"), tEkle = K(1, "add calories");
  const tDok = K(2, "pouring"), tDeney = K(2, "not what");
  const bit0 = c[1].bas - 0.1, bit1 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1740])} />
      <Etiket t={t} bas={tYag} bitis={bit0} capa={[1470, 300]} konum={[1250, 130]} metin="OLIVE OIL" renk={RENK.altin} />
      <Baslik t={t} bas={tYogun} bitis={bit0} metin="CALORIE-DENSE" x={70} y={110} boyut={100} renk={RENK.altin} />
      <div style={{ opacity: sol(t, bit1) }}>
      <AdimAkisi t={t} x={620} y={120} boyut={28} numarali={false} adimlar={[
        { bas: tDoy, metin: "SATURATED FAT", renk: RENK.mercan },
        { bas: tDoy + 0.5, metin: "OLIVE OIL", renk: RENK.yesil },
      ]} />
      </div>
      <Baslik t={t} bas={tEkle} bitis={bit1} metin="DON'T ADD CALORIES" x={70} y={225} boyut={64} renk={RENK.lacivert} />
      <Ikon t={t} bas={tEkle + 0.2} bitis={bit1} ad="carpi" x={640} y={225} boyut={64} zemin={RENK.mercan} />
      <Parcaciklar t={t} bas={tDok} kaynak={[1470, 310]} hedef={[1050, 560]} adet={16} aralik={0.12} tohum="yag49" />
      <Baslik t={t} bas={tDeney} metin="NOT WHAT WAS TESTED" x={70} y={110} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S49;
