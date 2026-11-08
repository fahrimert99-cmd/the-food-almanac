// Sahne 56 — Güvenlik notu: insülin/ilaç, diyet içecek düşük şekeri düzeltmez.
import React from "react";
import { Baslik, BaslikBlok, Hap, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSafe = K(0, "safety"), tDont = K(1, "don't"), tWont = K(2, "won't"), tBecause = K(2, "because"), tAsk = K(3, "Ask");
  const [sc, al] = pop(t, tAsk, 0.55);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 30, 1700], [20, 80, 1560])} />
      <Baslik t={t} bas={0} metin="ONE NOTE" x={1860} y={140} boyut={34} renk={RENK.altin} hiza="sag" font="inter" agirlik={800} aralik={6} />
      <BaslikBlok t={t} bas={tSafe} satirlar={["SAFETY", "FIRST"]} x={1860} y={250} boyut={116} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1180} y={510} aralik={100} boyut={32} isaret="carpi" genislik={700} ogeler={[
        { bas: tDont - 0.1, metin: "DON'T CHANGE YOUR TREATMENT", renk: RENK.mercan },
        { bas: tWont - 0.1, metin: "DIET DRINK WON'T TREAT A LOW", renk: RENK.mercan },
      ]} />
      <Not t={t} bas={tBecause} metin="IT HAS NO SUGAR IN IT" x={1270} y={718} boyut={32} agirlik={800} renk={RENK.altin} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1860, top: 850, transform: `translate(-100%, -50%) scale(${sc})`,
          transformOrigin: "100% 50%", opacity: al }}>
          <Hap metin="ASK YOUR DIABETES TEAM" renk={RENK.koyuYesil} boyut={30} />
        </div>
      )}
      <Ikon t={t} bas={tAsk + 0.3} ad="soru" x={1260} y={850} zemin={RENK.koyuYesil} boyut={80} />
    </>
  );
};
export default S56;
