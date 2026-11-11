// Sahne 9 — alışkanlık etkisi: sol panelde üç vuruş, sağda fincan.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(0, "without"), tB = K(1, "regular"), tC = K(2, "ordinary");
  const bA = tB - 0.15, bB = tC - 0.15;
  const pP = eout(ilerle(t, 0, 0.6));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 30, 1700], [130, 70, 1540])}>
        <Etiket t={t} bas={K(2, "coffee")} bitis={K(2, "no") - 0.1} capa={[1040, 450]} konum={[1180, 215]} metin="COFFEE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pP} taraf="sol" genislik={880} opak={1} />
      {/* 1. cümle: kafeinsiz günler */}
      <BaslikBlok t={t} bas={tA} bitis={bA} satirlar={["NO CAFFEINE", "FOR DAYS", "OR WEEKS"]} x={90} y={300} boyut={110}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "people")} bitis={bA} metin="THE PEOPLE IN THOSE TRIALS" x={96} y={660} boyut={32} agirlik={800} renk={RENK.gri} />
      {/* 2. cümle: düzenli içenler */}
      <BaslikBlok t={t} bas={tB} bitis={bB} satirlar={["REGULAR", "DRINKERS"]} x={90} y={300} boyut={118} />
      <Not t={t} bas={K(1, "much")} bitis={bB} metin="MUCH SMALLER EFFECTS" x={96} y={600} boyut={44} agirlik={800} renk={RENK.mercan} />
      {/* 3. cümle: sıradan servisler */}
      <Not t={t} bas={tC} metin="ORDINARY SERVINGS OF" x={96} y={215} boyut={34} agirlik={800} renk={RENK.gri} />
      <Liste t={t} x={96} y={290} aralik={100} boyut={44} isaret="nokta" ogeler={[
        { bas: K(2, "tea"), metin: "TEA", renk: RENK.altin },
        { bas: K(2, "coffee"), metin: "COFFEE", renk: RENK.altin },
        { bas: K(2, "soft"), metin: "SOFT DRINKS", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={K(2, "no")} metin="NO DIURETIC" x={90} y={680} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "no") + 0.18} metin="ACTION APPEARED" x={90} y={780} boyut={84} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(3, "why")} ad="soru" x={1480} y={330} zemin={RENK.lacivert} />
    </>
  );
};

export default S09;
