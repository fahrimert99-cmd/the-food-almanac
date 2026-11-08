// Sahne 55 — Nokta 5: tatlandırıcı bir takas, sağlık gıdası değil; WHO.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSwap = K(1, "swap,"), tNot = K(1, "not"), tWho = K(2, "WHO"), tFat = K(2, "body"), tNot2 = K(2, "not");
  const tA = K(1, "sweeteners"), tCut = tNot2 - 0.1;
  const [sc, al] = pop(t, tFat, 0.55);
  const strip = eout(ilerle(t, 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 70, 1740])}>
        <Etiket t={t} bas={tFat + 0.4} capa={[880, 880]} konum={[1450, 905]} metin="NO LONG-TERM BODY FAT BENEFIT" renk={RENK.mercan} boyut={24} />
      </Kamera>
      {/* üst şerit: başlıklar */}
      <div style={{ position: "absolute", left: 0, top: 0, right: 0, height: 200, opacity: strip,
        background: "linear-gradient(to bottom, rgba(246,243,236,0.97) 0%, rgba(246,243,236,0.9) 70%, rgba(246,243,236,0) 100%)" }} />
      <Baslik t={t} bas={0} metin="POINT 5" x={90} y={52} boyut={30} renk={RENK.altin} font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={tSwap - 0.35} bitis={tCut} metin="A SWAP," x={90} y={130} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} bitis={tCut} metin="NOT A HEALTH FOOD" x={440} y={130} boyut={88} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNot2} metin="NOT A WEIGHT LOSS PLAN" x={90} y={130} boyut={88} renk={RENK.mercan} />
      <KaynakEtiketi t={t} bas={tWho} metin="WHO GUIDELINE 2023" y={215} />
      <Ikon t={t} bas={tNot2 + 0.9} ad="carpi" x={1010} y={130} zemin={RENK.mercan} boyut={84} />
    </>
  );
};
export default S55;
