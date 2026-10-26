// Sahne 53 — özet: kısa denemeler, plasebo ve ibuprofen
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEkstre = K(0, "turmeric extracts"), tAgri = K(0, "knee arthritis"), tPlasebo = K(0, "a little more");
  const tIbu = K(0, "same range");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [70, 110, 1760])}>
        {/* sol alttaki imza kalıntısı */}
        <div style={{ position: "absolute", left: 20, top: 990, width: 200, height: 90, background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Etiket t={t} bas={tEkstre} bitis={tPlasebo - 0.1} capa={[880, 400]} konum={[560, 210]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
      <Etiket t={t} bas={tAgri} bitis={tPlasebo - 0.1} capa={[1500, 480]} konum={[1480, 210]} metin="KNEE ARTHRITIS PAIN" renk={RENK.yesil} />
      <Baslik t={t} bas={tPlasebo} bitis={tIbu - 0.2} metin="A LITTLE MORE THAN PLACEBO" x={960} y={150} boyut={88}
        renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={tIbu} vurgu="≈ IBUPROFEN" not="one four-week trial" x={960} y={80} genislik={640} boyut={90} renk={RENK.altin} />
    </>
  );
};

export default S53;
