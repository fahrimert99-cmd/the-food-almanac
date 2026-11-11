// Sahne 20 — Ho 2016: LDL −0,19 mmol/L (≈ −7 mg/dL); ilk analizden biraz küçük ama aynı yönde.
import React from "react";
import { BaslikBlok, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, Baslik, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const t019 = K(0, "0.19"), tAbout = K(0, "about");
  const tSmall = K(1, "slightly"), tTeam = K(2, "team"), tSet = K(2, "larger"), tDir = K(2, "same");
  const [s1, a1] = pop(t, tTeam, 0.5);
  const [s2, a2] = pop(t, tSet, 0.5);
  const bit = tTeam - 0.6;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={t019} vurgu="−0.19" not="mmol/L · LDL" x={1620} y={130} genislik={360} boyut={90} />
      <BaslikBlok t={t} bas={tAbout} satirlar={b.satirlar} x={1860} y={430} boyut={96} hiza="sag" />
      <Not t={t} bas={tSmall} bitis={bit} metin="slightly smaller than the first analysis" x={1860} y={650} hiza="sag" genislik={480} boyut={32} />
      <div style={{ position: "absolute", right: 60, top: 640, transform: `scale(${s1})`, transformOrigin: "100% 50%", opacity: a1 }}>
        <Hap metin="WHITEHEAD 2014 ↓" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 725, transform: `scale(${s2})`, transformOrigin: "100% 50%", opacity: a2 }}>
        <Hap metin="HO 2016 ↓" renk={RENK.yesil} boyut={30} />
      </div>
      <Baslik t={t} bas={tDir} metin="SAME DIRECTION" x={1860} y={850} boyut={64} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S20;
