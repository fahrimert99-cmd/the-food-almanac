// Sahne 44 — organik fiyat primi: USDA ERS, 2004–2010, %7 ile %60.
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta.baslik;
  const tPrice = K(0, "price"), tUsda = K(1, "USDA"), tGro = K(1, "grocery purchases"), tYears = K(1, "2004"), tFresh = K(1, "fresh fruits");
  const tRange = K(1, "ranged"), t7 = K(1, "7 percent"), t60 = K(1, "60 percent"), tPack = K(1, "packaged");
  const [sc, al] = pop(t, tPrice, 0.5);
  const [sy, ay] = pop(t, tYears, 0.5);
  const [sf, af] = pop(t, tFresh, 0.5);
  const aPill = sol(t, tRange - 0.3);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1830])}>
        <Etiket t={t} bas={tGro} bitis={tRange - 0.3} capa={[810, 810]} konum={[760, 920]} metin="GROCERY PURCHASES" renk={RENK.altin} />
        <Etiket t={t} bas={tPack} capa={[560, 330]} konum={[740, 62]} metin="PACKAGED SALAD MIX" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tUsda} />
      <div style={{ position: "absolute", left: 1000, top: 190, opacity: al * aPill, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="THE PRICE" renk={RENK.altin} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 290, opacity: ay * aPill, transform: `scale(${sy})`, transformOrigin: "0% 50%" }}>
        <Hap metin="2004 → 2010" renk={RENK.lacivert} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 390, opacity: af * aPill, transform: `scale(${sf})`, transformOrigin: "0% 50%" }}>
        <Hap metin="FRESH FRUITS & VEGETABLES" renk={RENK.yesil} boyut={30} />
      </div>
      <Baslik t={t} bas={tRange} metin={m!.satirlar[0]} x={1000} y={170} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={tRange + 0.3} metin="ORGANIC PRICE PREMIUM" x={1004} y={250} boyut={28} agirlik={800} renk={RENK.gri} />
      <CubukGrafik t={t} bas={t7 - 0.2} x={1000} y={380} w={440} h={400} maks={70}
        cubuklar={[
          { etiket: "SPINACH", deger: 7, metin: "7%", renk: RENK.yesil, bas: t7 - 0.2 },
          { etiket: "SALAD MIX", deger: 60, metin: "60%", renk: RENK.mercan, bas: t60 - 0.2 },
        ]} />
    </>
  );
};

export default S44;
