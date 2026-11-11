// Sahne 21 — uzman uzlaşısı, doğa yasası değil; açık sorular (sağda kâğıt alanda)
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const X = 1560;
  const tAd = K(1, "PROT-AGE");
  const tUzman = K(1, "expert");
  const tArast = K(1, "built from");
  const tYasa = K(1, "not a law");
  const tSoru = K(1, "open questions");
  const tTur = K(1, "protein type");
  const tZaman = K(1, "timing");
  const tSup = K(1, "supplements");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <Panel a={1} taraf="sag" genislik={860} opak={1} />
      <Baslik t={t} bas={tAd} metin="PROT-AGE" x={X} y={165} boyut={40} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={4} />
      <BaslikBlok t={t} bas={tUzman} satirlar={b.satirlar} x={X} y={265} boyut={100} hiza="orta" />
      <Etiket t={t} bas={tArast} capa={[470, 440]} konum={[560, 140]} metin="BUILT FROM RESEARCH" renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tYasa} ad="carpi" x={1300} y={545} boyut={72} zemin={RENK.mercan} />
      <Not t={t} bas={tYasa + 0.1} metin="NOT A LAW OF NATURE" x={1350} y={505} boyut={38} agirlik={800} genislik={500} />
      <Baslik t={t} bas={tSoru} metin="OPEN QUESTIONS" x={X} y={665} boyut={34} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={4} />
      <Liste t={t} x={1300} y={715} aralik={64} boyut={30} isaret="nokta" genislik={560} ogeler={[
        { bas: tTur, metin: "PROTEIN TYPE", renk: RENK.altin },
        { bas: tZaman, metin: "TIMING", renk: RENK.altin },
        { bas: tSup, metin: "SUPPLEMENTS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S21;
