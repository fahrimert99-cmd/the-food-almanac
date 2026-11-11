// Sahne 7 — Sorbitol: şeker alkolü, 14,7 g / 100 g.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta, b = m.baslik!;
  const tSorb = K(0, "sorbitol");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(0, "sugar")} capa={[640, 270]} konum={[1000, 190]} metin="SUGAR ALCOHOL" renk={RENK.altin} />
      </Kamera>
      <Parcaciklar t={t} bas={tSorb} kaynak={[520, 430]} hedef={[480, 150]} adet={16} aralik={0.2} tohum="sorb" />
      <KaynakEtiketi t={t} metin={m.etiket!} bas={K(0, "chemical")} />
      <Baslik t={t} bas={tSorb} metin={b.satirlar[0]} x={1860} y={290} boyut={130} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "14.7")} vurgu={b.vurgu!} not={b.not} x={1600} y={410} genislik={440} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "Hold")} metin="REMEMBER THIS NUMBER" x={1860} y={730} boyut={50} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "matters")} metin="it matters for digestion" x={1860} y={775} hiza="sag" boyut={38} renk={RENK.lacivert} />
    </>
  );
};

export default S07;
