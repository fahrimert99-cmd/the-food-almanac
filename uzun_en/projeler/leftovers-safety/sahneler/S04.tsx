// Sahne 4 — kanal tanıtımı + mercek altında tencere.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [100, 40, 1720], [150, 70, 1620]);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={w}>
        {/* alt kenardaki sahte yazıyı örter */}
        <div style={{ position: "absolute", left: 150, top: 940, width: 1500, height: 140,
          background: `linear-gradient(to bottom, ${kagit(0)} 0%, ${kagit(1)} 40%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(1, "inside")} capa={[1140, 260]} konum={[1560, 190]} metin="WHAT'S INSIDE?" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "leftover")} capa={[1250, 600]} konum={[1540, 700]} metin="LEFTOVER FOOD" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "food") - 0.4} bitis={K(1, "start")} metin="THIS IS" x={74} y={110} boyut={28} renk={RENK.altin} font="inter" aralik={7} />
      <Baslik t={t} bas={K(0, "food") - 0.3} bitis={K(1, "start")} metin={MARKA.ad.toUpperCase()} x={70} y={190} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
