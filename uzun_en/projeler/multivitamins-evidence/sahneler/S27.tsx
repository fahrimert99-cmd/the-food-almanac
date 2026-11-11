// Sahne 27 — gerçek sınırlar: uzun yol, kilometre taşı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBit = K(2, "higher") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(2, "test scores")} bitis={K(2, "avoids") - 0.1} capa={[1130, 690]} konum={[1480, 880]} metin="TEST SCORES" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "avoids")} capa={[960, 640]} konum={[960, 260]} metin="AVOIDING DEMENTIA?" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "real")} bitis={1.55} metin="REAL LIMITS" x={960} y={190} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "89")} bitis={tBit} vurgu="89%" not="NON-HISPANIC WHITE" x={560} y={110} genislik={470} boyut={100} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "two to three")} bitis={tBit} vurgu="2–3 YEARS" not="HOW LONG THE STUDIES RAN" x={1330} y={110} genislik={560} boyut={100} />
    </>
  );
};

export default S27;
