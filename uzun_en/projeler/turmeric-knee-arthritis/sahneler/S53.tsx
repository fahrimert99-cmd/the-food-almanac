// Sahne 53 — Özet: kısa denemeler, küçük fayda
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "four-week"), tAyni = K(0, "same range");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1760])}>
        {/* sol alttaki silik imza kâğıt yamayla örtülür */}
        <div style={{ position: "absolute", left: 10, top: 990, width: 200, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "turmeric")} bitis={4.2} capa={[880, 400]} konum={[1130, 250]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "short trials")} bitis={tDort - 0.2} metin="SHORT TRIALS" x={110} y={150} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "a little")} bitis={7.7} vurgu="A LITTLE MORE" not="than placebo" x={1400} y={130} genislik={560} boyut={72} />
      <BaslikBlok t={t} bas={tDort} satirlar={["FOUR-WEEK", "TRIAL"]} x={110} y={150} boyut={90} renkler={[RENK.lacivert, RENK.lacivert]} />
      <Baslik t={t} bas={tAyni} metin="SAME RANGE AS" x={116} y={342} boyut={34} renk={RENK.gri} font="inter" agirlik={700} aralik={3} />
      <Baslik t={t} bas={tAyni + 0.12} metin="IBUPROFEN" x={110} y={400} boyut={90} renk={RENK.koyuYesil} />
    </>
  );
};

export default S53;
