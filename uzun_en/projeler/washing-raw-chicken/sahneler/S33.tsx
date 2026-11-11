// Sahne 33 — 165°F ≈ 74°C ve CDC: gıda termometresiyle kontrol.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t165 = K(0, "165"), t74 = K(0, "74"), tCdc = K(0, "CDC"), tTerm = K(0, "food thermometer");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={tTerm} capa={[290, 330]} konum={[760, 150]} metin="FOOD THERMOMETER" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin="CDC" bas={tCdc} />
      <VurguRozet t={t} bas={t165 - 0.05} vurgu="165°F" not="FAHRENHEIT" x={1500} y={190} genislik={520} boyut={150} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t74 - 0.05} vurgu="≈ 74°C" not="CELSIUS" x={1500} y={500} genislik={520} boyut={150} renk={RENK.koyuYesil} />
    </>
  );
};

export default S33;
