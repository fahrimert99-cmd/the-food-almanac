// Sahne 24 — Etki gerçek ama mütevazı: 7–10 mg/dL, ~%8; "küçük adım, sıçrama değil".
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSeven = K(0, "seven"), tEight = K(1, "eight percent"), tStep = K(2, "small step"), tPiece = K(2, "one piece");
  const bit1 = tEight - 0.05;
  const hap = (bas: number) => {
    const a = eout(ilerle(t, bas, 0.4));
    return { opacity: a, transform: `translateX(${(1 - a) * 30}px)` };
  };
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800])}>
        <Etiket t={t} bas={K(2, "oats")} capa={[480, 330]} konum={[760, 130]} metin="OATS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tSeven - 0.1} satirlar={["MODEST,", "NOT MAGIC"]} x={1860} y={200} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={tSeven} vurgu="7–10" not="mg/dL LDL drop" x={1560} y={400} genislik={480} boyut={100}
        renk={RENK.koyuYesil} bitis={bit1} />
      <VurguRozet t={t} bas={tEight} vurgu="≈ 8%" not="early estimate · 3 g beta-glucan" x={1560} y={400} genislik={560}
        boyut={100} renk={RENK.altin} />
      <div style={{ position: "absolute", right: 60, top: 680, ...hap(tStep) }}>
        {t >= tStep && <Hap metin="A SMALL STEP, NOT A LEAP" renk={RENK.altin} boyut={30} />}
      </div>
      <div style={{ position: "absolute", right: 60, top: 770, ...hap(tPiece) }}>
        {t >= tPiece && <Hap metin="ONE PIECE OF A HEART-HEALTHY PATTERN" renk={RENK.yesil} boyut={26} />}
      </div>
    </>
  );
};

export default S24;
