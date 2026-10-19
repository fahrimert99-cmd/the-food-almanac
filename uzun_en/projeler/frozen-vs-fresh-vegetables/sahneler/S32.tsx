// Sahne 32 — çeşitlilik: sandık, alt tahtada başlık kartı
import React from "react";
import { Baslik, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aK = eout(ilerle(t, K(0, "one-sided") - 0.2, 0.5));
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])} />
      {/* ahşap bölgede yazı kartı */}
      <div style={{ position: "absolute", left: 330, top: 700, width: 1260, height: 230, opacity: aK, borderRadius: 28,
        background: kagit(0.95), border: `4px solid ${RENK.lacivert}`, boxShadow: "0 12px 30px rgba(48,40,34,0.25)" }} />
      <Baslik t={t} bas={K(0, "one-sided")} bitis={K(1, "vary") + 0.1} metin="NOT ONE-SIDED" x={960} y={815} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "vary")} bitis={K(1, "variety") - 0.1} metin="VARIES BY VEGETABLE" x={960} y={770} boyut={84} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "nutrient")} bitis={K(1, "variety") - 0.1} metin="AND BY NUTRIENT" x={960} y={860} boyut={72} hiza="orta" renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "variety")} metin="VARIETY" x={960} y={770} boyut={104} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "one")} metin="NOT ONE WINNER" x={960} y={865} boyut={64} hiza="orta" renk={RENK.mercan} />
    </>
  );
};

export default S32;
