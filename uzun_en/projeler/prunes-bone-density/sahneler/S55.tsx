// Sahne 55 — İpucu 4: yeni belirtiler → doktora git.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSee = K(0, "see your");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* görselin sağ kenarındaki sert kesiği kâğıtla örter */}
        <div style={{ position: "absolute", left: 1180, top: -100, width: 900, height: 1300,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 12%)` }} />
        <Etiket t={t} bas={K(0, "doctor")} capa={[940, 440]} konum={[860, 140]} metin="YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={["TIP 4", "NEW SYMPTOMS?"]} x={1860} y={215} boyut={80} hiza="sag" />
      <Liste t={t} x={1280} y={440} aralik={70} boyut={34} isaret="nokta" genislik={580} ogeler={[
        { bas: K(0, "new,"), metin: "NEW", renk: RENK.mercan },
        { bas: K(0, "lasts"), metin: "LASTS WEEKS", renk: RENK.mercan },
        { bas: K(0, "pain,"), metin: "PAIN", renk: RENK.mercan },
        { bas: K(0, "bleeding"), metin: "BLEEDING", renk: RENK.mercan },
        { bas: K(0, "weight"), metin: "WEIGHT LOSS", renk: RENK.mercan },
      ]} />
      <Ikon t={t} bas={tSee} ad="ok" x={1290} y={840} boyut={72} zemin={RENK.yesil} />
      <Baslik t={t} bas={tSee} metin="SEE YOUR DOCTOR" x={1350} y={840} boyut={62} renk={RENK.koyuYesil} />
    </>
  );
};

export default S55;
