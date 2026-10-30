// Sahne 5 — 100 g kuru erik: USDA değerleri sağ sütunda.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta, b = m.baslik!;
  const t100 = K(1, "100");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(0, "prune")} bitis={t100 - 0.2} capa={[430, 540]} konum={[400, 250]} metin="PRUNE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "plum")} bitis={t100 - 0.2} capa={[1160, 640]} konum={[1440, 520]} metin="FRESH PLUM" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={m.etiket!} bas={K(1, "Department")} />
      <Baslik t={t} bas={K(0, "dried")} bitis={t100 - 0.2} metin="A PRUNE = A DRIED PLUM" x={1860} y={200} boyut={60} hiza="sag" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={t100} satirlar={b.satirlar} x={1860} y={190} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "240")} vurgu={b.vurgu!} not={b.not} x={1630} y={400} genislik={460} renk={RENK.altin} />
      <Liste t={t} isaret="nokta" boyut={36} x={1330} y={730} aralik={84} genislik={560} ogeler={[
        { bas: K(1, "7"), metin: "7 G FIBER", renk: RENK.yesil },
        { bas: K(1, "732"), metin: "732 MG POTASSIUM", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S05;
