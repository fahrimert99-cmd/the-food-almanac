// Sahne 39 — 30 g: kas proteini yapımında ~%50 artış; üç kat protein ek fayda yok.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUc = K(1, "Three") - 0.2;
  const [sc, al] = pop(t, K(2, "big dinner"), 0.5);
  const [sc2, al2] = pop(t, K(2, "light breakfast"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "Three")} bitis={1e9} capa={[790, 560]} konum={[1130, 640]} metin="3× THE PROTEIN" renk={RENK.mercan} />
      </Kamera>
      {/* 1. vuruş: 30 gram → +%50 */}
      <BaslikBlok t={t} bas={K(0, "Thirty")} bitis={tUc} satirlar={["30 GRAMS"]} x={1860} y={250} boyut={120} hiza="sag" />
      <Not t={t} bas={K(0, "muscle")} bitis={tUc} metin="muscle protein building, in young and older adults" x={1860} y={340} hiza="sag" genislik={560} />
      <VurguRozet t={t} bas={K(0, "50")} bitis={tUc} vurgu="+50%" not="both age groups" x={1560} y={470} genislik={380} />
      {/* 2. vuruş: üç kat = ek fayda yok */}
      <BaslikBlok t={t} bas={K(1, "nothing") - 0.1} satirlar={["NOTHING", "MORE"]} x={1860} y={250} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      {/* 3. vuruş: büyük akşam yemeği ≠ hafif kahvaltı */}
      <div style={{ position: "absolute", left: 1000, top: 760, display: "flex", gap: 22, alignItems: "center" }}>
        <div style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "0 50%" }}>
          <Hap metin="BIG DINNER" renk={RENK.altin} boyut={34} />
        </div>
        <div style={{ transform: `scale(${sc2})`, opacity: al2, transformOrigin: "0 50%" }}>
          <Hap metin="LIGHT BREAKFAST" renk={RENK.yesil} boyut={34} />
        </div>
      </div>
      <Not t={t} bas={K(2, "not")} metin="may not fully make up for it" x={1000} y={850} boyut={34} />
    </>
  );
};

export default S39;
