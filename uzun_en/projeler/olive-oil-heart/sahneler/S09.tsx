// Sahne 9 — Uyarı: Kaliforniya yağlarının %10'u kaldı; çalışma eski ve kısmen üretici fonlu, marka sıralaması değil.
import React from "react";
import { Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t10 = K(0, "10"), tFon = K(1, "funded"), tEski = K(1, "old"), tEt = K(1, "labels"), tSira = K(1, "ranking");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <VurguRozet t={t} bas={t10} vurgu="10%" not="of California oils failed" x={300} y={90} genislik={420} renk={RENK.mercan} />
      <Etiket t={t} bas={tFon} bitis={tSira - 0.3} capa={[1250, 170]} konum={[1640, 130]} metin="PARTLY PRODUCER-FUNDED" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tEski} bitis={tEt} capa={[640, 430]} konum={[200, 400]} metin="OLD STUDY" renk={RENK.lacivert} />
      <Etiket t={t} bas={tEt} capa={[1460, 475]} konum={[1640, 330]} metin="LABELS CAN VARY" renk={RENK.yesil} />
      <Etiket t={t} bas={tSira} capa={[1270, 360]} konum={[1640, 130]} metin="NOT A BRAND RANKING" renk={RENK.mercan} boyut={26} />
      <Ikon t={t} bas={tSira + 0.2} ad="carpi" x={1790} y={215} boyut={64} zemin={RENK.mercan} />
    </>
  );
};

export default S09;
