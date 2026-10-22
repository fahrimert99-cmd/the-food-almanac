// Sahne 32 — çelik kesim / yassı / hazır? Health Canada'nın yassı yulaf tanımı.
import React from "react";
import { AdimAkisi, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSteel = K(1, "Steel-cut"), tRolled = K(1, "rolled"), tInst = K(1, "instant");
  const tHC = K(2, "Health Canada"), tGroat = K(2, "whole oat groats");
  const tSteam = K(2, "steamed"), tCut = K(2, "cut,"), tRoll = K(2, "rolled and"), tFlake = K(2, "flaked");
  const tMin = K(2, "minimum");
  const bEt = tHC - 0.1;
  const [sI, aI] = pop(t, tInst, 0.5);
  const aIs = t < tHC ? aI : 0;
  const [sH, aH] = pop(t, tHC, 0.5);
  const [sM, aM] = pop(t, tMin, 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 10, 1900], [60, 60, 1800])}>
        <Etiket t={t} bas={tSteel} bitis={bEt} capa={[960, 500]} konum={[900, 220]} metin="STEEL-CUT" renk={RENK.altin} />
        <Etiket t={t} bas={tRolled} bitis={bEt + 0.6} capa={[1500, 470]} konum={[1500, 220]} metin="ROLLED" renk={RENK.yesil} />
        <Etiket t={t} bas={tGroat} capa={[470, 520]} konum={[330, 290]} metin="WHOLE OAT GROATS" renk={RENK.lacivert} />
      </Kamera>
      {aIs > 0 && (
        <div style={{ position: "absolute", left: 380, top: 100, transform: `scale(${sI})`, opacity: aIs }}>
          <Hap metin="INSTANT?" renk={RENK.mercan} boyut={32} />
        </div>
      )}
      {t >= tHC && (
        <div style={{ position: "absolute", left: 60, top: 56, transform: `scale(${sH})`, transformOrigin: "0% 50%", opacity: aH }}>
          <Hap metin="HEALTH CANADA" renk={RENK.lacivert} boyut={30} />
        </div>
      )}
      {t >= tSteam && (
        <AdimAkisi t={t} x={1260} y={118} boyut={24} numarali={false} adimlar={[
          { bas: tSteam, metin: "STEAMED", renk: RENK.lacivert },
          { bas: tCut, metin: "CUT", renk: RENK.lacivert },
          { bas: tRoll, metin: "ROLLED", renk: RENK.lacivert },
          { bas: tFlake, metin: "FLAKED", renk: RENK.lacivert },
        ]} />
      )}
      {t >= tMin && (
        <div style={{ position: "absolute", left: 960, top: 850, transform: `translate(-50%, 0) scale(${sM})`, opacity: aM }}>
          <Hap metin="MINIMUM BETA-GLUCAN SET" renk={RENK.yesil} boyut={32} />
        </div>
      )}
    </>
  );
};

export default S32;
