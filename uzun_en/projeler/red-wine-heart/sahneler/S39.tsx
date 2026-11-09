// Sahne 39 — iyi desteklenen bulgular: terazi; başlık, +35% rozeti, kanıt yok etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "well"), tAgir = K(1, "drinking"), t35 = K(2, "35"), tYok = K(3, "no");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tAgir} bitis={t35 - 0.2} capa={[500, 430]} konum={[960, 400]} metin="HEAVY DRINKING" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tYok} capa={[1470, 420]} konum={[1150, 330]} metin="NO SOLID PROOF" renk={RENK.lacivert} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tBas} metin="WELL SUPPORTED" x={1000} y={150} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={t35} bitis={tYok - 0.2} vurgu="+35%" not="risk of dying at the highest intake" x={1000} y={330} renk={RENK.mercan} genislik={440} boyut={100} />
    </>
  );
};

export default S39;
