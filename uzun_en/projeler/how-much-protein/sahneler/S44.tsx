// Sahne 44 — doktora danış: böbrek hastalığı ya da emin değilsen önce uzmana sor.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(0, "ask") - 0.1;
  const pill = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, tAsk);
    return a > 0 ? (
      <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, opacity: a, transformOrigin: "100% 50%" }}>
        <Hap metin={metin} renk={renk} boyut={38} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "ask")} bitis={K(0, "for your own") + 3} capa={[330, 480]} konum={[560, 200]} metin="YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      {pill(K(0, "kidney"), "KIDNEY DISEASE?", RENK.mercan, 250)}
      {pill(K(0, "not sure"), "NOT SURE HOW YOUR KIDNEYS WORK?", RENK.altin, 360)}
      <BaslikBlok t={t} bas={tAsk + 0.1} satirlar={["ASK YOUR", "DOCTOR FIRST"]} x={1860} y={200} boyut={100} hiza="sag" />
      <Liste t={t} isaret="onay" x={1300} y={460} boyut={32} aralik={84} genislik={560} ogeler={[
        { bas: K(0, "doctor,"), metin: "DOCTOR" },
        { bas: K(0, "kidney specialist"), metin: "KIDNEY SPECIALIST" },
        { bas: K(0, "registered"), metin: "REGISTERED DIETITIAN" },
      ]} />
      <Not t={t} bas={K(0, "for your own")} metin="for your own protein number" x={1860} y={750} hiza="sag" boyut={36} agirlik={800} genislik={700} />
      <Not t={t} bas={K(0, "before")} metin="before you change how much you eat" x={1860} y={800} hiza="sag" boyut={32} genislik={700} renk={RENK.koyuYesil} />
    </>
  );
};

export default S44;
