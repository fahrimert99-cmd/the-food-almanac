// Sahne 11 — "live and active cultures": canlı mikroplar içeren ürün.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik?.satirlar ?? ["LIVE AND", "ACTIVE CULTURES"];
  const tBas = K(0, "live");
  const tNot = K(1, "not");
  const [sc, al] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 70, 1760])}>
        <Etiket t={t} bas={K(0, "yogurt")} bitis={tBas + 1.5} capa={[500, 440]} konum={[930, 600]} metin="YOGURT TUB" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "living")} capa={[1070, 170]} konum={[1500, 210]} metin="LIVING MICROBES" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tBas} metin={b[0]} x={1860} y={420} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tBas + 0.2} metin={b[1]} x={1860} y={540} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", right: 70, top: 700, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="NOT JUST FERMENTED" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S11;
