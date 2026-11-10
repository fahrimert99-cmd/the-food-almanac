// Sahne 28 — ipuçları, kanıt değil (hücre/fare deneyleri → insan çalışmaları).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])} />
      <Baslik t={t} bas={K(2, "clues")} metin="CLUES," x={90} y={190} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "not") } metin="NOT PROOF" x={90} y={335} boyut={130} renk={RENK.mercan} />
      <div style={{ position: "absolute", inset: 0 }}>
        <Etiket t={t} bas={K(1, "Cells")} bitis={K(2, "These")} capa={[380, 640]} konum={[300, 470]} metin="CELLS IN A DISH" renk={RENK.altin} />
      </div>
      <Pill t={t} bas={K(1, "rats")} bitis={K(2, "These")} metin="RATS · HIGH-FAT DIETS" renk={RENK.altin} y={330} />
      <Pill t={t} bas={K(3, "human")} metin="HUMAN TRIALS" renk={RENK.yesil} y={540} />
      <Pill t={t} bas={K(3, "moves")} metin="LDL: A LITTLE" renk={RENK.yesil} y={640} />
    </>
  );
};

export default S28;
