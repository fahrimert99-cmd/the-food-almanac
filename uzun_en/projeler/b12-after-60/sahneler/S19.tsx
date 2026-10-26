// Sahne 19 — metformin ve B12. Üstteki boş kâğıt başlıklara ayrıldı; ölçüm cihazındaki bozuk yazı yamayla örtülü.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS1 = K(1, "works well"), tS2 = K(2, "b12");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [20, 130, 1800], [90, 170, 1700])}>
        {/* cihaz üzerindeki sahte "Lide" yazısı */}
        <div style={{ position: "absolute", left: 1352, top: 700, width: 100, height: 44,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F3F1E8 0%, #F3F1E8 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "metformin,")} bitis={tS2 + 5} metin="METFORMIN" x={1860} y={190} boyut={124} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tS2} metin="AND B12" x={1860} y={320} boyut={124} renk={RENK.koyuYesil} hiza="sag" />
      <Etiket t={t} bas={K(0, "type 2")} bitis={5.4} capa={[1300, 770]} konum={[1230, 540]} metin="TYPE 2 DIABETES" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "prediabetes")} bitis={5.4} capa={[1700, 740]} konum={[1700, 580]} metin="PREDIABETES" renk={RENK.altin} />
      <Baslik t={t} bas={tS1} bitis={8.7} metin="IT WORKS WELL" x={1860} y={330} boyut={64} renk={RENK.yesil} hiza="sag" font="inter" agirlik={800} />
      <Baslik t={t} bas={K(1, "nothing here")} bitis={8.7} metin="NOT A REASON TO STOP" x={1860} y={410} boyut={64} renk={RENK.lacivert} hiza="sag" font="inter" agirlik={800} />
      <Not t={t} bas={K(2, "over many")} metin="OVER MANY YEARS" x={1860} y={425} boyut={46} hiza="sag" agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S19;
