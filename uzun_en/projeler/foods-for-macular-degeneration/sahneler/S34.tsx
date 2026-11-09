// Sahne 34 — NEI: kimlere yardımcı olabilir, karar göz doktorunda
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEnd = K(1, "An") - 0.1;
  const tPro = K(0, "protect");
  const pill = (bas: number, metin: string, x: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: 200, opacity: al * sol(t, tEnd), transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin={metin} renk={renk} boyut={28} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1800])}>
        <Etiket t={t} bas={K(1, "doctor")} capa={[430, 650]} konum={[900, 870]} metin="EYE DOCTOR" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "dilated")} capa={[500, 380]} konum={[880, 310]} metin="DILATED EXAM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "supplements")} bitis={tPro - 0.1} metin="SUPPLEMENTS MAY HELP" x={80} y={110} boyut={80} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tPro} bitis={tEnd} metin="PROTECT THE OTHER EYE" x={80} y={110} boyut={80} renk={RENK.koyuYesil} />
      {pill(K(0, "intermediate"), "INTERMEDIATE DISEASE", 80, RENK.altin)}
      {pill(K(0, "advanced"), "ADVANCED IN ONE EYE", 640, RENK.mercan)}
      <Baslik t={t} bas={K(1, "decides")} metin="EYE DOCTOR DECIDES" x={80} y={110} boyut={80} renk={RENK.lacivert} />
    </>
  );
};

export default S34;
