// Sahne 25 — Bölüm 4 açılışı: makarna üç şekilde (sıcak / soğuk / soğutulup ısıtılmış).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Ortalanmış, pop ile gelen hap
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; bitis?: number }> = ({
  t, bas, x, y, metin, renk, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0 || t > bitis) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [10, 30, 1900], [90, 100, 1740])}>
        <Etiket t={t} bas={K(1, "hot,") - 0.1} capa={[370, 600]} konum={[370, 860]} metin="HOT" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={K(1, "cold") - 0.1} capa={[955, 600]} konum={[955, 860]} metin="COLD" renk={RENK.lacivert} boyut={28} />
        <Etiket t={t} bas={K(1, "reheated") - 0.1} capa={[1480, 690]} konum={[1380, 860]} metin="CHILLED + REHEATED" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "other")} bitis={3.2} metin="OTHER FOODS?" x={960} y={200} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <KaynakEtiketi t={t} bas={3.6} metin={s.meta.etiket ?? ""} />
      <Pil t={t} bas={K(1, "Brighton")} x={540} y={175} metin="UNIV. OF BRIGHTON" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "45")} x={960} y={175} metin="45 VOLUNTEERS" renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "20")} x={1360} y={175} metin="AGE 20–24" renk={RENK.lacivert} />
    </>
  );
};

export default S25;
