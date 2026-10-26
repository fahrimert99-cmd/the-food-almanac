// Sahne 34 — Takviye almayanlarda güçlendirilmiş mısır gevreği: %12 vs %23. Solda çubuklar, sağda kayıt notları.
import React from "react";
import { AltSis, Baslik, CubukGrafik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cubuklar = [
    { etiket: "4+ TIMES A WEEK", deger: 12, metin: "12%", renk: RENK.yesil, bas: K(0, "12 percent") - 0.05 },
    { etiket: "NONE", deger: 23, metin: "23%", renk: RENK.mercan, bas: K(0, "23 percent") - 0.05 },
  ];
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [150, 120, 1560], [200, 150, 1480])}>
        <Etiket t={t} bas={K(0, "fortified")} capa={[950, 650]} konum={[1070, 430]} metin="FORTIFIED CEREAL" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.55} />
      <Baslik t={t} bas={K(0, "no")} metin="NO SUPPLEMENTS TAKEN" x={110} y={150} boyut={30} renk={RENK.altin} font="inter" aralik={3} />
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={110} y={250} w={700} h={190} maks={27} aralik={0} />
      <Pil t={t} bas={K(1, "younger")} metin="YOUNGER ADULTS TOO" renk={RENK.lacivert} x={1860} y={130} />
      <Pil t={t} bas={K(1, "link.") - 0.1} metin="ONLY A LINK" renk={RENK.mercan} x={1860} y={215} />
    </>
  );
};

export default S34;
