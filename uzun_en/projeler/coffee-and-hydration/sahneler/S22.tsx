// Sahne 22 — Maughan 2016: üç bardak, 72 erkek, 1 litre, 30 dk.
import React from "react";
import { Etiket, Hap, Kamera, Liste, RENK, SP, VurguRozet, KaynakEtiketi, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIcecek = K(0, "drinks");
  const tKahve = K(0, "coffee");
  const t72 = K(0, "72");
  const tAc = K(1, "fasted");
  const tSu = K(1, "well hydrated");
  const tLitre = K(1, "liter");
  const tDk = K(1, "30");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [90, 60, 1740])}>
        <Etiket t={t} bas={tIcecek} bitis={8.0} capa={[462, 600]} konum={[250, 520]} metin="WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tIcecek + 0.5} bitis={8.0} capa={[1470, 600]} konum={[1680, 520]} metin="MILK" renk={RENK.altin} />
        <Etiket t={t} bas={tKahve} bitis={8.0} capa={[850, 440]} konum={[560, 230]} metin="COFFEE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Maughan") - 0.2} />
      <VurguRozet t={t} bas={t72} vurgu="72" not="healthy men" x={1700} y={125} bitis={11.3} genislik={330} />
      <VurguRozet t={t} bas={tLitre} vurgu="1 LITER" not="of one drink" x={1700} y={125} genislik={330} boyut={80} />
      <VurguRozet t={t} bas={tDk} vurgu="30 MIN" not="to drink it" x={1700} y={330} genislik={330} boyut={80} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="onay" boyut={30} x={60} y={210} aralik={78} genislik={420}
        ogeler={[{ bas: tAc, metin: "FASTED" }, { bas: tSu, metin: "WELL HYDRATED" }]} />
    </>
  );
};

export default S22;
