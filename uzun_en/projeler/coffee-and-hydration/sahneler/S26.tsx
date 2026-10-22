// Sahne 26 — bağlam: tek litre, tek seferde, aç erkekler; kahve daha kötü değil.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const ipucu = [
    { bas: K(1, "liter"), metin: "1 LITER", x: 560 },
    { bas: K(1, "drunk"), metin: "DRUNK ONCE", x: 960 },
    { bas: K(1, "fasted"), metin: "FASTED MEN", x: 1360 },
  ];
  const tHayir = K(3, "worse");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [180, 60, 1560])}>
        <Etiket t={t} bas={K(2, "coffee")} capa={[520, 560]} konum={[450, 330]} metin="COFFEE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "water")} capa={[1180, 480]} konum={[1500, 330]} metin="WATER" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={0.85} bitis={4.9} metin="IN CONTEXT" x={960} y={110} boyut={110} hiza="orta" renk={RENK.lacivert} />
      {ipucu.map((o) => {
        const [sc, al] = pop(t, o.bas, 0.5);
        return (
          <div key={o.metin} style={{ position: "absolute", left: o.x, top: 270, transform: `translate(-50%, -50%) scale(${sc})`,
            opacity: al * sol(t, 4.9) }}>
            <Hap metin={o.metin} renk={RENK.altin} boyut={34} />
          </div>
        );
      })}
      <Baslik t={t} bas={tHayir - 0.9} metin="NO WORSE" x={960} y={140} boyut={130} hiza="orta" renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tHayir} ad="onay" x={1280} y={140} boyut={90} />
    </>
  );
};

export default S26;
