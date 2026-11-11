// Sahne 58 — potasyumlu tuz ikamesi: inme -%14, çalışmaya katılanlar.
import React from "react";
import { Etiket, Hap, Kamera, Liste, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSub = K(0, "salt substitute"), tPot = K(0, "potassium"), t14 = K(0, "14 percent");
  const tChina = K(0, "rural China"), tHist = K(0, "stroke history"), tAge = K(0, "age 60");
  const aC = eout(ilerle(t, tChina, 0.5)) * sol(t, 6.9, 0.4);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={tSub} capa={[813, 720]} konum={[800, 500]} metin="SALT SUBSTITUTE" renk={RENK.altin} />
        <Etiket t={t} bas={tPot} capa={[1380, 790]} konum={[1130, 560]} metin="POTASSIUM" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={t14} vurgu="–14%" not="STROKES" x={1440} y={130} renk={RENK.yesil} genislik={360} bitis={6.9} />
      <div style={{ position: "absolute", left: 1440, top: 345, transform: `translate(-50%, ${(1 - aC) * 10}px)`, opacity: aC }}>
        <Hap metin="ONE LARGE TRIAL · RURAL CHINA" renk={RENK.lacivert} boyut={24} />
      </div>
      <Not t={t} bas={tHist - 0.3} metin="WHO WAS STUDIED" x={1040} y={120} boyut={26} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={1040} y={180} aralik={84} boyut={34} isaret="nokta" genislik={760} ogeler={[
        { bas: tHist, metin: "STROKE HISTORY", renk: RENK.altin },
        { bas: tAge, metin: "AGE 60+ · HIGH BLOOD PRESSURE", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S58;
