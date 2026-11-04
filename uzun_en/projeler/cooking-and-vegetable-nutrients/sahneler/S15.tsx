// Sahne 15 — sebzeler tahtada: sırayla adlandırılır, sonra "tek en iyi yöntem yok".
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t0 = K(0, "one vegetable");
  const bitis = K(0, "which") - 0.1;
  const etiketler: { metin: string; capa: [number, number]; konum: [number, number]; renk: string }[] = [
    { metin: "BROCCOLI", capa: [240, 520], konum: [200, 215], renk: RENK.yesil },
    { metin: "GREEN BEANS", capa: [500, 520], konum: [500, 140], renk: RENK.yesil },
    { metin: "CARROTS", capa: [880, 520], konum: [900, 140], renk: RENK.altin },
    { metin: "SPINACH", capa: [1350, 480], konum: [1330, 215], renk: RENK.yesil },
    { metin: "CAULIFLOWER", capa: [1620, 520], konum: [1630, 140], renk: RENK.lacivert },
  ];
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [60, 70, 1760])}>
        {etiketler.map((e, i) => (
          <Etiket key={e.metin} t={t} bas={t0 + i * 0.25} bitis={bitis} capa={e.capa} konum={e.konum} metin={e.metin} renk={e.renk} boyut={26} />
        ))}
      </Kamera>
      <Baslik t={t} bas={K(0, "varied a lot") - 0.1} bitis={t0 - 0.1} metin="VARIES A LOT" x={960} y={150} boyut={90} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "no single") - 0.1} metin="NO SINGLE BEST METHOD" x={960} y={112} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S15;
