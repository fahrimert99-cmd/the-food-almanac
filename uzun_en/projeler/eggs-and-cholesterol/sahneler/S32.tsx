// Sahne 32 — kitaplar üzerinde yumurta: sonuç ve sınırlar.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEgg = K(0, "one egg a day"), tNot = K(0, "not linked"), tRisk = K(0, "general population");
  const tAssoc = K(1, "association"), tProof = K(1, "not proof"), tLarge = K(1, "large and long");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1790])}>
        <Etiket t={t} bas={tEgg} bitis={7.2} capa={[950, 540]} konum={[1330, 440]} metin="ONE EGG A DAY" renk={RENK.altin} />
        <Etiket t={t} bas={tAssoc} capa={[1120, 850]} konum={[1430, 780]} metin="ASSOCIATION" renk={RENK.altin} />
        <Etiket t={t} bas={tProof} capa={[1120, 640]} konum={[1430, 640]} metin="NOT PROOF" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.5} />
      {/* pencere önünde okunurluk için yarı saydam kâğıt zemin */}
      <div style={{ position: "absolute", left: 560, top: 100, width: 800, height: 220, borderRadius: 28,
        background: "rgba(246,243,236,0.82)", opacity: Math.min(1, Math.max(0, (t - tNot + 0.1) * 4)) * Math.min(1, Math.max(0, (7.4 - t) * 4)) }} />
      <div style={{ position: "absolute", left: 560, top: 100, width: 800, height: 140, borderRadius: 28,
        background: "rgba(246,243,236,0.82)", opacity: Math.min(1, Math.max(0, (t - tLarge + 0.1) * 4)) }} />
      <Baslik t={t} bas={tNot} bitis={7.2} metin="NOT LINKED" x={960} y={185} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tRisk} bitis={7.2} metin="heart disease risk · general population" x={960} y={250} boyut={30} hiza="orta" agirlik={800} genislik={760} />
      <Baslik t={t} bas={tLarge} metin="LARGE AND LONG" x={960} y={185} boyut={104} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S32;
