// Sahne 38 — NIH uyarıları: pastörize edilmemiş meyve suyu, elektrolit dengesizliği
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, ilerle, eout, kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

// sağ boşlukta beliren hap
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1760]);
  const cik1 = c[1].bas - 0.1, cik2 = c[2].bas - 0.1;
  const tSu = K(2, "water or tea");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={w}>
        <Etiket t={t} bas={K(1, "Unpasteurized juices")} bitis={cik2} capa={[700, 560]} konum={[300, 600]} metin="UNPASTEURIZED JUICE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* 1. cümle: başlık */}
      <BaslikBlok t={t} bas={K(0, "Two more")} bitis={cik1} satirlar={["TWO MORE", "CAUTIONS"]} x={70} y={250} boyut={92}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={K(0, "NIH")} bitis={cik1} metin="FROM THE NIH" x={74} y={430} boyut={28} renk={RENK.altin} font="inter" aralik={5} />
      {/* 2. cümle: risk grupları */}
      <Baslik t={t} bas={K(1, "serious illness")} bitis={cik2} metin="HIGHER RISK" x={1560} y={110} boyut={50} renk={RENK.mercan} hiza="orta" />
      <Pil t={t} bas={K(1, "older adults")} bitis={cik2} metin="OLDER ADULTS" renk={RENK.mercan} x={1560} y={220} />
      <Pil t={t} bas={K(1, "children")} bitis={cik2} metin="CHILDREN" renk={RENK.mercan} x={1560} y={310} />
      <Pil t={t} bas={K(1, "weakened immune")} bitis={cik2} metin="WEAK IMMUNITY" renk={RENK.mercan} x={1560} y={400} />
      {/* 3. cümle: elektrolit */}
      <Pil t={t} bas={tSu} metin="WATER OR TEA ONLY" renk={RENK.altin} x={1540} y={200} />
      <Pil t={t} bas={K(2, "no food")} metin="NO FOOD FOR DAYS" renk={RENK.altin} x={1540} y={290} />
      <BaslikBlok t={t} bas={K(2, "dangerous")} satirlar={["ELECTROLYTE", "IMBALANCES"]} x={1540} y={440} boyut={78} hiza="orta"
        renkler={[RENK.mercan, RENK.mercan]} />
    </>
  );
};

export default S38;
