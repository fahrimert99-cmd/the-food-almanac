// Sahne 4 — bölüm açılışı: görsel sağa kayar, solda marka ve konu
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, Not, RENK, SP, ikiSatir, einout, ilerle, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ad = ikiSatir(MARKA.ad.toUpperCase(), 10);
  const z = einout(ilerle(t, 0, s.sure + 0.7));
  return (
    <>
      <Kamera gorsel="tam/04" sinirla={false} pencere={[-560 + 40 * z, -20 * z, 2480 - 100 * z]}>
        <Etiket t={t} bas={K(1, "bean")} capa={[950, 840]} konum={[-30, 880]} metin="ONE BEAN" renk={RENK.altin} />
      </Kamera>
      {ad.map((m, i) => (
        <Baslik key={i} t={t} bas={K(0, "Food") - 0.1 + i * 0.18} metin={m} x={60} y={320 + i * 112} boyut={100}
          renk={i === ad.length - 1 ? RENK.koyuYesil : RENK.lacivert} />
      ))}
      <Not t={t} bas={K(1, "what")} metin="WHAT A BEAN DOES ONCE YOU EAT IT" x={60} y={560} boyut={36} genislik={520} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S04;
