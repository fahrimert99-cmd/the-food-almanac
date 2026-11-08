// Sahne 11 — Asıl soru: durulama mikropları ne yapıyor, nereye gidiyor?
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGo = K(2, "where");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "raw")} bitis={K(0, "germs.") + 0.6} capa={[853, 560]} konum={[300, 140]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "germs.")} bitis={K(1, "It") + 0.5} capa={[1267, 333]} konum={[1520, 150]} metin="GERMS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "rinsing")} bitis={tGo - 0.1} capa={[960, 440]} konum={[560, 110]} metin="RINSING" renk={RENK.koyuYesil} />
        <Parcaciklar t={t} bas={tGo} kaynak={[1000, 520]} hedef={[1250, 280]} adet={26} omur={2.0} kavis={-120} yayilma={140}
          hedefYayilma={380} renk={RENK.mercan} boyut={5} tohum="s11" />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "It")} bitis={K(2, "The") - 0.1} vurgu="IT CAN." x={1700} y={300} genislik={340} boyut={86} renk={RENK.mercan} />
      <Baslik t={t} bas={tGo} metin="WHERE THEY GO" x={60} y={80} boyut={72} renk={RENK.lacivert} />
    </>
  );
};

export default S11;
