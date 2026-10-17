// Sahne 18 — 2010 denemesi: 50 kişi, tedavi altında ama kontrolsüz; yarısı yaşlandırılmış sarımsak özütü, yarısı plasebo.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAged = K(1, "aged"), tFour = K(1, "four"), tPlas = K(2, "matching"), tWeeks = K(2, "12");
  const CIPLER = [
    { ifade: K(0, "50"), metin: "50 PEOPLE", renk: RENK.altin },
    { ifade: K(0, "treated"), metin: "ALREADY TREATED", renk: RENK.koyuYesil },
    { ifade: K(0, "still"), metin: "STILL UNCONTROLLED", renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tAged + 0.2} bitis={tFour + 1.2} capa={[790, 545]} konum={[760, 875]} metin="AGED GARLIC EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={tPlas} capa={[950, 540]} konum={[1010, 880]} metin="MATCHING PLACEBO" renk={RENK.gri} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2010")} metin="2010 TRIAL" x={90} y={185} boyut={86} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 90, top: 250, display: "flex", gap: 14 }}>
        {CIPLER.map((c) => {
          const [sc, al] = pop(t, c.ifade, 0.5);
          return (
            <div key={c.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
              <Hap metin={c.metin} renk={c.renk} boyut={26} />
            </div>
          );
        })}
      </div>
      <VurguRozet t={t} bas={tFour + 0.1} bitis={tPlas - 0.1} vurgu="4" not="capsules a day" x={1730} y={140} genislik={300} boyut={84} renk={RENK.altin} />
      <VurguRozet t={t} bas={tWeeks - 0.1} vurgu="12" not="weeks" x={1730} y={140} genislik={300} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S18;
