// Sahne 48 — kanıtın söylemedikleri: ilaç değildir, ilacın yerini tutmaz
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// ilaç kutusundaki sahte harfleri örten kâğıt yamalar
const YAMALAR: [number, number, number, number][] = [[473, 547, 140, 80], [765, 680, 260, 90], [813, 440, 140, 76]];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tIlac = K(0, "medicine,"), tKasik = K(0, "spoonful");
  const tYer = K(1, "replacement"), tIlaclar = K(1, "medicines"), tDok = K(1, "doctor");
  const tKol = K(1, "cholesterol"), tTan = K(1, "blood pressure");
  const bit0 = c[1].bas - 0.1;
  const chip = (bas: number, metin: string, x: number, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return al > 0 ? (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={30} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        {YAMALAR.map(([x, y, w, h], i) => (
          <div key={i} style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        ))}
      </Kamera>
      <Etiket t={t} bas={K(0, "olive oil")} bitis={bit0} capa={[1110, 560]} konum={[1330, 200]} metin="OLIVE OIL" renk={RENK.yesil} />
      <Baslik t={t} bas={tIlac} bitis={bit0} metin="NOT A MEDICINE" x={140} y={110} boyut={96} renk={RENK.mercan} />
      <Baslik t={t} bas={tKasik} bitis={bit0} metin="A SPOONFUL ≠ A POOR DIET FIX" x={144} y={195} boyut={36} renk={RENK.lacivert} font="inter" agirlik={800} />
      <Baslik t={t} bas={tYer} metin="NOT A REPLACEMENT" x={140} y={110} boyut={96} renk={RENK.mercan} />
      <Etiket t={t} bas={tIlaclar} capa={[507, 640]} konum={[470, 900]} metin="PRESCRIBED MEDICINES" renk={RENK.lacivert} />
      <Etiket t={t} bas={tDok} capa={[1713, 607]} konum={[1560, 190]} metin="YOUR DOCTOR" renk={RENK.altin} />
      {chip(tKol, "CHOLESTEROL", 1560, 290, RENK.mercan)}
      {chip(tTan, "BLOOD PRESSURE", 1560, 380, RENK.mercan)}
    </>
  );
};

export default S48;
