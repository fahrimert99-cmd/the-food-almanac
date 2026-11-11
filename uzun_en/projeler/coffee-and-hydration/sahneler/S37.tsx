// Sahne 37 — kişisel duyarlılık: tepki ve atılım hızı kişiden kişiye değişir (FDA).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tFda = K(1, "FDA");
  const tVar = K(1, "varies widely");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 110, 1760])}>
        <Etiket t={t} bas={K(1, "respond to caffeine")} bitis={tVar - 0.2} capa={[440, 650]} konum={[400, 430]} metin="HOW PEOPLE RESPOND" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "how fast they clear")} bitis={tVar - 0.2} capa={[1470, 520]} konum={[1000, 230]} metin="HOW FAST THEY CLEAR IT" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "own sensitivity") - 0.1} bitis={c[1].bas - 0.1} metin="YOUR OWN SENSITIVITY" x={960} y={120} boyut={96}
        hiza="orta" renk={RENK.lacivert} />
      <KaynakEtiketi t={t} metin="FDA" bas={tFda - 0.1} />
      <Baslik t={t} bas={tVar} metin="VARIES" x={60} y={200} boyut={104} hiza="sol" renk={RENK.mercan} />
      <Baslik t={t} bas={tVar + 0.15} metin="WIDELY" x={60} y={310} boyut={104} hiza="sol" renk={RENK.mercan} />
    </>
  );
};

export default S37;
