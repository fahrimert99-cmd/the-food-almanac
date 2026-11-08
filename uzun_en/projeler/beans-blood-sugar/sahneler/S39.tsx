// Sahne 39 — bölüm kartı: gaz ile başlıyoruz; alt başlığın altında tek küçük senkron hap.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "gas."), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/40", kirp: [180, 100, 1380, 1000] },
        { gorsel: "tam/41", kirp: [0, 230, 1000, 980] },
        { gorsel: "tam/42", kirp: [100, 180, 1300, 1080] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 820, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="FIRST: THE GAS" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S39;
