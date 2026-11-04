// Sahne 26 — Isıtılmış makarna: %4 daha küçük yanıt; soğuk makarna farksız.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [45, 38, 1700], [90, 70, 1600])}>
        {/* ahşap bloğun sağ kenarını kâğıda yumuşakça karıştır */}
        <div style={{ position: "absolute", left: 1085, top: 0, width: 120, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 55%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(0, "pasta") - 0.1} capa={[520, 580]} konum={[360, 830]} metin="PASTA" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={K(0, "blood") - 0.1} capa={[950, 600]} konum={[900, 830]} metin="BLOOD SUGAR" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "chilled") - 0.1} satirlar={b.satirlar} x={1860} y={250} boyut={112} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "4")} bitis={7.0} vurgu={b.vurgu!} not={b.not} x={1560} y={500} genislik={480} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "cold")} vurgu="COLD ≈ HOT" not="not significantly different" x={1560} y={500} genislik={480} boyut={80} renk={RENK.lacivert} />
    </>
  );
};

export default S26;
