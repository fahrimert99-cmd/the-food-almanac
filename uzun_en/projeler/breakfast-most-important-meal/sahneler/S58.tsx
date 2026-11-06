// Sahne 58 — slogan, pazarlama; randomize denemeler kiloya yardım etmedi
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tTrial = K(0, "trial"), tBr = K(1, "breakfast"), tNot = K(1, "not"), tW = K(1, "weight");
  const [sc, al] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1740])}>
        <Etiket t={t} bas={tBr} capa={[480, 640]} konum={[560, 320]} metin="BREAKFAST" renk={RENK.altin} />
        <Etiket t={t} bas={tW} capa={[1400, 420]} konum={[1330, 150]} metin="WEIGHT" renk={RENK.koyuYesil} />
        {al > 0 && (
          <div style={{ position: "absolute", left: 1480, top: 840, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
            <Hap metin="NO HELP" renk={RENK.mercan} boyut={40} />
          </div>
        )}
      </Kamera>
      <Baslik t={t} bas={0.25} bitis={c[1].bas + 0.2} metin="MORE MARKETING" x={80} y={150} boyut={104} renk={RENK.mercan} />
      <Baslik t={t} bas={tTrial - 0.15} bitis={c[1].bas + 0.2} metin="THAN A TRIAL" x={80} y={262} boyut={104} renk={RENK.lacivert} />
    </>
  );
};

export default S58;
