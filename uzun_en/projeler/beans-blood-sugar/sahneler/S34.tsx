// Sahne 34 — 60 yaş üstü: genel eğilim; yavaş dene, nasıl hissettiğini izle.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Hap, Kamera, Not, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHic = K(0, "None"), tYetiskin = K(0, "adults over");
  const tEgilim = K(1, "general"), tSoz = K(1, "not a promise");
  const tYas = K(2, "over 60"), tMakul = K(2, "sensible"), tYavas = K(2, "gradually"), tIzle = K(2, "watch");
  const aO = 0.93 * eout(ilerle(t, K(2, "If") - 0.1, 0.7));
  const [s1, a1] = pop(t, tEgilim, 0.5), [s2, a2] = pop(t, tSoz, 0.5);
  const sk = sol(t, K(2, "If") - 0.1);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tYetiskin} bitis={tEgilim - 0.2} capa={[1090, 578]} konum={[1000, 700]} metin="ADULTS OVER 60" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tHic} bitis={tYetiskin + 0.6} metin="NONE SINGLED OUT" x={960} y={54} boyut={58} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 620, top: 54, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 * sk }}>
        <Hap metin="GENERAL TREND" renk={RENK.yesil} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1250, top: 54, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 * sk }}>
        <Hap metin="NOT A PROMISE" renk={RENK.mercan} boyut={32} />
      </div>
      <Ortu a={aO} />
      <Baslik t={t} bas={tYas} metin="OVER 60" x={960} y={300} boyut={150} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tMakul} metin="THE SENSIBLE MOVE" x={960} y={410} boyut={40} hiza="orta" agirlik={800} renk={RENK.gri} />
      <AdimAkisi t={t} x={960} y={600} boyut={36} numarali
        adimlar={[{ bas: tYavas, metin: "TRY IT GRADUALLY", renk: RENK.yesil }, { bas: tIzle, metin: "WATCH HOW YOU FEEL", renk: RENK.altin }]} />
    </>
  );
};

export default S34;
