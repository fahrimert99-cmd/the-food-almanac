// Sahne 15 — Yumuşak yüzey çukurlaşır, damlalar yana fırlar; yüksek musluk daha kötü.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDrop = K(0, "droplets"), tHigh = K(1, "higher");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Parcaciklar t={t} bas={tDrop} kaynak={[960, 430]} hedef={[420, 330]} adet={14} omur={1.4} kavis={-160} yayilma={30} hedefYayilma={120}
          renk={RENK.lacivert} boyut={5} tohum="s15a" />
        <Parcaciklar t={t} bas={tDrop} kaynak={[960, 430]} hedef={[1500, 330]} adet={14} omur={1.4} kavis={-160} yayilma={30} hedefYayilma={120}
          renk={RENK.lacivert} boyut={5} tohum="s15b" />
        <Etiket t={t} bas={K(0, "dent")} bitis={tDrop - 0.2} capa={[960, 440]} konum={[330, 300]} metin="SMALL DENT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "soft,")} bitis={K(0, "dent") + 1.8} metin="SOFT SURFACE" x={70} y={130} boyut={96} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tDrop} bitis={tHigh - 0.2} satirlar={["DROPLETS", "SIDEWAYS"]} x={70} y={130} boyut={90}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={tHigh} satirlar={["HIGHER FAUCET", "WORSE SPLASHING"]} x={70} y={130} boyut={80}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S15;
