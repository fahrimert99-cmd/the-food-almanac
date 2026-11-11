// Sahne 49 — bölüm kartı: Five simple habits.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "five"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/50", kirp: [560, 200, 1460, 875] },
        { gorsel: "tam/53", kirp: [380, 180, 1480, 1005] },
        { gorsel: "tam/54", kirp: [100, 190, 920, 805] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 850, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="5 HABITS" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S49;
