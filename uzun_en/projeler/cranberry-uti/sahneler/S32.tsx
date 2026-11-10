// S32 — NNT: ~3 yıl, en çok ~13 yıl; kadınlar daha genç
import React from "react";
import { Baslik, Hap, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "preventing one"), tThree = K(0, "three years"), tRange = K(0, "13 years"), tYoung = K(1, "younger");
  const aBand = eout(ilerle(t, 0.3, 0.8));
  const [sc, al] = pop(t, tYoung, 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 360, opacity: aBand,
        background: `linear-gradient(to bottom, ${kagit(0.95)} 0%, ${kagit(0.9)} 60%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tOne} metin="PREVENT ONE INFECTION" x={960} y={95} boyut={78} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={tThree} vurgu="≈ 3 YEARS" not="of daily cranberry beverage" x={620} y={150} genislik={440} boyut={92} />
      <VurguRozet t={t} bas={tRange} vurgu="UP TO 13 YEARS" not="top of the range" x={1340} y={150} genislik={600} boyut={80} renk={RENK.mercan} />
      {t >= tYoung && (
        <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
          <Hap metin="THESE WOMEN WERE YOUNGER" renk={RENK.altin} boyut={34} />
        </div>
      )}
    </>
  );
};
export default S32;
