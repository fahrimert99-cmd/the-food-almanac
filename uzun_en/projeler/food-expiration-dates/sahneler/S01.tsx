// Sahne 1 — tarih kuralı yok; sağda başlık, solda gerçek ürün etiketleri.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, BaslikBlok, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tF = K(1, "infant");
  const t43 = K(2, "43");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        {/* süt kutusundaki anlamsız yazı kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 250, top: 130, width: 110, height: 60,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F1EFE8 0%, #F1EFE8 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "milk,")} capa={[300, 420]} konum={[760, 190]} metin="MILK" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "yogurt,")} capa={[460, 700]} konum={[560, 905]} metin="YOGURT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "deli")} capa={[740, 690]} konum={[1130, 830]} metin="DELI HAM" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={["NO FEDERAL", "DATE RULE"]} x={1860} y={200} boyut={112} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tF} bitis={t43 - 0.2} metin="ONLY INFANT FORMULA HAS A DATE" x={1860} y={450} hiza="sag" boyut={40} agirlik={800} genislik={520} />
      <KaynakEtiketi t={t} bas={K(2, "survey")} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={t43} vurgu="43%" not={s.meta.baslik?.not} x={1560} y={420} genislik={540} />
    </>
  );
};

export default S01;
