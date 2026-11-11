// Sahne 38 — hap kutusu: küçük dozlar, gün boyunca, öğünlerle.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b1 = c[1].bas - 0.2, b2 = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Baslik t={t} bas={K(0, "Pills")} bitis={b1} metin="PILLS WORK" x={680} y={120} boyut={90} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "differently")} bitis={b1} metin="DIFFERENTLY" x={680} y={225} boyut={90} renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "Pills")} bitis={b1} capa={[1030, 640]} konum={[1030, 870]} metin="CALCIUM PILLS" renk={RENK.altin} />
        <VurguRozet t={t} bas={K(1, "500")} bitis={b2} vurgu="500–600 MG" not="absorbed best at a time" x={1000} y={50} boyut={90} genislik={560} />
        <Baslik t={t} bas={K(2, "spreading")} metin="SPREAD IT OUT" x={1000} y={110} boyut={90} renk={RENK.koyuYesil} hiza="orta" />
        <Baslik t={t} bas={K(2, "across")} metin="ACROSS THE DAY" x={1000} y={215} boyut={90} renk={RENK.lacivert} hiza="orta" />
        <Etiket t={t} bas={K(2, "meals,")} capa={[300, 470]} konum={[210, 200]} metin="WITH MEALS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "one big")} capa={[1000, 690]} konum={[1030, 870]} metin="NOT ONE BIG DOSE" renk={RENK.mercan} />
      </Kamera>
    </>
  );
};

export default S38;
