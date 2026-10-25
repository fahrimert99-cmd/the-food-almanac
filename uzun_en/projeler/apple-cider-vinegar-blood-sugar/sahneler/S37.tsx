// Sahne 37 — adil özet: küçük bir itme, kanıt sınırlı. Tepe (kabaran eğri) ve tabak üzerinde etiketler.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFair = K(0, "fair"), tModest = K(1, "modest"), tRise = K(1, "rise"), tStarchy = K(1, "starchy"), tSmall = K(1, "small");
  const tInt = K(2, "interesting"), tNot = K(2, "not a proven");
  const son = tInt - 0.15;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [70, 90, 1760])}>
        <Etiket t={t} bas={tRise} bitis={son} capa={[1130, 455]} konum={[880, 300]} metin="THE RISE" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tStarchy} bitis={son} capa={[1250, 650]} konum={[1580, 540]} metin="STARCHY MEAL" renk={RENK.altin} boyut={28} />
      </Kamera>
      <AltSis a={0.7} yukseklik={140} />
      <Not t={t} bas={tFair} bitis={tModest - 0.1} metin="A FAIR SUMMARY" x={1860} y={170} hiza="sag" boyut={40} agirlik={800} renk={RENK.altin} genislik={700} />
      <BaslikBlok t={t} bas={tModest} bitis={son} satirlar={["A MODEST NUDGE"]} x={1860} y={170} boyut={100} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tSmall - 0.3} bitis={son} metin="Seen mostly in small, short trials" x={1860} y={240} hiza="sag" boyut={34} genislik={800} />
      <BaslikBlok t={t} bas={tInt} satirlar={["INTERESTING,", "NOT A PROVEN TREATMENT"]} x={1860} y={150} boyut={84} hiza="sag" adim={0.45} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S37;
