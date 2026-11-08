// Sahne 25 — mikroplar + kişisel yanıt
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tPan = c[1].bas - 0.3;
  const pPan = eout(ilerle(t, tPan, 0.8));
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [20, 20, 1840], [110, 70, 1660])}>
        <Etiket t={t} bas={K(0, "sweeteners")} bitis={tPan} capa={[1500, 760]} konum={[1020, 900]} metin="SWEETENERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "microbes")} bitis={tPan} capa={[640, 330]} konum={[640, 96]} metin="GUT MICROBES" renk={RENK.yesil} />
      </Kamera>
      <Gel t={t} bas={K(0, "guts")} bitis={tPan} style={{ left: 1120, top: 330 }}><Hap metin="GUTS + MOUTHS" renk={RENK.lacivert} /></Gel>
      <Panel a={pPan} taraf="sag" genislik={860} />
      <Baslik t={t} bas={K(1, "personal")} metin="PERSONAL" x={1860} y={300} boyut={150} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(1, "response")} metin="RESPONSE" x={1860} y={440} boyut={150} renk={RENK.lacivert} hiza="sag" />
      <Gel t={t} bas={K(2, "strongly")} style={{ right: 60, top: 600 }}><Hap metin="SOME: STRONG" renk={RENK.mercan} boyut={36} /></Gel>
      <Gel t={t} bas={K(2, "little")} style={{ right: 60, top: 700 }}><Hap metin="OTHERS: LITTLE CHANGE" renk={RENK.yesil} boyut={36} /></Gel>
    </>
  );
};

export default S25;
