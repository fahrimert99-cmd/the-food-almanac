// Sahne 45 — belirsiz olanlar: ne kadar, ne kadar süre, hangi sonuçlar.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const SATIRLAR = [
    { bas: K(1, "how much"), metin: "HOW MUCH?" },
    { bas: K(1, "how long"), metin: "HOW LONG?" },
    { bas: K(1, "heart"), metin: "HEART DISEASE?" },
    { bas: K(1, "infections"), metin: "INFECTIONS?" },
  ];
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(1, "one daily")} bitis={K(1, "how long") - 0.1} capa={[520, 700]} konum={[850, 880]} metin="ONE DAILY SERVING" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "uncertain")} satirlar={["STILL", "UNKNOWN"]} x={1860} y={250} boyut={130} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} />
      {SATIRLAR.map((r, i) => (
        <React.Fragment key={r.metin}>
          <Ikon t={t} bas={r.bas} ad="soru" x={1280} y={560 + i * 100} boyut={70} zemin={RENK.altin} />
          <Not t={t} bas={r.bas + 0.1} metin={r.metin} x={1340} y={560 + i * 100 - 29} boyut={44} agirlik={800} />
        </React.Fragment>
      ))}
    </>
  );
};

export default S45;
