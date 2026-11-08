// Sahne 21 — Khaw 2018 denemesi: 96 kişi, günde 50 g, üç yağ, dört hafta.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Pop animasyonlu hap (kütüphane Hap'ı statik)
const PHap: React.FC<{ t: number; bas: number; metin: string; renk: string; boyut?: number; pos: React.CSSProperties }> = ({ t, bas, metin, renk, boyut = 28, pos }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return <div style={{ position: "absolute", ...pos, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRand = K(0, "randomly"), t96 = K(0, "96"), t50 = K(0, "50"), tThree = K(0, "three fats"), t4w = K(1, "four weeks");
  const tSon = K(1, "nearly") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tThree} capa={[470, 750]} konum={[560, 470]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tThree + 0.35} capa={[800, 660]} konum={[900, 420]} metin="OLIVE OIL" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tThree + 0.7} capa={[1560, 810]} konum={[1560, 660]} metin="BUTTER" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <PHap t={t} bas={t96} metin="96 HEALTHY ADULTS" renk={RENK.lacivert} pos={{ left: 56, top: 140 }} />
      <VurguRozet t={t} bas={t50} vurgu="50 g" not="a day" x={1500} y={150} genislik={340} boyut={96} />
      <Baslik t={t} bas={tThree} metin="3 FATS" x={1860} y={400} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={t4w} metin="4 WEEKS" x={1860} y={512} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S21;
