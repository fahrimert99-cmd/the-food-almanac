// S04 — büyüteç ve taş: kanal tanıtımı, böbrek taşı nedir
import React from "react";
import { Baslik, Etiket, Hap, Kamera, MARKA, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMarka = K(0, "food"), tBaslik = K(1, "kidney"), tTas = K(1, "stone");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const [sc, al] = pop(t, tMarka, 0.55);
  const a = al * sol(t, K(1, "let's") + 0.1);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={w}>
        <Etiket t={t} bas={tTas} capa={[980, 790]} konum={[1740, 440]} metin="THE STONE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {a > 0 && (
        <div style={{ position: "absolute", left: 1650, top: 200, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
          <Hap metin={MARKA.ad.toUpperCase()} renk={RENK.lacivert} boyut={34} />
        </div>
      )}
      <Baslik t={t} bas={tBaslik} metin="KIDNEY STONE" x={1860} y={200} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S04;
