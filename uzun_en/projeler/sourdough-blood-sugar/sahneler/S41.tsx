// Sahne 41 — Sourdough düşük karbonhidratlı değil: sandviç, sol üstte başlık, nişasta ve büyük sandviç etiketleri.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "raise"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 70, 1700])} />
      <Baslik t={t} bas={K(0, "isn't")} metin="NOT A" x={70} y={150} boyut={96} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "low-carb")} metin="LOW-CARB" x={70} y={250} boyut={96} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "starch")} capa={[820, 440]} konum={[190, 440]} metin="STARCH" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "big")} capa={[1540, 520]} konum={[1700, 240]} metin="BIG SANDWICH" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="CAN RAISE BLOOD SUGAR" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S41;
