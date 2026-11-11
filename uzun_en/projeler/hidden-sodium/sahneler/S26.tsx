// Sahne 26 — kalori başına sodyum: restoran 2.120 mg, mağaza 1.560 mg (1.000 kcal başına).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRest = K(0, "restaurant"), tSalty = K(0, "saltier"), t2120 = K(1, "2,120"), t1560 = K(1, "1,560"), tStore = K(1, "store-bought");
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1820]);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={pen}>
        <Etiket t={t} bas={tRest} capa={[420, 800]} konum={[420, 905]} metin="RESTAURANT" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tStore - 0.1} capa={[1480, 800]} konum={[1480, 905]} metin="STORE-BOUGHT" renk={RENK.yesil} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tSalty} metin="SALTIER PER CALORIE" x={70} y={62} boyut={60} renk={RENK.lacivert} hiza="sol" />
      <VurguRozet t={t} bas={t2120} vurgu="2,120 MG" not="PER 1,000 CALORIES" x={400} y={150} genislik={440} boyut={92} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t1560} vurgu="1,560 MG" not="PER 1,000 CALORIES" x={1500} y={150} genislik={440} boyut={92} renk={RENK.yesil} />
    </>
  );
};

export default S26;
