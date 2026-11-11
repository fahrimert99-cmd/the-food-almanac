// Sahne 4 — kanal tanıtımı, ardından "kas ve yaşlanma" başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "start");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(1, "muscle")} capa={[660, 520]} konum={[900, 620]} metin="MUSCLE FIBERS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "This")} bitis={tBas - 0.1} metin="THIS IS" x={1260} y={250} boyut={44} hiza="orta" font="inter" renk={RENK.altin} aralik={8} />
      <Baslik t={t} bas={K(0, "Food") - 0.2} bitis={tBas - 0.1} metin={MARKA.ad.toUpperCase()} x={1260} y={360} boyut={104} hiza="orta" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tBas} metin="LET'S START" x={1260} y={250} boyut={44} hiza="orta" font="inter" renk={RENK.altin} aralik={8} />
      <Baslik t={t} bas={K(1, "happens")} metin="MUSCLE" x={1260} y={360} boyut={130} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "muscle")} metin="AND AGING" x={1260} y={500} boyut={130} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
