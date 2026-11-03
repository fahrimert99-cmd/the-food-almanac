// Sahne 44 — ölçüm cihazı + tarçın: açıkça desteklenen (açlık glukozu biraz düşük), A1C etkisi daha küçük.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSup = K(0, "supported:"), tAn = K(0, "analyses"), tCin = K(0, "cinnamon"), tSom = K(0, "somewhat");
  const tFast = K(0, "fasting"), tEff = K(1, "effect"), tSm = K(1, "smaller");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [150, 80, 1640])}>
        <Etiket t={t} bas={tCin} bitis={10.7} capa={[1250, 470]} konum={[1600, 420]} metin="CINNAMON" renk={RENK.altin} />
        <Etiket t={t} bas={tFast} bitis={10.7} capa={[620, 370]} konum={[330, 170]} metin="FASTING GLUCOSE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tSup} bitis={10.7} satirlar={["SUPPORTED"]} x={1780} y={150} boyut={100} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tAn} bitis={10.7} metin="SEVERAL ANALYSES, SMALL TRIALS" x={1780} y={206} hiza="sag" boyut={30} agirlik={800} />
      <Cip t={t} bas={tSom} bitis={10.7} x={1560} y={300} metin="SOMEWHAT LOWER" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={tEff} satirlar={["A1C EFFECT"]} x={1780} y={150} boyut={100} hiza="sag" renkler={[RENK.altin]} />
      <Not t={t} bas={tSm} metin="SMALLER AND LESS CERTAIN" x={1780} y={206} hiza="sag" boyut={32} agirlik={800} />
    </>
  );
};

export default S44;
