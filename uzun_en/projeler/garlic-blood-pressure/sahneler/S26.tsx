// Sahne 26 — allisin: ezilmiş sarımsak, molekül çizimi ve allil sülfür ailesi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 100, 1660])}>
        {/* molekül çiziminin solundaki anlamsız harf izi örtülür */}
        <div style={{ position: "absolute", left: 400, top: 170, width: 110, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={0.1} bitis={K(0, "family")} capa={[640, 520]} konum={[900, 700]} metin="CRUSHED GARLIC" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "allyl")} capa={[540, 160]} konum={[960, 230]} metin="ALLYL SULFUR FAMILY" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(0, "allicin,")} kaynak={[640, 440]} hedef={[640, 240]} adet={14} aralik={0.12} kavis={-60} omur={1.8} tohum="s26" />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "allicin,")} satirlar={["ALLICIN"]} x={1860} y={330} boyut={120} hiza="sag" />
      <Liste t={t} x={1280} y={470} aralik={120} boyut={34} isaret="nokta" genislik={580} ogeler={[
        { bas: K(0, "family"), metin: "ALLYL SULFUR COMPOUNDS", renk: RENK.altin },
        { bas: K(0, "researchers"), metin: "RESEARCHERS THINK THEY DRIVE MUCH OF THE ACTIVITY", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S26;
