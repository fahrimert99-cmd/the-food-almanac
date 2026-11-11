import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, Parcaciklar, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

// belirli x,y merkezli, pop ile giren hap
const GHap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, boyut = 34 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

// Sahne 30 — Tavan: ~1,6 g/kg üstünde ek kazanç yok
const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const tDet = K(0, "Two details"), tAge = K(1, "smaller with age"), tCeil = c[2].bas, t16 = K(2, "1.6"), tNo = K(2, "no further");
  const bit1 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={k}>
        <Etiket t={t} bas={t16} capa={[650, 215]} konum={[880, 330]} metin="1.6 G/KG" renk={RENK.altin} />
      </Kamera>
      <Parcaciklar t={t} bas={t16} kaynak={[620, 780]} hedef={[540, 260]} adet={18} aralik={0.15} kavis={-60} tohum="p30" />
      <Baslik t={t} bas={tDet} bitis={bit1} metin="TWO DETAILS" x={1400} y={150} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <GHap t={t} bas={tAge} bitis={bit1} x={1400} y={300} metin="BENEFIT SHRINKS WITH AGE" renk={RENK.altin} boyut={32} />
      <Baslik t={t} bas={tCeil} metin="A CEILING" x={1400} y={200} boyut={112} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t16} vurgu="1.6" not={"grams per kilogram: no extra muscle gain above this"} x={1400} y={310} genislik={470} renk={RENK.altin} />
      <Ikon t={t} bas={tNo} ad="carpi" x={1190} y={760} zemin={RENK.mercan} />
      <Baslik t={t} bas={tNo + 0.1} metin="NO FURTHER GAIN" x={1260} y={760} boyut={58} renk={RENK.mercan} />
    </>
  );
};

export default S30;
