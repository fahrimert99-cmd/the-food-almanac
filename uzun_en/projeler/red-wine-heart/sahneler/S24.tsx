// Sahne 24 — genetik veri: inme, tansiyon, kalp krizi
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tB = K(2, "stroke");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 30, 1800], [30, 60, 1700])}>
        {/* kadrandaki sahte yazı kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 296, top: 462, width: 62, height: 22, borderRadius: 8, background: "#F8F5EB" }} />
        <Etiket t={t} bas={K(0, "blood pressure")} bitis={tB - 0.2} capa={[430, 280]} konum={[1000, 140]} metin="HIGHER BLOOD PRESSURE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "heart attacks")} bitis={tB - 0.2} capa={[550, 690]} konum={[1180, 700]} metin="NO SIGNIFICANT LINK" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "27")} bitis={K(0, "blood") - 0.3} vurgu="+27%" not="ischemic stroke per 280 g a week" x={1400} y={300} genislik={560} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tB} satirlar={b.satirlar} x={1860} y={260} boyut={120} hiza="sag" />
      <Not t={t} bas={K(2, "largely")} metin={b.not!} x={1860} y={540} hiza="sag" boyut={36} agirlik={800} genislik={800} />
    </>
  );
};
export default S24;
