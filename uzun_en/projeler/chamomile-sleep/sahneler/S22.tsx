// Sahne 22 — karşılaştırma grubu sıcak içecek almadı: bitki mi, ritüel mi?
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGrup = K(1, "comparison"), tYok = K(1, "no warm drink");
  const tHerb = K(2, "herb"), tRitual = K(2, "ritual"), tTut = K(3, "hold that");
  const son = tHerb - 0.15;
  const [s1, a1] = pop(t, tGrup, 0.5);
  const [s2, a2] = pop(t, tYok, 0.5);
  const aS = sol(t, son);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tHerb} capa={[900, 420]} konum={[1080, 120]} metin="THE HERB?" renk={RENK.yesil} />
        <Etiket t={t} bas={tRitual} capa={[1100, 790]} konum={[1450, 900]} metin="THE WARM-CUP RITUAL?" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1330, top: 130, opacity: a1 * aS, transform: `scale(${s1})`, transformOrigin: "0 50%" }}>
        <Hap metin="COMPARISON GROUP" renk={RENK.gri} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1330, top: 220, opacity: a2 * aS, transform: `scale(${s2})`, transformOrigin: "0 50%" }}>
        <Hap metin="NO WARM DRINK" renk={RENK.mercan} boyut={28} />
      </div>
      <Baslik t={t} bas={tTut} metin="HOLD THAT THOUGHT" x={110} y={90} boyut={70} renk={RENK.lacivert} />
      <Ikon t={t} bas={tTut + 0.2} ad="soru" x={1450} y={200} boyut={80} renk="#fff" zemin={RENK.altin} />
    </>
  );
};

export default S22;
