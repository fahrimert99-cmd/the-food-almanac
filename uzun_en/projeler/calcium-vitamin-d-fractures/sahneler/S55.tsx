// Sahne 55 — 5. adım: düşmeler için daha fazla hareket.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "Five"), 0.45);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(2, "Walking,")} capa={[420, 660]} konum={[330, 250]} metin="WALKING" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "strength")} capa={[650, 760]} konum={[880, 850]} metin="STRENGTH" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1130, top: 60, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="STEP 5" renk={RENK.altin} boyut={28} />
      </div>
      <BaslikBlok t={t} bas={K(1, "move")} satirlar={["MOVE", "MORE"]} x={1130} y={260} boyut={150} />
      <Liste t={t} x={1130} y={520} aralik={84} boyut={38} isaret="onay" genislik={700} ogeler={[
        { bas: K(2, "Walking,"), metin: "WALKING" },
        { bas: K(2, "balance"), metin: "BALANCE" },
        { bas: K(2, "strength"), metin: "STRENGTH EXERCISE" },
      ]} />
      <Not t={t} bas={K(2, "task")} metin="recommended by the task force for people at higher risk of falling" x={1132} y={790} boyut={30} genislik={680} agirlik={800} />
    </>
  );
};

export default S55;
