// Sahne 26 — takas: tereyağı/mayonez → zeytinyağı. Sağ sütunda inme notu, başlık, 5 g, rozet.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tInme = K(0, "stroke"), tTakas = K(1, "swapping"), tGram = K(1, "5 grams");
  const tTer = K(1, "butter"), tMayo = K(1, "mayonnaise"), tZeytin = K(1, "olive oil"), tPay = K(1, "5 to 7");
  const [sg, ag] = pop(t, tGram, 0.5);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 80, 1700], [60, 100, 1560])} />
      {/* 1. cümle: inme ile net bağ yok */}
      <Ikon t={t} bas={K(0, "no clear")} bitis={tTakas - 0.1} ad="soru" x={1250} y={420} boyut={96} zemin={RENK.altin} />
      <Not t={t} bas={K(0, "no clear")} bitis={tTakas - 0.1} metin="STROKE: NO CLEAR LINK" x={1330} y={398} boyut={40} agirlik={800} />
      <BaslikBlok t={t} bas={tTakas} satirlar={b.satirlar} x={1200} y={230} boyut={118} />
      <Not t={t} bas={tTakas + 0.4} metin={b.not!} x={1204} y={310} boyut={30} genislik={620} />
      <div style={{ position: "absolute", left: 1204, top: 470, transform: `scale(${sg})`, transformOrigin: "0% 50%", opacity: ag }}>
        <Hap metin="JUST 5 G A DAY" renk={RENK.altin} boyut={34} />
      </div>
      <Etiket t={t} bas={tTer} capa={[480, 640]} konum={[420, 890]} metin="BUTTER" renk={RENK.altin} />
      <Etiket t={t} bas={tMayo} capa={[310, 580]} konum={[300, 140]} metin="MAYONNAISE" renk={RENK.mercan} />
      <Etiket t={t} bas={tZeytin} capa={[790, 600]} konum={[900, 130]} metin="OLIVE OIL" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tPay} vurgu="5–7%" not="lower risk of heart disease" x={1450} y={600} genislik={420} renk={RENK.koyuYesil} />
    </>
  );
};

export default S26;
