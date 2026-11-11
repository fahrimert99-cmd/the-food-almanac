// Sahne 4 — almanak sayfalarına yazılan marka ve "the numbers".
import React from "react";
import { Baslik, Kamera, MARKA, RENK, SP, ikiSatir, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const marka = ikiSatir(MARKA.filigran, 8);
  return (
    <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [160, 60, 1600], [220, 110, 1480])}>
      {marka.map((m, i) => (
        <Baslik key={i} t={t} bas={K(0, "Food") - 0.2 + i * 0.2} metin={m} x={640} y={400 + i * 120} boyut={110}
          renk={i === marka.length - 1 ? RENK.koyuYesil : RENK.lacivert} hiza="orta" />
      ))}
      <Baslik t={t} bas={K(1, "start")} metin="THE" x={1160} y={560} boyut={70} renk={RENK.altin} hiza="orta" />
      <Baslik t={t} bas={K(1, "numbers") - 0.15} metin="NUMBERS" x={1160} y={640} boyut={96} renk={RENK.lacivert} hiza="orta" />
    </Kamera>
  );
};

export default S04;
