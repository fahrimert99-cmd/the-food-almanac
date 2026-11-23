// S45 — eczacıya sorun
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])}>
        <Etiket t={t} bas={K(1, "pharmacists")} bitis={K(2, "If") } capa={[400, 470]} konum={[430, 680]} metin="PHARMACIST" renk={RENK.yesil} />
      </Kamera>
      <Not t={t} bas={K(0, "single")} bitis={K(1, "But")} metin="ONE CASE CANNOT PROVE CAUSE" x={1860} y={170} hiza="sag" boyut={38} agirlik={800} />
      <Not t={t} bas={K(1, "herbal")} bitis={K(2, "If")} metin="THEY ASK ABOUT HERBAL TEAS" x={1860} y={170} hiza="sag" boyut={38} agirlik={800} />
      <Not t={t} bas={K(2, "warfarin")} metin="TAKING WARFARIN?" x={1860} y={170} hiza="sag" boyut={38} agirlik={800} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "ask")} satirlar={["ASK YOUR", "PHARMACIST"]} x={1860} y={330} boyut={110} hiza="sag" />
      <Not t={t} bas={K(2, "doctor")} metin="OR YOUR DOCTOR" x={1860} y={570} hiza="sag" boyut={40} agirlik={800} />
      <Not t={t} bas={K(2, "nightly")} metin="BEFORE A NIGHTLY HABIT" x={1860} y={640} hiza="sag" boyut={34} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};
export default S45;
