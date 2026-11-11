// Sahne 2 — ne kadar, ne zaman, kimler dikkat etmeli.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, kameraYolu, kelimeZamani } from "../kutuphane";
import type { SP } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGrup = K(1, "one group");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={K(0, "much")} bitis={tGrup - 0.1} capa={[1400, 420]} konum={[1520, 920]} metin="HOW MUCH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "when")} bitis={tGrup - 0.1} capa={[1570, 760]} konum={[1250, 900]} metin="WHEN" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "how")} bitis={tGrup - 0.1} metin="HOW MUCH?" x={110} y={130} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "when")} bitis={tGrup - 0.1} metin="AND WHEN?" x={110} y={235} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tGrup} metin="ONE GROUP" x={110} y={130} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "careful")} metin="SHOULD BE CAREFUL" x={110} y={235} boyut={100} renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "careful")} ad="uyari" x={1000} y={185} boyut={92} zemin={RENK.mercan} />
    </>
  );
};

export default S02;
