// Sahne 3 — videonun üç sözü: etki büyüklüğü, hangi sarımsak, kan sulandırıcı uyarısı.
import React from "react";
import { Baslik, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 30, 1860], [90, 70, 1700])} />
      <Baslik t={t} bas={0.2} metin="BY THE END" x={64} y={78} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={60} y={130} aralik={84} boyut={32} genislik={560} ogeler={[
        { bas: K(0, "how big"), metin: "HOW BIG THE EFFECT", renk: RENK.koyuYesil },
        { bas: K(0, "which garlic"), metin: "WHICH GARLIC WAS TESTED", renk: RENK.altin },
        { bas: K(0, "one safety point"), metin: "BLOOD THINNER SAFETY", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S03;
