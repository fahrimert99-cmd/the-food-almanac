// Sahne 61 — kapanış kartı
import React from "react";
import { BolumKarti, Hap, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSub = K(0, "subscribe");
  const [sc, al] = pop(t, tSub, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/58", kirp: [180, 250, 1180, 1000] },
        { gorsel: "tam/59", kirp: [450, 250, 1450, 1000] },
        { gorsel: "tam/60", kirp: [230, 230, 1230, 980] },
      ]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, fontFamily: INTER }}>
          <Hap metin="SUBSCRIBE" renk={RENK.mercan} boyut={40} />
        </div>
      )}
    </>
  );
};

export default S61;
