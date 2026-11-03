// Sahne 4 — kanal tanıtımı (sol panel) sonra "ne olduğu" etiketi (sağ).
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.1;
  const kelimeler = MARKA.filigran.split(" ");
  const satir1 = kelimeler.slice(0, 2).join(" "), satir2 = kelimeler.slice(2).join(" ");
  const pa = einout(ilerle(t, 0.05, 0.5)) * sol(t, bit, 0.5);
  const cizgi = eout(ilerle(t, 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(1, "multivitamin")} capa={[955, 430]} konum={[1640, 560]} metin="MULTIVITAMIN" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 820, opacity: pa,
        background: `linear-gradient(to right, ${kagit(0.96)} 0%, ${kagit(0.94)} 70%, ${kagit(0)} 100%)` }} />
      <div style={{ position: "absolute", left: 60, top: 258, width: 180 * cizgi, height: 6, background: RENK.altin, opacity: sol(t, bit, 0.5) }} />
      <Baslik t={t} bas={K(0, "Food") - 0.3} bitis={bit} metin={satir1} x={56} y={360} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "Almanac") - 0.2} bitis={bit} metin={satir2} x={56} y={500} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "what")} metin="WHAT IT" x={1860} y={215} boyut={86} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "actually")} metin="ACTUALLY IS" x={1860} y={310} boyut={86} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
