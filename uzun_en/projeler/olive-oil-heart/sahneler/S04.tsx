import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 4 — kanal tanıtımı ve raf: zeytinyağı şişesi ile diğer kaplar.
const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tM = K(0, "The Food Almanac");
  const pM = eout(ilerle(t, tM - 0.2, 0.4)) * (1 - eout(ilerle(t, c[1].bas - 0.1, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(1, "extra virgin")} bitis={K(1, "other") - 0.2} capa={[1160, 620]} konum={[1420, 170]} metin="EXTRA VIRGIN OLIVE OIL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "other")} capa={[620, 760]} konum={[480, 60]} metin="OTHER BOTTLES" renk={RENK.altin} />
      </Kamera>
      {pM > 0.01 && (
        <div style={{ position: "absolute", left: 360, top: 400, width: 1200, height: 200, opacity: pM, borderRadius: 24, background: kagit(0.94) }}>
          <Baslik t={t} bas={tM} metin={MARKA.ad.toUpperCase()} x={600} y={100} boyut={96} hiza="orta" renk={RENK.lacivert} />
        </div>
      )}
    </>
  );
};
export default S04;
