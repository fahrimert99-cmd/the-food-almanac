// Sahne 30 — 2019 incelemesindeki diğer çalışmalar: sarımsak tozu, doz ve süre. Sağ panelde üç sayı.
import React from "react";
import { Baslik, Kamera, Not, Panel, RENK, SP, ANTON, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; y: number; sayi: string; not: string; renk: string }> = ({ t, bas, y, sayi, not, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 70, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%", textAlign: "right" }}>
      <div style={{ fontFamily: ANTON, fontSize: 96, lineHeight: 1.05, color: renk, whiteSpace: "nowrap" }}>{sayi}</div>
      <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 32, color: RENK.lacivert }}>{not}</div>
    </div>
  );
};

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aP = eout(ilerle(t, 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [250, 80, 1450], [300, 120, 1330])} />
      <Panel a={aP} taraf="sag" genislik={800} />
      <Not t={t} bas={K(0, "2019")} metin="2019 REVIEW · OTHER TRIALS" x={1850} y={140} boyut={30} hiza="sag" agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "garlic powder")} metin="GARLIC POWDER" x={1850} y={250} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Satir t={t} bas={K(0, "600")} y={340} sayi="600–900 MG" not="a day, mostly" renk={RENK.lacivert} />
      <Satir t={t} bas={K(0, "2,400")} y={550} sayi="2,400 MG" not="in one case" renk={RENK.altin} />
      <Satir t={t} bas={K(0, "8")} y={760} sayi="8–24 WEEKS" not="trial length" renk={RENK.koyuYesil} />
    </>
  );
};
export default S30;
