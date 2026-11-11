// Sahne 40 — terazi: ilaç şişesi ve greyfurt arasındaki boş kâğıt alanda dört vuruş.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Ortadaki boş alanda hap (ekran koordinatı)
const Kutu: React.FC<{ t: number; bas: number; bitis?: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 915, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGercek = K(1, "real,");
  const tZor = K(1, "number");
  const tDar = K(2, "narrow");
  const tKucuk = K(2, "small");
  const tDiger = K(3, "another");
  return (
    <>
      {/* alt kenardaki bozuk el yazısı dışarıda kalsın diye kamera üstte tutulur */}
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [180, 40, 1560], [260, 60, 1400])}>
        <Etiket t={t} bas={K(1, "drug")} bitis={7.6} capa={[560, 400]} konum={[800, 150]} metin="DRUG LEVELS" renk={RENK.lacivert} />
        <Etiket t={t} bas={tDar} bitis={12.0} capa={[560, 480]} konum={[800, 150]} metin="NARROW SAFETY MARGIN" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} bitis={1.6} satirlar={["BOTH CAN", "BE TRUE"]} x={960} y={250} boyut={92} hiza="orta" />
      <Kutu t={t} bas={tGercek} bitis={12.0} y={290} metin="DRUG LEVELS: REAL" renk={RENK.yesil} />
      <Kutu t={t} bas={tZor} bitis={7.6} y={390} metin="HARM COUNT: HARD TO MEASURE" renk={RENK.altin} />
      <Kutu t={t} bas={tKucuk} bitis={12.0} y={390} metin="SMALL RISE CAN MATTER" renk={RENK.mercan} />
      <Kutu t={t} bas={tDiger} y={290} metin="OTHER DRUG: MAY NOT MATTER" renk={RENK.yesil} />
    </>
  );
};

export default S40;
