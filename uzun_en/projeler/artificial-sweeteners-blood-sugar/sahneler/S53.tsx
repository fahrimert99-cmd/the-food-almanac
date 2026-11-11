// Sahne 53 — Nokta 3: kendini test et (Suez çalışması, glukometre).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(1, "test"), tSuez = K(2, "Suez"), tMeter = K(3, "glucose"), tBefore = K(3, "before"), tAgain = K(3, "again"), tShow = K(3, "show");
  const [sp, ap] = pop(t, tSuez, 0.5);
  const aS = ap * sol(t, tMeter + 0.9);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [90, 70, 1720])}>
        <Etiket t={t} bas={tMeter} capa={[450, 440]} konum={[330, 140]} metin="GLUCOSE METER" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0} metin="POINT 3" x={1860} y={170} boyut={34} renk={RENK.altin} hiza="sag" font="inter" agirlik={800} aralik={6} />
      <BaslikBlok t={t} bas={tTest} satirlar={["TEST", "YOURSELF"]} x={1860} y={260} boyut={100} hiza="sag" />
      {aS > 0 && (
        <div style={{ position: "absolute", left: 1860, top: 500, transform: `translateX(-100%) scale(${sp})`, transformOrigin: "100% 50%", opacity: aS }}>
          <Hap metin="SUEZ TRIAL: PERSONAL RESPONSES" renk={RENK.altin} boyut={28} />
        </div>
      )}
      <Liste t={t} x={1200} y={600} aralik={98} boyut={34} isaret="sayi" genislik={680} ogeler={[
        { bas: tBefore - 0.1, metin: "CHECK BEFORE A DIET DRINK" },
        { bas: tAgain - 0.1, metin: "CHECK AGAIN LATER" },
        { bas: tShow - 0.1, metin: "SHOW YOUR CARE TEAM", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};
export default S53;
