// Sahne 4 — büyüteç, ayakkabı ve tabak; sağ üstteki sahte harfler kâğıt yamayla örtülür, yamaya video konuları yazılır.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      {/* sol alttaki bozuk yazı pencere dışında kalır (alt <= 1000, sol >= 40) */}
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [50, 20, 1800], [100, 45, 1700])}>
        <div style={{ position: "absolute", left: 1270, top: 30, width: 700, height: 545,
          background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 88%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "blood")} bitis={c[1].bas - 0.2} capa={[870, 380]} konum={[870, 62]} metin="BLOOD SUGAR TOOL?" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "pleasant")} bitis={c[1].bas - 0.2} capa={[1340, 700]} konum={[1640, 520]} metin="PLEASANT HABIT?" renk={RENK.altin} />
      </Kamera>
      <Liste t={t} x={1370} y={150} aralik={96} boyut={34} genislik={540} ogeler={[
        { bas: K(1, "trials"), metin: "THE TRIALS", renk: RENK.lacivert },
        { bas: K(1, "muscles"), metin: "MUSCLES & GLUCOSE", renk: RENK.yesil },
        { bas: K(1, "soon"), metin: "WHEN TO START", renk: RENK.altin },
        { bas: K(1, "cannot"), metin: "WHAT IT CANNOT DO", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S04;
