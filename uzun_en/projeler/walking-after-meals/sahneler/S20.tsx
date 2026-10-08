// Sahne 20 — Dunstan 2012: iki dakikalık yürüyüşler, her 20 dakikada
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const yama = (x: number, y: number): React.CSSProperties => ({
  position: "absolute", left: x, top: y, width: 240, height: 90,
  background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(255,255,234) 0%, rgb(255,255,234) 60%, rgba(255,255,234,0) 100%)",
});

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHow = K(0, "how"), tShoe = K(1, "two minute"), tClock = K(1, "every"), t19 = K(1, "19"), tNo = K(1, "without"), tDrink = K(1, "high fat");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* zemin kenarındaki sahte yazılar kâğıt yamayla örtülür */}
        <div style={yama(50, 915)} />
        <div style={yama(1560, 915)} />
        <Etiket t={t} bas={tShoe} capa={[880, 800]} konum={[860, 690]} metin="2-MINUTE WALKS" renk={RENK.yesil} />
        <Etiket t={t} bas={tClock} capa={[1600, 780]} konum={[1480, 560]} metin="EVERY 20 MIN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <BaslikBlok t={t} bas={tHow - 0.1} bitis={2.4} satirlar={["HOW SHORT", "CAN A WALK BE?"]} x={960} y={190} boyut={90} hiza="orta" />
      <VurguRozet t={t} bas={t19 - 0.1} vurgu="19" not="OVERWEIGHT OR OBESE ADULTS" x={960} y={250} genislik={520} boyut={104} />
      <Not t={t} bas={tNo} metin="WITHOUT DIABETES" x={960} y={510} hiza="orta" boyut={40} agirlik={800} renk={RENK.koyuYesil} />
      <Not t={t} bas={tDrink} metin="HIGH-FAT, SUGARY DRINK" x={960} y={570} hiza="orta" boyut={40} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S20;
