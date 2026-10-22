// Sahne 17 — fermente grup: yoğurt, kefir, sebze, kombucha etiketleri; sonra "kıyas yok" başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYog = K(0, "yogurt,"), tKef = K(0, "kefir,"), tSeb = K(0, "vegetables");
  const tKom = K(0, "kombucha");
  const tNot = K(1, "not"), tDiyet = K(2, "healthy");
  const bit = tNot;
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1800])}>
        <Etiket t={t} bas={tYog} bitis={bit} capa={[470, 610]} konum={[330, 400]} metin="YOGURT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tKef} bitis={bit} capa={[780, 430]} konum={[740, 170]} metin="KEFIR" renk={RENK.altin} />
        <Etiket t={t} bas={tSeb} bitis={bit} capa={[1060, 560]} konum={[1090, 120]} metin="FERMENTED VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={tKom} bitis={bit} capa={[1480, 520]} konum={[1700, 400]} metin="KOMBUCHA" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tNot + 0.05} metin="NOT A COMPARISON" x={90} y={130} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot + 0.3} metin="WITH NOTHING" x={90} y={225} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={tDiyet} metin="A healthy diet of its own" x={94} y={285} boyut={36} />
    </>
  );
};

export default S17;
