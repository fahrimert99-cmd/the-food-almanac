// Sahne 31 — fark yok: beyin ve yaban mersini, 0.035 rozeti, hipokampüs.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Baslik t={t} bas={K(0, "difference")} metin="NO SIGNIFICANT DIFFERENCE" x={1860} y={150} boyut={80}
        renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "0.035,")} vurgu="0.035" not="gap between the two groups" x={1500} y={770}
        boyut={88} genislik={420} />
      <Etiket t={t} bas={K(1, "scans")} bitis={9.9} capa={[480, 270]} konum={[340, 140]} metin="SIMILAR SCANS" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "hippocampus,")} capa={[575, 625]} konum={[860, 860]} metin="HIPPOCAMPUS" renk={RENK.mercan} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S31;
