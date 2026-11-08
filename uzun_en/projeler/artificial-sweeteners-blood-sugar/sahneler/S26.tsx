// Sahne 26 — mikrop aktarımı, fareler
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tPan = c[1].bas - 0.3;
  const pPan = eout(ilerle(t, tPan, 0.8));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [90, 90, 1700])}>
        <Etiket t={t} bas={K(0, "gut microbes")} bitis={tPan} capa={[300, 330]} konum={[300, 110]} metin="GUT MICROBES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "germ-free")} bitis={tPan} capa={[930, 470]} konum={[1180, 150]} metin="GERM-FREE MICE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={c[1].bas} satirlar={["MICE GOT", "THE SAME SHIFT"]} x={1860} y={230} boyut={84} hiza="sag" adim={0.5} />
      <Gel t={t} bas={K(1, "strong responders")} style={{ right: 60, top: 440 }}><Hap metin="STRONG-RESPONDER MICROBES" renk={RENK.lacivert} boyut={30} /></Gel>
      <Gel t={t} bas={K(1, "glucose changes")} style={{ right: 60, top: 540 }}><Hap metin="SIMILAR GLUCOSE CHANGES" renk={RENK.mercan} boyut={30} /></Gel>
      <Gel t={t} bas={K(1, "human donors")} style={{ right: 60, top: 640 }}><Hap metin="LIKE HUMAN DONORS" renk={RENK.yesil} boyut={30} /></Gel>
    </>
  );
};

export default S26;
