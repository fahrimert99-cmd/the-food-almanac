// Sahne 30 — 2019 incelemesindeki sarımsak tozu dozları ve süreleri.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t600 = K(0, "600"), t2400 = K(0, "2,400"), t8 = K(0, "8 to 24");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [200, 90, 1600])}>
        <Etiket t={t} bas={K(0, "garlic powder")} bitis={t600 - 0.2} capa={[900, 440]} konum={[420, 250]}
          metin="GARLIC POWDER" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={t600} bitis={t2400 - 0.15} vurgu="600–900 MG" not="mostly, a day" x={380} y={80} genislik={600} boyut={88} />
      <VurguRozet t={t} bas={t2400} bitis={t8 - 0.15} vurgu="2,400 MG" not="in one case" x={380} y={80} genislik={600} boyut={88} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t8} vurgu="8–24 WEEKS" not="trial length" x={380} y={80} genislik={600} boyut={88} renk={RENK.koyuYesil} />
    </>
  );
};

export default S30;
