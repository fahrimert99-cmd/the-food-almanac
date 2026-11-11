// Sahne 12 — pişmiş ıspanak 494 µg, çiğ kara lahana 390 µg (100 g başına).
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGov = K(0, "government"), t494 = K(0, "494"), tBoiled = K(0, "boiled"), tOz = K(0, "roughly");
  const tRaw = K(1, "Raw"), t390 = K(1, "390");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 90, 1800])}>
        <Etiket t={t} bas={tBoiled} bitis={tRaw - 0.1} capa={[420, 330]} konum={[230, 210]} metin="BOILED SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={tRaw} capa={[760, 330]} konum={[1020, 190]} metin="RAW KALE" renk={RENK.koyuYesil} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={tGov} />}
      <BaslikBlok t={t} bas={t494 - 0.5} bitis={tRaw - 0.1} satirlar={["COOKED", "SPINACH"]} x={1860} y={300} boyut={92} hiza="sag" />
      <BaslikBlok t={t} bas={tRaw} satirlar={["RAW", "KALE"]} x={1860} y={300} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={t494} bitis={tRaw - 0.1} vurgu="494" not="micrograms of vitamin K in 100 grams" x={1620} y={520} genislik={420} />
      <VurguRozet t={t} bas={t390} vurgu="390" not="micrograms in the same weight" x={1620} y={520} genislik={420} renk={RENK.yesil} />
      <Not t={t} bas={tOz} bitis={tRaw - 0.1} metin="100 g ≈ 3½ oz" x={1860} y={790} hiza="sag" boyut={36} />
    </>
  );
};

export default S12;
