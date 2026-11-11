// Sahne 1 — turmeric vs ibuprofen: başlık, 367 rozeti, iki nesne etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [40, 10, 1840], [110, 40, 1700]);
  const bitisBaslik = K(0, "a turmeric") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={pen}>
        <Etiket t={t} bas={K(0, "turmeric extract")} capa={[1330, 480]} konum={[1380, 300]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "ibuprofen")} capa={[415, 700]} konum={[470, 340]} metin="IBUPROFEN" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "four-week")} bitis={bitisBaslik} metin="TURMERIC" x={60} y={210} boyut={120} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "four-week") + 0.2} bitis={bitisBaslik} metin="VS IBUPROFEN" x={60} y={330} boyut={120} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "367")} bitis={bitisBaslik} vurgu="367" not="adults with knee arthritis, four weeks" x={1360} y={150} genislik={560} />
    </>
  );
};

export default S01;
