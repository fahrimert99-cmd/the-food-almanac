// Sahne 47 — Yol 4: küçük başla. Kamera üstte kalır, alt köşedeki imza kadraj dışında.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGas = K(2, "more gas");
  const tSmall = K(2, "smaller portion");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1700], [0, 0, 1560])}>
        <Etiket t={t} bas={tSmall - 0.1} capa={[440, 570]} konum={[330, 190]} metin="SMALLER PORTION" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={720} />
      <KaynakEtiketi t={t} bas={K(2, "Minnesota")} metin="Queenan et al. · Nutr J · 2007" />
      <BaslikBlok t={t} bas={0.1} satirlar={["FOUR:", "START SMALL"]} x={1860} y={250} boyut={104} hiza="sag" adim={0.8} />
      <VurguRozet t={t} bas={tGas} vurgu="MORE GAS" not="reported with the oat fiber" x={1560} y={520} genislik={560} boyut={72} renk={RENK.mercan} />
      <Not t={t} bas={tSmall} metin="A smaller portion is a sensible place to begin" x={1860} y={730} hiza="sag" genislik={520} boyut={34} />
    </>
  );
};

export default S47;
