// Sahne 59 — özet: sindirim. Kase, psyllium kavanozu ve bardak; alt şeritte karşılaştırma hapları.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDig = K(0, "digestion"), tPr = K(0, "prunes"), tPs = K(0, "psyllium"), tBeat = K(0, "beat"), tAn = K(0, "another");
  const tBut = K(1, "But"), t40 = K(1, "around 40"), t60 = K(1, "over 60");
  const [s1, a1] = pop(t, tBeat, 0.5);
  const a1b = a1 * sol(t, tAn - 0.1);
  const [s2, a2] = pop(t, tAn, 0.5);
  const [s3, a3] = pop(t, t60, 0.5);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={tPr} bitis={tBut - 0.1} capa={[640, 480]} konum={[560, 250]} metin="PRUNES" renk={RENK.yesil} />
        <Etiket t={t} bas={tPs} bitis={tBut - 0.1} capa={[1147, 500]} konum={[1150, 100]} metin="PSYLLIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tDig} bitis={tBut - 0.1} metin="DIGESTION" x={140} y={150} boyut={100} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1b }}>
        <Hap metin="PRUNES BEAT PSYLLIUM · ONE SMALL TRIAL" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="SIMILAR IN ANOTHER TRIAL" renk={RENK.altin} boyut={30} />
      </div>
      <VurguRozet t={t} bas={t40} vurgu="≈ 40" not="average age of adults in those trials" x={420} y={110} genislik={460} boyut={96} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1010, top: 215, transform: `translate(-50%, -50%) scale(${s3})`, opacity: a3 }}>
        <Hap metin="NOT PEOPLE OVER 60" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S59;
