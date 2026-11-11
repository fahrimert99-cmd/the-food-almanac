// Sahne 34 — magnezyum: kaslar ve sinirler için bir mineral; "mantıklı görünüyor".
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMag = K(0, "Magnesium"), tMin = K(0, "mineral"), tMus = K(0, "muscles"), tNer = K(0, "nerves");
  const tLog = K(0, "logical"), tCalm = K(0, "calm");
  const son = 4.3; // ilk grup burada çekilir
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1730]);
  const [sM, aM] = pop(t, tMus, 0.5);
  const [sN, aN] = pop(t, tNer, 0.5);
  const [sC, aC] = pop(t, tCalm, 0.5);
  const g = sol(t, son);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={p} />
      <Baslik t={t} bas={tMag} bitis={son} metin="MAGNESIUM" x={90} y={130} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={tMin} bitis={son} metin="a mineral used every day by" x={96} y={225} boyut={36} />
      <div style={{ position: "absolute", left: 96, top: 300, display: "flex", gap: 20, opacity: g }}>
        <div style={{ transform: `scale(${sM})`, transformOrigin: "0% 50%", opacity: aM }}><Hap metin="MUSCLES" renk={RENK.mercan} boyut={32} /></div>
        <div style={{ transform: `scale(${sN})`, transformOrigin: "0% 50%", opacity: aN }}><Hap metin="NERVES" renk={RENK.altin} boyut={32} /></div>
      </div>
      <Etiket t={t} bas={tMag + 0.5} capa={[700, 760]} konum={[620, 420]} metin="MAGNESIUM CAPSULES" renk={RENK.altin} boyut={26} />
      <Baslik t={t} bas={tLog} metin="SEEMS LOGICAL…" x={90} y={150} boyut={110} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 96, top: 245, transform: `scale(${sC})`, transformOrigin: "0% 50%", opacity: aC }}>
        <Hap metin="MORE = CALMER CRAMP?" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S34;
