// Sahne 46 — üçüncü durum: süren belirtiler; katı vejetaryen ve veganlar.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, kagit, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThree = K(0, "Three");
  const tNumb = K(1, "numb");
  const tHands = K(1, "hands");
  const tBal = K(1, "balance trouble");
  const tMem = K(1, "new memory");
  const tVeg = K(2, "vegetarians");
  const tAsk = K(2, "ask too");
  const [s1, a1] = pop(t, tVeg, 0.5);
  const [s2, a2] = pop(t, tAsk, 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1760])}>
        {/* görseldeki soluk dikey dikişi kapat */}
        <div style={{ position: "absolute", left: 890, top: 0, width: 140, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)}, ${kagit(0.85)} 50%, ${kagit(0)})` }} />
      </Kamera>
      <BaslikBlok t={t} bas={tThree} satirlar={["THREE:", "SYMPTOMS"]} x={1020} y={190} boyut={140} />
      <Liste t={t} x={1020} y={440} aralik={86} boyut={36} isaret="nokta" genislik={840} ogeler={[
        { bas: tNumb, metin: "NUMB OR TINGLY HANDS, FEET", renk: RENK.koyuYesil },
        { bas: tBal, metin: "BALANCE TROUBLE", renk: RENK.altin },
        { bas: tMem, metin: "NEW MEMORY PROBLEMS", renk: RENK.lacivert },
      ]} />
      <Etiket t={t} bas={tHands} capa={[690, 670]} konum={[780, 420]} metin="HANDS" renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1020, top: 760, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
          <Hap metin="STRICT VEGETARIANS, VEGANS" renk={RENK.yesil} boyut={34} />
        </div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
          <Hap metin="ASK TOO" renk={RENK.mercan} boyut={34} />
        </div>
      </div>
    </>
  );
};

export default S46;
