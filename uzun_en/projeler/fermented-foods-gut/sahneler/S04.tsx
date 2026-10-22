// Sahne 4 — videonun dört sorusu: solda liste, kaseye "şeker" etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "sugar")} bitis={K(0, "older")} capa={[760, 740]} konum={[300, 860]} metin="SPOT THE SUGAR" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "you'll")} metin="BY THE END, YOU'LL KNOW" x={70} y={150} boyut={28} font="inter" aralik={4} renk={RENK.altin} />
      <Liste t={t} x={70} y={215} aralik={110} boyut={32} genislik={620} ogeler={[
        { bas: K(0, "live and active"), metin: "LIVE & ACTIVE CULTURES", renk: RENK.yesil },
        { bas: K(0, "kefir"), metin: "KEFIR VS YOGURT", renk: RENK.altin },
        { bas: K(0, "spot the sugar"), metin: "SUGAR IN YOGURT", renk: RENK.mercan },
        { bas: K(0, "older adults"), metin: "OLDER ADULTS: UNKNOWNS", renk: RENK.lacivert },
      ]} />
    </>
  );
};

export default S04;
