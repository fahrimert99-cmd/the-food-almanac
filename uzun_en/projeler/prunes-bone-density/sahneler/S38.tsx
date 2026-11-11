// Sahne 38 — sınır: kabızlık çalışmasında ortalama yaş 38; sonuç yaşlılara ödünç alınıyor.
import React from "react";
import { Baslik, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1140, top: y, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [] as string[], not: "" };
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 60, 1800])} />
      <Baslik t={t} bas={0.1} metin="THE LIMIT" x={1140} y={110} boyut={34} renk={RENK.mercan} font="inter" agirlik={800} aralik={8} />
      <Baslik t={t} bas={K(1, "average")} metin={b.satirlar[0]} x={1140} y={215} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "38")} metin={b.satirlar[1]} x={1140} y={450} boyut={300} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "younger")} metin={b.not ?? ""} x={1140} y={640} boyut={32} genislik={700} />
      <Cip t={t} bas={K(2, "not mainly")} y={770} metin="NOT MAINLY OVER 60" renk={RENK.mercan} />
      <Cip t={t} bas={K(2, "borrowing")} y={860} metin="BORROWED FOR OLDER VIEWERS" renk={RENK.altin} />
    </>
  );
};

export default S38;
