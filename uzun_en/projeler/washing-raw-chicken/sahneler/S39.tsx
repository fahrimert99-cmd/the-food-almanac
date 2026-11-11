// Sahne 39 — CDC tahminleri: 48 milyon, 128.000, 3.000.
import React from "react";
import { Baslik, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMilyon = K(0, "48 million");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1780])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tMilyon} metin="48 MILLION" x={1180} y={250} boyut={150} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "americans")} metin="Americans sick from food each year" x={1180} y={350} boyut={34} genislik={640} />
      <VurguRozet t={t} bas={K(1, "128,000")} vurgu="128,000" not="hospitalized" x={1500} y={470} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "3,000")} vurgu="3,000" not="die" x={1500} y={700} renk={RENK.mercan} />
    </>
  );
};

export default S39;
