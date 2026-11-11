// Sahne 30 — Soğutulmuş patates net bir düşüş değil; soğuk yendi, direnç nişastası ölçülmedi.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; sol?: boolean }> = ({
  t, bas, x, y, metin, renk, boyut = 28, sol = false,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transformOrigin: sol ? "0% 50%" : "50% 50%",
      transform: `translate(${sol ? "0" : "-50%"}, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 60, 1780])}>
        <Etiket t={t} bas={K(0, "chilled") - 0.1} bitis={5.0} capa={[790, 400]} konum={[1000, 260]} metin="CHILLED POTATOES" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "not")} metin="NOT A CLEAR DROP" x={100} y={150} boyut={100} renk={RENK.mercan} />
      <Pil t={t} bas={K(1, "cold")} sol x={100} y={290} metin="EATEN COLD" renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "reheated,")} sol x={100} y={365} metin="NOT REHEATED" renk={RENK.lacivert} />
      <Pil t={t} bas={K(1, "resistant")} x={960} y={905} metin="RESISTANT STARCH: NEVER TESTED" renk={RENK.altin} boyut={30} />
    </>
  );
};

export default S30;
