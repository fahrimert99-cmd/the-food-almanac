// Sahne 20 — iki grup: egzersiz yapanlar ve hastalığı olanlar (kâğıt rengi üst alanda rozetler)
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(0, "two groups");
  const tSpor = K(0, "exercise");
  const tSayi1 = K(0, "1.2");
  const tHasta = K(0, "acute");
  const tSayi2 = K(0, "1.2 to");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [20, 40, 1880], [90, 90, 1740])}>
        {/* dambıl üzerindeki anlamsız kabartma yazı örtülür */}
        <div style={{ position: "absolute", left: 500, top: 670, width: 120, height: 70,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #2a2a2c 0%, #2a2a2c 55%, rgba(42,42,44,0) 100%)" }} />
      </Kamera>
      <Baslik t={t} bas={tIki} metin="TWO GROUPS" x={960} y={78} boyut={78} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={tSpor} capa={[800, 700]} konum={[560, 900]} metin="WHO EXERCISE" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tSayi1} vurgu="≥ 1.2 G/KG" not="older adults who exercise" x={480} y={150} genislik={470} boyut={64} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tHasta} capa={[1400, 740]} konum={[1440, 900]} metin="ACUTE OR CHRONIC ILLNESS" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tSayi2} vurgu="1.2–1.5 G/KG" not="older adults with illness" x={1400} y={150} genislik={500} boyut={64} renk={RENK.altin} />
    </>
  );
};

export default S20;
