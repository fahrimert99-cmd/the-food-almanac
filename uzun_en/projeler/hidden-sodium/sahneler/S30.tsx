// Sahne 30 — FDA pratik kuralı: yeşil bayrak = düşük (%5 DV), kırmızı bayrak = yüksek (%20 DV).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(1, "Five percent"), tLow = K(1, "low."), tTw = K(2, "Twenty percent"), tHigh = K(2, "high.");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tFive} capa={[667, 300]} konum={[900, 250]} metin="LOW" renk={RENK.yesil} />
        <Etiket t={t} bas={tTw} capa={[1280, 330]} konum={[1690, 400]} metin="HIGH" renk={RENK.mercan} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      <Baslik t={t} bas={tFive} metin="5% = LOW" x={1860} y={650} boyut={110} renk={RENK.yesil} hiza="sag" />
      <Baslik t={t} bas={tTw} metin="20% = HIGH" x={1860} y={790} boyut={110} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={K(1, "daily value")} metin="% DAILY VALUE, PER SERVING" x={1860} y={560} boyut={34} renk={RENK.gri} hiza="sag" font="inter" agirlik={800} aralik={5} />
    </>
  );
};
export default S30;
