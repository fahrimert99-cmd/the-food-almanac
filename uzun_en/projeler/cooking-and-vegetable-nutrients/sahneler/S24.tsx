// Sahne 24 — Likopen 2,7 kat arttı, C vitamini ~%29 azaldı (terazi: çiğ vs pişmiş).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIsit = K(0, "heating"), tLik = K(0, "extractable"), t27 = K(0, "2.7"), tCig = K(0, "raw"), tC = K(1, "Vitamin"), t29 = K(1, "29");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tIsit} capa={[970, 640]} konum={[970, 830]} metin="HEATED" renk={RENK.mercan} />
        <Etiket t={t} bas={tCig} capa={[250, 640]} konum={[250, 830]} metin="RAW" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tLik} metin="LYCOPENE UP" x={1860} y={200} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tC} metin="VITAMIN C DOWN" x={1860} y={296} boyut={84} hiza="sag" renk={RENK.mercan} />
      <VurguRozet t={t} bas={t27} bitis={t29 - 0.5} vurgu="2.7×" not="extractable lycopene after 15 minutes of heat" x={1560} y={410}
        genislik={460} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t29} vurgu="–29%" not="vitamin C after 30 minutes" x={1560} y={410} genislik={460} renk={RENK.mercan} />
    </>
  );
};

export default S24;
