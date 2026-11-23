// Sahne 32 — bölüm kartı; alt başlığın altında "büyük partiler" hapı.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "big"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/37", kirp: [180, 140, 1100, 830] },
        { gorsel: "tam/33", kirp: [400, 100, 1480, 910] },
        { gorsel: "tam/35", kirp: [300, 200, 1220, 890] },
      ]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <Hap metin="BIG BATCHES" renk={RENK.mercan} boyut={34} />
        </div>
      )}
    </>
  );
};

export default S32;
