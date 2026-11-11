// Sahne 16 — 3.8% ve 4.4%: iki çubuk, sonra "bir tuzak daha"
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuz = K(0, "3.8"), tDort = K(0, "4.4"), tBes = K(0, "five"), tFark = K(1, "modest"), tTuzak = K(2, "catch");
  // grafik örtüsü: 3.8 söylenmeden gelir, "catch" ile çekilir
  const aOrtu = eout(ilerle(t, tYuz - 0.55, 0.5)) * (1 - eout(ilerle(t, tTuzak - 0.1, 0.6)));
  const aGrafik = sol(t, tTuzak - 0.1, 0.4);
  const [sf, af] = pop(t, tFark, 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [90, 90, 1700])}>
        <Etiket t={t} bas={K(0, "plain")} bitis={tYuz - 0.4} capa={[1490, 770]} konum={[1640, 560]} metin="OLIVE OIL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "plain")} bitis={tYuz - 0.4} metin="IN PLAIN NUMBERS" x={110} y={140} boyut={84} renk={RENK.koyuYesil} />
      <Ortu a={aOrtu} />
      {aOrtu > 0.01 && (
        <div style={{ opacity: aGrafik }}>
          <Baslik t={t} bas={tBes - 0.35} metin="OVER ABOUT FIVE YEARS" x={960} y={170} boyut={72} renk={RENK.lacivert} hiza="orta" />
          <CubukGrafik t={t} bas={tYuz} x={560} y={330} w={800} h={400} maks={5.2}
            cubuklar={[
              { etiket: "OLIVE OIL", deger: 3.8, metin: "3.8%", renk: RENK.yesil, bas: tYuz - 0.2 },
              { etiket: "COMPARISON", deger: 4.4, metin: "4.4%", renk: RENK.mercan, bas: tDort - 0.2 },
            ]} />
          <div style={{ position: "absolute", left: 960, top: 830, transform: `translate(-50%, 0) scale(${sf})`, opacity: af }}>
            <Hap metin="A REAL BUT MODEST DIFFERENCE" renk={RENK.altin} boyut={32} />
          </div>
        </div>
      )}
      <Baslik t={t} bas={tTuzak - 0.15} metin="ONE MORE CATCH" x={110} y={140} boyut={92} renk={RENK.mercan} />
    </>
  );
};

export default S16;
