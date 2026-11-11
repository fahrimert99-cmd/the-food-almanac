// Sahne 35 — yoğurt tek başına: büyük uzun denemeler az; Stanford'da tek bir fermente gıdaydı.
import React from "react";
import { Etiket, Ikon, Kamera, Liste, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const c2 = c[2].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 20, 1800], [100, 60, 1640])}>
        {/* alttaki anlamsız yazı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 420, top: 985, width: 1080, height: 95,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "yogurt")} bitis={c[1].bas} capa={[900, 560]} konum={[1500, 700]} metin="PLAIN YOGURT" renk={RENK.koyuYesil} />
      </Kamera>
      <Ikon t={t} bas={K(0, "alone")} bitis={c[1].bas} ad="soru" x={540} y={250} zemin={RENK.altin} boyut={110} />
      <Liste t={t} x={90} y={130} isaret="nokta" boyut={36} aralik={84} genislik={620} ogeler={[
        { bas: K(1, "Large"), metin: "LARGE TRIALS", bitis: c2 },
        { bas: K(1, "long"), metin: "LONG TRIALS", renk: RENK.altin, bitis: c2 },
        { bas: K(1, "hard"), metin: "HARD TO FIND", renk: RENK.mercan, bitis: c2 },
      ]} />
      <Not t={t} bas={K(2, "Stanford")} metin="STANFORD TRIAL" x={1650} y={105} hiza="orta" boyut={30} renk={RENK.altin} agirlik={800} />
      <VurguRozet t={t} bas={K(2, "one of")} vurgu="1 OF SEVERAL" not="fermented foods" x={1650} y={155} genislik={430} boyut={62} />
      <Not t={t} bas={K(2, "own")} metin="ITS OWN EFFECT CAN'T BE SEPARATED OUT" x={1860} y={330} hiza="sag" genislik={470} boyut={34} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S35;
