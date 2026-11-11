// Sahne 55 — örnek hafta: Salı ve Cuma
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(0, "canned")} capa={[880, 380]} konum={[1580, 520]} metin="CANNED SALMON SALAD" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(0, "baked")} capa={[480, 740]} konum={[400, 640]} metin="BAKED FILLET" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(0, "sardine")} capa={[1120, 790]} konum={[1580, 620]} metin="SARDINE TOAST" renk={RENK.koyuYesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "tuesday,")} metin="TUESDAY" x={1860} y={170} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "baked")} metin="AND FRIDAY" x={1860} y={285} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "servings,")} vurgu="2 SERVINGS" not="no special equipment" x={1620} y={720} boyut={64} genislik={400} />
    </>
  );
};
export default S55;
