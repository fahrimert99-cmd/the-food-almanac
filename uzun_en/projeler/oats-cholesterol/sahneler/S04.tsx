// Sahne 4 — mercek: araştırmaya yakından bakış
import React from "react";
import { BolumKarti, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700]);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={p}>
        <Etiket t={t} bas={K(0, "oats")} bitis={c[1].bas - 0.1} capa={[1170, 610]} konum={[1560, 470]} metin="OATS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "research")} capa={[830, 320]} konum={[1460, 220]} metin="THE RESEARCH" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "cholesterol")} bitis={c[1].bas - 0.1} metin="CHOLESTEROL?" x={60} y={150} boyut={92} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "where it runs out")} metin="WHERE IT RUNS OUT" x={1860} y={380} boyut={70} hiza="sag" renk={RENK.lacivert} />
    </>
  );
};

export default S04;
