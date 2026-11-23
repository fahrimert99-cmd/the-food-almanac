// Sahne 40 — Dirty Dozen: EWG listesi, sağda başlık, meyvelere etiketler.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEwg = K(0, "Environmental Working Group"), tBas = K(0, "Dirty Dozen"), tListe = K(0, "list of produce");
  const tSpin = K(1, "Spinach"), tStr = K(1, "strawberries"), tTop = K(1, "topped");
  const [sc, al] = pop(t, tEwg, 0.5);
  const [sc2, al2] = pop(t, tTop, 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 90, 1800])}>
        <Etiket t={t} bas={tSpin} capa={[870, 370]} konum={[1180, 330]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={tStr} capa={[170, 690]} konum={[330, 925]} metin="STRAWBERRIES" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle: kurum + başlık + açıklama */}
      <div style={{ position: "absolute", left: 1240, top: 130, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol(t, 8.3) }}>
        <Hap metin="ENVIRONMENTAL WORKING GROUP" renk={RENK.altin} boyut={26} />
      </div>
      <Baslik t={t} bas={tBas - 0.1} bitis={8.3} metin="THE DIRTY" x={1620} y={330} boyut={112} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tBas + 0.15} bitis={8.3} metin="DOZEN" x={1620} y={448} boyut={112} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tListe} bitis={8.3} x={1620} y={560} hiza="orta" genislik={480} boyut={30}
        metin="A LIST OF PRODUCE MOST LIKELY TO CARRY PESTICIDE RESIDUE" agirlik={800} />
      <div style={{ position: "absolute", left: 1620, top: 520, transform: `translate(-50%, -50%) scale(${sc2})`, opacity: al2 }}>
        <Hap metin="RECENTLY TOPPED" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S40;
