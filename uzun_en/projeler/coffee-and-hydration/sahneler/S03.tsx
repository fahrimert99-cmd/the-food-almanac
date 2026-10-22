// Sahne 3 — videonun vaadi: üç soru, görsel küçülüp sağa kayar.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" sinirla={false}
        pencere={kameraYolu(t, s.sure, [-700, -190, 2600], [-640, -170, 2480])}>
        <Etiket t={t} bas={K(0, "your coffee")} bitis={K(0, "why regular") } capa={[1130, 650]} konum={[1450, 150]} metin="YOUR COFFEE" renk={RENK.mercan} boyut={40} />
      </Kamera>
      <Baslik t={t} bas={0.3} metin="IN THIS VIDEO" x={70} y={250} boyut={30} renk={RENK.altin} font="inter" aralik={8} />
      <Liste t={t} x={70} y={330} aralik={170} boyut={34} genislik={600} ogeler={[
        { bas: K(0, "whether your coffee"), metin: "DOES COFFEE COUNT TOWARD DAILY FLUIDS?", renk: RENK.mercan },
        { bas: K(0, "why regular"), metin: "WHY REGULAR DRINKERS DIFFER", renk: RENK.altin },
        { bas: K(0, "how much caffeine"), metin: "HOW MUCH CAFFEINE IS SAFE", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S03;
