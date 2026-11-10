// Sahne 25 — bölüm kartı: Part 4, bağırsakta kalsiyum + oksalat
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "next meal"), 0.55);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/26", kirp: [100, 60, 1260, 930] },
        { gorsel: "tam/27", kirp: [380, 150, 1580, 1050] },
        { gorsel: "tam/28", kirp: [200, 0, 1640, 1080] },
      ]} />
      {/* altyazının altında tek küçük vuruş */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="AT YOUR NEXT MEAL" renk={RENK.altin} />
      </div>
    </>
  );
};
export default S25;
