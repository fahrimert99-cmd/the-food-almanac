// Sahne 16 — Stanford: 36 yetişkin, 2 diyet, 10 hafta; fermente gıda vs. yüksek lifli bitkisel gıda.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

// duvardaki bozuk yazılı posterler boş panolarla örtülür (görsel koordinatı)
const POSTER = [[392, 78, 226, 300], [682, 88, 312, 300], [992, 88, 222, 316]];

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tFer = K(1, "fermented foods");
  const tFib = K(2, "high fiber");
  const tLeg = K(2, "legumes");
  const tGr = K(2, "whole grains");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {POSTER.map(([x, y, w, h], i) => (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: w, height: h, background: "#E6DFCB",
            border: `4px solid ${RENK.murekkep}`, borderRadius: 4, boxShadow: "inset 0 0 0 10px #EFE9DA",
            backgroundImage: "repeating-linear-gradient(to bottom, transparent 0 34px, rgba(48,40,34,0.12) 34px 36px)" }} />
        ))}
        <Etiket t={t} bas={tFer} bitis={tFib - 0.2} capa={[407, 530]} konum={[330, 700]} metin="FERMENTED FOODS" renk={RENK.altin} />
        <Etiket t={t} bas={tLeg} capa={[680, 535]} konum={[640, 770]} metin="LEGUMES" renk={RENK.yesil} />
        <Etiket t={t} bas={tGr} capa={[790, 505]} konum={[930, 650]} metin="WHOLE GRAINS" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={b.satirlar} x={1860} y={290} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "ten weeks")} vurgu={b.vurgu ?? "10 WEEKS"} x={1560} y={560} genislik={400} boyut={92} />
    </>
  );
};

export default S16;
