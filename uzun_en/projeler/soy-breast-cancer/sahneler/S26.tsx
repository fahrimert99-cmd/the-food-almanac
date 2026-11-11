// Sahne 26 — Asya ve Batı sonuçları: sağ panelde iki başlık, solda tofu etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsya = K(0, "Asian"), t24 = K(0, "24"), tBati = K(1, "Western"), tFark = K(1, "essentially");
  const pCizgi = eout(ilerle(t, tBati - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <Panel a={eout(ilerle(t, 0.2, 0.7))} taraf="sag" genislik={820} />
      <Etiket t={t} bas={K(0, "benefit")} bitis={tAsya + 1.5} capa={[440, 400]} konum={[330, 170]} metin="TOFU" renk={RENK.yesil} />
      <Baslik t={t} bas={tAsya} metin="ASIA: –24%" x={1860} y={310} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={t24} metin="ABOUT 24% LOWER RISK" x={1860} y={390} hiza="sag" genislik={700} boyut={36} agirlik={800} />
      <div style={{ position: "absolute", right: 60, top: 500, height: 6, width: 520 * pCizgi, background: RENK.altin }} />
      <Baslik t={t} bas={tBati} metin="WEST: NONE" x={1860} y={620} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tFark} metin="ESSENTIALLY NO DIFFERENCE" x={1860} y={700} hiza="sag" genislik={700} boyut={36} agirlik={800} />
    </>
  );
};

export default S26;
