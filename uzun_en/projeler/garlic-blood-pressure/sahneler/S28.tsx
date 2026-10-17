// Sahne 28 — 10 dakika bekleme: ezilmiş sarımsak, saat ve adım listesi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [60, 80, 1700])}>
        <Etiket t={t} bas={K(0, "crushed")} bitis={K(1, "enzyme") - 0.1} capa={[430, 650]} konum={[380, 920]} metin="CRUSHED GARLIC" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "ten")} capa={[800, 360]} konum={[1120, 330]} metin="10 MINUTES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "enzyme")} capa={[400, 640]} konum={[380, 920]} metin="ENZYME AT WORK" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} satirlar={["WAIT", "10 MINUTES"]} x={1860} y={180} boyut={96} hiza="sag" />
      <Liste t={t} x={1270} y={470} aralik={86} boyut={34} isaret="sayi" genislik={580} ogeler={[
        { bas: K(0, "crushed"), metin: "CRUSH", renk: RENK.altin },
        { bas: K(0, "ten"), metin: "WAIT 10 MIN", renk: RENK.altin },
        { bas: K(0, "microwaving,"), metin: "MICROWAVE", renk: RENK.mercan },
      ]} />
      <Liste t={t} x={1270} y={770} boyut={34} isaret="onay" genislik={580} ogeler={[
        { bas: K(0, "much"), metin: "MUCH ACTIVITY KEPT", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S28;
