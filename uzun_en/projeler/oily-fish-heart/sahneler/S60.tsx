// Sahne 60 — haftada iki porsiyon: fırında ya da konserve, kızartma değil.
import React from "react";
import { Baslik, Hap, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaked = K(0, "baked"), tCan = K(0, "canned,"), tFr = K(0, "fried."), tSmall = K(1, "small"), tStart = K(1, "start");
  const b = s.meta.baslik!;
  const pH = eout(ilerle(t, tStart, 0.5));
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 120, 1500], [0, 150, 1420])} />
      <Baslik t={t} bas={0.15} metin={b.satirlar[0]} x={1680} y={290} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Liste t={t} x={1480} y={400} aralik={92} boyut={40} genislik={380} isaret="onay" ogeler={[
        { bas: tBaked, metin: "BAKED" },
        { bas: tCan, metin: "CANNED" },
        { bas: tFr, metin: "FRIED", renk: RENK.mercan },
      ]} />
      <Not t={t} bas={tSmall} metin="A SMALL HABIT" x={1480} y={720} boyut={40} agirlik={800} />
      {pH > 0 && (
        <div style={{ position: "absolute", left: 1480, top: 800, opacity: pH, transform: `translateY(${(1 - pH) * 12}px)` }}>
          <Hap metin="START THIS WEEK" renk={RENK.altin} boyut={28} />
        </div>
      )}
    </>
  );
};

export default S60;
