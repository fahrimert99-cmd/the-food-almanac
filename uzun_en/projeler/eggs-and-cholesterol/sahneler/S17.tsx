// Sahne 17 — terazi: yumurtalar ve diğer kefe; "küçük ama gerçek etki" başlığı.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOpp = K(0, "opposite");
  const tBlood = K(1, "Blood cholesterol");
  const tEat = K(1, "what you eat");
  const tSmall = K(1, "smaller");
  const [sc, al] = pop(t, tSmall, 0.55);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <BaslikBlok t={t} bas={Math.min(tOpp, 0.5)} satirlar={s.meta.baslik!.satirlar} x={140} y={190} boyut={104}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tBlood} metin="Blood cholesterol responds to what you eat" x={146} y={385} boyut={34} genislik={760} />
      <Etiket t={t} bas={tEat} capa={[540, 585]} konum={[290, 490]} metin="WHAT YOU EAT" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1280, top: 420, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="SMALLER EFFECT" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S17;
