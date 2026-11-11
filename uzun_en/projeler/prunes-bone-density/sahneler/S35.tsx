// Sahne 35 — iki tedavi, ~6 g lif, bir hafta ara; herkes kendi karşılaştırması.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBoth = K(0, "treatments"), t6 = K(0, "6 grams"), tHafta = K(0, "one week"), tAra = K(0, "and") ;
  const [sc, al] = pop(t, K(1, "own"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={tBoth} bitis={tAra} capa={[600, 520]} konum={[600, 285]} metin="PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={tBoth + 0.15} bitis={tAra} capa={[1320, 720]} konum={[1320, 285]} metin="PSYLLIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tHafta} capa={[967, 540]} konum={[967, 95]} metin="1 WEEK BREAK" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={t6} vurgu="≈ 6 G" not="fiber a day" x={600} y={40} genislik={300} boyut={84} bitis={tAra} />
      <VurguRozet t={t} bas={t6 + 0.15} vurgu="≈ 6 G" not="fiber a day" x={1320} y={40} genislik={300} boyut={84} bitis={tAra} />
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="EACH PERSON: OWN COMPARISON" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S35;
