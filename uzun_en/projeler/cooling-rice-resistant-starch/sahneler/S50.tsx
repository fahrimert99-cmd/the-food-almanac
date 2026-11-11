// Sahne 50 — adım 3: buzdolabı ≤ 40 °F, 3–4 gün, emin değilsen at.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTer = K(1, "below"), t40 = K(1, "40"), tGun = K(1, "three"), tAt = K(2, "throw");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [0, 110, 1620])}>
        <Etiket t={t} bas={tTer} capa={[500, 440]} konum={[390, 150]} metin="THERMOMETER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tAt} capa={[790, 600]} konum={[790, 860]} metin="THROW IT OUT" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={820} />
      <Baslik t={t} bas={0.0} metin="STEP 3" x={1860} y={170} boyut={64} renk={RENK.altin} hiza="sag" />
      <VurguRozet t={t} bas={t40} vurgu="≤ 40 °F" not="REFRIGERATOR" x={1560} y={270} genislik={420} boyut={100} />
      <BaslikBlok t={t} bas={tGun} satirlar={["3 TO 4 DAYS"]} x={1860} y={640} boyut={116} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tGun + 0.4} metin="refrigerated at or below 40 °F" x={1860} y={720} hiza="sag" genislik={560} />
    </>
  );
};
export default S50;
