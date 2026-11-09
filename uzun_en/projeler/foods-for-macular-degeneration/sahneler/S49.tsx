// Sahne 49 — Bütün tablo: solda görsel, sağda NEI alışkanlık listesi.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "whole picture"), tNei = K(2, "National Eye Institute");
  const [sc, al] = pop(t, tNei, 0.5);
  const oge = (ifade: string, metin: string) => ({ bas: K(2, ifade), metin });
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760])}>
        <Etiket t={t} bas={K(2, "fish")} bitis={K(2, "regular") } capa={[560, 660]} konum={[760, 850]} metin="FISH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "regular")} bitis={K(2, "healthy") } capa={[1090, 520]} konum={[1000, 260]} metin="ACTIVITY" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "healthy")} capa={[700, 190]} konum={[940, 110]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas - 0.1} satirlar={["THE WHOLE", "PICTURE"]} x={1360} y={190} boyut={96} />
      <div style={{ position: "absolute", left: 1360, top: 400, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "8px 22px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5 }}>NATIONAL EYE INSTITUTE</div>
      <Liste t={t} x={1360} y={500} aralik={74} boyut={30} isaret="onay" genislik={520} ogeler={[
        oge("leafy greens", "LEAFY GREENS"), oge("fish,", "FISH"), oge("not smoking", "NOT SMOKING"),
        oge("regular activity", "REGULAR ACTIVITY"), oge("healthy blood", "HEALTHY BLOOD PRESSURE"), oge("and cholesterol", "HEALTHY CHOLESTEROL"),
      ]} />
    </>
  );
};

export default S49;
