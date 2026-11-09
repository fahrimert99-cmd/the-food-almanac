// Sahne 36 — yüksek tansiyon: tansiyon aleti + kadeh, sağda başlık ve madde listesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const yama = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
  background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(249,245,228,1) 0%, rgba(249,245,228,1) 62%, rgba(249,245,228,0) 100%)`,
});

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "high"), tAlet = K(0, "pressure,"), tNot = K(0, "even"), tKadeh = K(0, "drinks");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1800])}>
        {/* defter karalaması ve kalem ucundaki kusur kâğıtla örtülür */}
        <div style={yama(690, 866, 120, 46)} />
        <div style={yama(858, 950, 140, 96)} />
        <Etiket t={t} bas={tAlet} capa={[407, 780]} konum={[930, 600]} metin="BP GAUGE" renk={RENK.lacivert} boyut={26} />
        <Etiket t={t} bas={tKadeh} capa={[310, 500]} konum={[760, 410]} metin="1–2 DRINKS A DAY" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={["HIGH BLOOD", "PRESSURE"]} x={1020} y={230} boyut={104} />
      <Not t={t} bas={tNot} metin="even 1 to 2 drinks a day may worsen it" x={1020} y={440} boyut={38} genislik={800} />
      <Liste t={t} isaret="nokta" x={1020} y={640} aralik={80} boyut={32} genislik={840} ogeler={[
        { bas: K(1, "high"), metin: "HIGH BLOOD PRESSURE", renk: RENK.mercan },
        { bas: K(1, "atrial"), metin: "ATRIAL FIBRILLATION", renk: RENK.mercan },
        { bas: K(1, "cutting"), metin: "CUTTING BACK OR STOPPING MAY BE IMPORTANT", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S36;
