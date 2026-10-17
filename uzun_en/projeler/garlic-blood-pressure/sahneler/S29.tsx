// Sahne 29 — çalışmalarda kullanılan ürün: yaşlandırılmış sarımsak özütü.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHam = K(2, "raw clove");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [150, 110, 1650])}>
        {/* özüt şişesi */}
        <Etiket t={t} bas={K(0, "aged garlic")} bitis={K(0, "S-allylcysteine") - 0.15} capa={[860, 500]} konum={[560, 190]}
          metin="AGED GARLIC EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "S-allylcysteine")} bitis={K(1, "The four") - 0.1} capa={[860, 500]} konum={[560, 190]}
          metin="S-ALLYLCYSTEINE" renk={RENK.koyuYesil} />
        {/* çiğ diş */}
        <Etiket t={t} bas={tHam} capa={[1380, 640]} konum={[1640, 800]} metin="RAW CLOVE" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "2.4")} vurgu="2.4 MG" not="in the four-capsule dose" x={330} y={130} genislik={420} bitis={tHam - 0.2} />
    </>
  );
};

export default S29;
