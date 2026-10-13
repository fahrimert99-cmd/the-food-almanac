// Sahne 57 — yumurta kolesterolü ve LDL: görsel üstünde etiketler + sayı rozetleri.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(0, "Eggs")} bitis={c[1].bas - 0.2} capa={[500, 800]} konum={[430, 560]} metin="ONE EGG" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "LDL")} capa={[1235, 760]} konum={[1640, 700]} metin="LDL" renk={RENK.mercan} />
      </Kamera>
      {/* 185 mg rozeti (sol boş kâğıt) */}
      <VurguRozet t={t} bas={K(0, "185")} bitis={c[1].bas - 0.2} vurgu="≈185 MG" not="CHOLESTEROL PER EGG" x={620} y={230} genislik={520} boyut={110} />
      {/* LDL değişimi */}
      <VurguRozet t={t} bas={K(1, "a few")} vurgu="+ A FEW MG/DL" not="LDL, ON AVERAGE" x={1615} y={200} genislik={500} boyut={62} renk={RENK.mercan}
        bitis={K(1, "though") - 0.1} />
      <Baslik t={t} bas={K(1, "some people")} metin="SOME PEOPLE" x={150} y={250} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "respond")} metin="RESPOND MORE" x={150} y={350} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S57;
