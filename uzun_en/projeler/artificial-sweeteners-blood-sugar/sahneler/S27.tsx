// Sahne 27 — hayvan kanıtı + sınırlar
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [90, 70, 1700])}>
        <Etiket t={t} bas={K(1, "two weeks")} capa={[380, 330]} konum={[380, 110]} metin="TWO WEEKS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "over the years")} capa={[1560, 790]} konum={[1500, 560]} metin="YEARS?" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "animal evidence")} bitis={t1} metin="ANIMAL EVIDENCE" x={1860} y={170} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "a clue")} bitis={t1} metin="A CLUE," x={1860} y={270} boyut={84} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={K(0, "not proof")} bitis={t1} metin="NOT PROOF" x={1860} y={370} boyut={84} renk={RENK.mercan} hiza="sag" />
      <Gel t={t} bas={K(1, "enrolled healthy adults")} style={{ right: 60, top: 150 }}><Hap metin="HEALTHY ADULTS" renk={RENK.lacivert} boyut={34} /></Gel>
      <Gel t={t} bas={K(1, "nobody knows")} style={{ right: 60, top: 250 }}><Hap metin="LONG-TERM EFFECT: UNKNOWN" renk={RENK.mercan} boyut={34} /></Gel>
    </>
  );
};

export default S27;
