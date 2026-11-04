// Sahne 46 — ders: yavaş soğutma yok; yemek ya soğuk ya sıcak.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "cold"), 0.5);
  const [s2, a2] = pop(t, K(1, "hot"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [-20, 30, 1840])} sinirla={false}>
        <Etiket t={t} bas={K(1, "cooked")} capa={[480, 530]} konum={[860, 270]} metin="COOKED RICE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lesson")} metin="THE LESSON" x={1100} y={150} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} isaret="carpi" x={1100} y={210} boyut={36} genislik={760}
        ogeler={[{ bas: K(1, "cool"), metin: "SLOW COOLING AT ROOM TEMP", renk: RENK.mercan }]} />
      <Baslik t={t} bas={K(1, "keep")} metin="COLD OR HOT," x={1100} y={460} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "keep") + 0.2} metin="NOT WARM" x={1100} y={580} boyut={110} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1100, top: 710, display: "flex", gap: 24 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}><Hap metin="COLD" renk={RENK.lacivert} boyut={36} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}><Hap metin="HOT" renk={RENK.mercan} boyut={36} /></div>
      </div>
    </>
  );
};

export default S46;
