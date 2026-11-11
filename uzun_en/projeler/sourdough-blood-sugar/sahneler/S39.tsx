// Sahne 39 — özet: tam buğday ekşi mayalı ekmek, mütevazı etki, düşük kesinlik.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [0, 60, 1920], [50, 90, 1800]);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kp}>
        <Etiket t={t} bas={K(0, "whole wheat")} capa={[620, 470]} konum={[640, 240]} metin="WHOLE WHEAT SOURDOUGH" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "lower")} capa={[1470, 600]} konum={[1500, 400]} metin="A LITTLE LOWER" renk={RENK.yesil} />
      </Kamera>
      <Pil t={t} bas={K(1, "modest")} x={1500} y={150} metin="POOLED EFFECT: MODEST" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "certainty")} x={1500} y={240} metin="CERTAINTY: LOW" renk={RENK.mercan} />
    </>
  );
};
export default S39;
