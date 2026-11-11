// Sahne 20 — 11 yıl karşılaştırması: 960 yetişkin, ~4,7 yıl; istatistiksel çeviri
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Ortu, RENK, SP, VurguRozet, kameraYolu, einout, eout, ilerle,
  kelimeZamani, pop, sol } from "../kutuphane";

// Hap etiketi (ekran koordinatı, pop ile gelir)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 10, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kam}>
        <Etiket t={t} bas={K(3, "plate")} capa={[1180, 500]} konum={[1700, 800]} metin="YOUR PLATE" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "eleven")} vurgu="11 YEARS" not="described age gap" x={225} y={380} genislik={360} boyut={80} />
      <VurguRozet t={t} bas={K(1, "960")} vurgu="960" not="OLDER ADULTS" x={1710} y={300} genislik={340} boyut={96} />
      <Pil t={t} bas={K(1, "seven")} x={1710} y={560} metin="4.7 YEARS" renk={RENK.altin} boyut={28} />
      <Pil t={t} bas={K(2, "seven")} x={225} y={640} metin="7.5 YEARS" renk={RENK.altin} boyut={28} />
      <Baslik t={t} bas={K(2, "translation")} metin="A STATISTICAL TRANSLATION" x={960} y={68} boyut={46} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(2, "not")} metin="NOT A YOUNGER BRAIN" x={960} y={122} boyut={46} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S20;
