// Sahne 55 — özet: kalite tarihi tat, güvenlik kullanım.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        {/* termometre tepesindeki bozuk işaret örtülür */}
        <ellipse cx={1507} cy={275} rx={22} ry={26} fill="#E9E3D2" />
      </Kamera>
      <Etiket t={t} bas={K(0, "quality")} bitis={K(1, "safety") - 0.1} capa={[460, 520]} konum={[800, 110]} metin="QUALITY DATES = FLAVOR" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "handling")} capa={[1050, 700]} konum={[1050, 925]} metin="HANDLING" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "temperature")} capa={[1507, 420]} konum={[1380, 130]} metin="TEMPERATURE" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "foods")} capa={[420, 700]} konum={[450, 925]} metin="FOOD CHOICES" renk={RENK.mercan} />
    </>
  );
};

export default S55;
