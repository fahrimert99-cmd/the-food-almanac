// Sahne 18 — 7,5 yıl: istatistiksel çeviri, daha genç beyin değil
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

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 10, 1920], [60, 30, 1800]);
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kam}>
        <Etiket t={t} bas={K(0, "pace")} capa={[560, 553]} konum={[930, 95]} metin="PACE OF DECLINE" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "seven")} vurgu={b?.satirlar[0] ?? "7.5 YEARS"} not="TOP VS BOTTOM GROUP" x={1640} y={250} genislik={470} />
      <Baslik t={t} bas={K(1, "statistical")} metin="A STATISTICAL" x={1640} y={540} boyut={60} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "translation")} metin="TRANSLATION" x={1640} y={608} boyut={60} renk={RENK.koyuYesil} hiza="orta" />
      <Pil t={t} bas={K(2, "brain")} x={1650} y={780} metin="NOT A YOUNGER BRAIN" renk={RENK.mercan} boyut={26} />
    </>
  );
};

export default S18;
