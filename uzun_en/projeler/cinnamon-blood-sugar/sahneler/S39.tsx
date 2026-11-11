// Sahne 39 — bazı denemeler günde 6 g kullandı; cassia ise limit aşılır, tür çoğu zaman raporlanmadı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOver = K(1, "well"), tRap = K(1, "and");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 60, 1720])} />
      <VurguRozet t={t} bas={K(0, "6")} vurgu="6 G / DAY" not="used in some diabetes trials" x={470} y={70} genislik={520} boyut={92} />
      <Etiket t={t} bas={K(0, "trials")} bitis={tOver - 0.1} capa={[1560, 420]} konum={[1500, 190]} metin="TRIAL REPORTS" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "cassia,")} capa={[1000, 800]} konum={[900, 930]} metin="IF CASSIA" renk={RENK.mercan} />
      <Baslik t={t} bas={tOver} bitis={tRap - 0.1} metin="WELL OVER THE DAILY LIMIT" x={1860} y={140} boyut={64} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(1, "our")} bitis={tRap - 0.1} metin="by our math" x={1860} y={200} boyut={34} hiza="sag" />
      <Ikon t={t} bas={tRap} ad="soru" x={1780} y={125} boyut={84} zemin={RENK.lacivert} />
      <Not t={t} bas={K(1, "type")} metin="the type often wasn't reported" x={1650} y={125} boyut={36} hiza="sag" genislik={560} />
    </>
  );
};
export default S39;
