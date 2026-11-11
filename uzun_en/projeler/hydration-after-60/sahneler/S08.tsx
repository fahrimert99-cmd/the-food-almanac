// Sahne 8 — böbrekler daha az, daha koyu idrar yapar; susama ikinci parça.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820]);
  const tMore = K(0, "more concentrated");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={pen}>
        <Etiket t={t} bas={K(0, "kidneys")} bitis={c[1].bas - 0.2} capa={[600, 320]} konum={[230, 200]} metin="KIDNEYS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "less urine")} bitis={tMore - 0.1} capa={[1020, 790]} konum={[250, 880]} metin="LESS URINE" renk={RENK.mercan} />
        <Etiket t={t} bas={tMore} bitis={c[1].bas - 0.2} capa={[1020, 790]} konum={[300, 880]} metin="MORE CONCENTRATED" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "replace")} capa={[1500, 330]} konum={[1590, 170]} metin="REPLACE WHAT WAS LOST" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "thirst")} metin="THIRST" x={70} y={140} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "second part")} metin="THE SECOND PART" x={76} y={240} boyut={34} renk={RENK.gri} font="inter" aralik={4} />
    </>
  );
};

export default S08;
