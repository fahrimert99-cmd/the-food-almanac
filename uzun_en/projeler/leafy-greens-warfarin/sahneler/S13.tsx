// Sahne 13 — günlük hedef 90–120 µg; küçük kaşık ile dev ıspanak kasesi karşılaştırması.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAdult = K(1, "Adult"), t120 = K(1, "120"), t90 = K(1, "women"), tServ = K(2, "serving"), tDays = K(2, "several");
  const [sc, al] = pop(t, tDays, 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [40, 100, 1800])}>
        <Etiket t={t} bas={K(0, "daily")} bitis={tServ - 0.2} capa={[150, 780]} konum={[440, 920]} metin="DAILY TARGET" renk={RENK.altin} />
        <Etiket t={t} bas={tServ} capa={[760, 420]} konum={[1100, 820]} metin="ONE SERVING" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tAdult} satirlar={["90 TO 120", "MICROGRAMS"]} x={1860} y={170} boyut={96} hiza="sag" />
      <Not t={t} bas={tAdult + 0.5} metin="the daily adequate intake for adults" x={1860} y={370} hiza="sag" boyut={32} />
      <VurguRozet t={t} bas={t120} vurgu="120" not="men, per day" x={1290} y={470} genislik={330} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t90} vurgu="90" not="women, per day" x={1660} y={470} genislik={330} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1560, top: 820, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="SEVERAL DAYS' WORTH" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S13;
