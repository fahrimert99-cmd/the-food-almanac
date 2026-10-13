// Sahne 39 — JAMA analizi: yumurta bağı diyet kolesterolü hesaba katılınca kayboldu. Açık kitap + büyüteç; yazılar üstteki boş kâğıtta.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const tSugg = K(0, "suggests");
  const cik1 = tSugg - 0.15;
  const cik2 = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [40, 40, 1800], [110, 90, 1650])}>
        {/* sayfadaki küçük karalama kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 664, top: 813, width: 38, height: 24, borderRadius: 10, background: "#FAF5DC" }} />
        <Etiket t={t} bas={K(0, "eggs")} bitis={cik1} capa={[480, 440]} konum={[820, 250]} metin="EGG LINK" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "dietary")} bitis={cik1} capa={[1100, 420]} konum={[1330, 220]} metin="DIETARY CHOLESTEROL" renk={RENK.altin} />
      </Kamera>
      {/* 1. bölüm: bağ kayboldu */}
      <Baslik t={t} bas={K(0, "JAMA")} bitis={cik1} metin="JAMA ANALYSIS" x={70} y={130} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "disappeared")} bitis={cik1} metin="EGG LINK GONE" x={74} y={240} boyut={76} renk={RENK.mercan} />
      {/* 2. bölüm: kolesterol sürücü olabilir */}
      <BaslikBlok t={t} bas={tSugg} bitis={cik2} satirlar={["CHOLESTEROL MAY", "DRIVE THE LINK"]} x={70} y={130} boyut={86} />
      {/* 2. cümle: denemelerle uyum */}
      <Baslik t={t} bas={K(1, "small")} metin="SMALL LDL EFFECT" x={70} y={130} boyut={86} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "trials")} metin="matches what we saw in trials" x={74} y={215} boyut={34} />
    </>
  );
};

export default S39;
