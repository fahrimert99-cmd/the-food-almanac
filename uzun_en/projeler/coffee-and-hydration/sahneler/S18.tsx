// Sahne 18 — sonuç: el, kahve ve su bardağı; sağda panel + "COFFEE ≈ WATER".
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 40, 1500], [40, 70, 1400])}>
        <Etiket t={t} bas={K(0, "coffee")} capa={[540, 470]} konum={[250, 250]} metin="COFFEE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "water")} capa={[890, 420]} konum={[1000, 180]} metin="WATER" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={900} />
      <Baslik t={t} bas={K(0, "in moderation")} metin="IN MODERATION" x={1860} y={270} boyut={34} renk={RENK.altin} hiza="sag" font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={K(0, "coffee hydrates")} metin="COFFEE" x={1860} y={370} boyut={130} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={K(0, "about as well")} metin="≈ WATER" x={1860} y={500} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(0, "habitual")} metin={s.meta.baslik?.not ?? "for habitual drinkers"} x={1860} y={600} hiza="sag" genislik={560} boyut={34} />
    </>
  );
};

export default S18;
