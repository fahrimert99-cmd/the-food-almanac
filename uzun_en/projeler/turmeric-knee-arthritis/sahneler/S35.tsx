// Sahne 35 — Farklı ürünler: her deney sonucu yalnızca test edilen özüte aittir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const tUrun = K(1, "different products");
  const tSonuc = K(1, "each trial result");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={pencere}>
        <Etiket t={t} bas={tUrun} bitis={tSonuc - 0.1} capa={[900, 440]} konum={[560, 330]} metin="THIS PRODUCT" renk={RENK.lacivert} />
        <Etiket t={t} bas={tUrun + 0.5} bitis={tSonuc - 0.1} capa={[1300, 470]} konum={[1580, 340]} metin="THAT PRODUCT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "special formulations")} bitis={tUrun - 0.4} satirlar={["SPECIAL", "FORMULATIONS"]} x={90} y={110} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "help absorption")} bitis={tUrun - 0.4} metin="to help absorption" x={94} y={290} boyut={32} />
      <VurguRozet t={t} bas={tSonuc} vurgu="ONE EXTRACT" not="each result belongs to the extract tested" x={960} y={50}
        genislik={720} boyut={84} />
    </>
  );
};

export default S35;
