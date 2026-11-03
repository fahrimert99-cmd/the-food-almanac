// Sahne 61 — cassia / Ceylon kumarin, terazi ve günlük sınır
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, Baslik } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b1 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={K(0, "cassia")} bitis={b1} capa={[870, 600]} konum={[330, 470]} metin="CASSIA" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "limit")} capa={[767, 405]} konum={[400, 330]} metin="THE LIMIT" renk={RENK.altin} />
      </Kamera>
      {/* üst kâğıt bandı: terazi kolundaki sahte yazıyı örter, başlıklar burada */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 270,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 74%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "most")} bitis={b1} metin="MOST STORE CINNAMON" x={60} y={100} boyut={74} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "cassia")} bitis={b1} metin="IS CASSIA" x={60} y={178} boyut={74} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "much")} bitis={b1} vurgu="MORE" not="COUMARIN THAN CEYLON" x={1700} y={150} genislik={380} boyut={90} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "60")} metin="60 KG ADULT" x={60} y={100} boyut={74} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "teaspoon")} metin="~1 TEASPOON CASSIA DAILY" x={60} y={178} boyut={74} renk={RENK.mercan} />
    </>
  );
};

export default S61;
