import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 13 — az susama, az içme; sağda başlık ve liste
const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760])}>
        <Etiket t={t} bas={K(0, "drank less")} capa={[290, 420]} konum={[640, 140]} metin="DRANK LESS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "less thirsty,")} metin="LESS THIRST" x={1130} y={190} boyut={112} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "drank less")} metin="LESS DRINKING" x={1130} y={315} boyut={112} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "Their blood")} metin="BLOOD AND URINE:" x={1130} y={470} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={1130} y={540} aralik={92} boyut={36} isaret="carpi" genislik={600} ogeler={[
        { bas: K(1, "blood"), metin: "BLOOD", renk: RENK.mercan },
        { bas: K(1, "urine"), metin: "URINE", renk: RENK.mercan },
      ]} />
      <Not t={t} bas={K(1, "pre-deprivation")} metin="NOT BACK TO PRE-DEPRIVATION LEVELS" x={1130} y={750} boyut={32} genislik={700} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};
export default S13;
