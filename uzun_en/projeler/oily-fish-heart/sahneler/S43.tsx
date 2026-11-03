// Sahne 43 — FDA/EPA "Best Choices" listesi: altı düşük cıva balığı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik!;
  const tBest = K(1, "Best");
  const tLow = K(1, "lower-mercury");
  const pPanel = eout(ilerle(t, 0.2, 0.8));
  const ogeler = [
    { bas: K(1, "Sardines,"), metin: "SARDINES" },
    { bas: K(1, "salmon,"), metin: "SALMON" },
    { bas: K(1, "herring,"), metin: "HERRING" },
    { bas: K(1, "anchovies,"), metin: "ANCHOVIES" },
    { bas: K(1, "trout"), metin: "TROUT" },
    { bas: K(1, "canned"), metin: "CANNED LIGHT TUNA" },
  ];
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={ogeler[1].bas} capa={[640, 440]} konum={[640, 80]} metin="SALMON" renk={RENK.mercan} boyut={26} bitis={tBest} />
        <Etiket t={t} bas={ogeler[3].bas} capa={[1000, 650]} konum={[1000, 860]} metin="ANCHOVIES" renk={RENK.lacivert} boyut={26} bitis={tBest} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={0.3} satirlar={m.satirlar} x={1230} y={170} boyut={96} />
      <Not t={t} bas={K(0, "FDA")} metin={m.not ?? ""} x={1230} y={335} boyut={28} genislik={620} />
      <Liste t={t} ogeler={ogeler} x={1230} y={410} aralik={70} boyut={34} isaret="onay" genislik={640} />
      <VurguRozet t={t} bas={tLow} vurgu="LOWER MERCURY" x={1530} y={820} boyut={44} genislik={520} renk={RENK.koyuYesil} />
    </>
  );
};

export default S43;
