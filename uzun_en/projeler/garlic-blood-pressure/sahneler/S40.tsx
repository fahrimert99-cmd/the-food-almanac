// Sahne 40 — bölüm kartı: güvenlik ve kan sulandırıcılar.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "thinners"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/41", kirp: [330, 160, 1530, 1060] },
        { gorsel: "tam/42", kirp: [90, 260, 890, 860] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="BLOOD THINNERS" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};
export default S40;
