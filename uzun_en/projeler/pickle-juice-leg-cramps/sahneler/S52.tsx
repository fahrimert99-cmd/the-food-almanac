// Sahne 52 — kininin riskleri: ciddi kan sorunları, düşük trombosit; AFP: artık önerilmiyor.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760]);
  const tCiddi = K(0, "serious"), tKan = K(0, "blood"), tSorun = K(0, "problems"), tKanama = K(0, "dangerous"), tPlt = K(0, "very low");
  const tAfp = K(1, "American"), tKinin = K(1, "quinine"), tArtik = K(1, "no"), tOner = K(1, "recommended");
  const son = tAfp - 0.25; // ilk grup AFP cümlesinden önce solar
  return (
    <>
      <Kamera gorsel="tam/52" pencere={p} />
      <Baslik t={t} bas={tCiddi} bitis={son} metin="SERIOUS" x={70} y={240} boyut={96} renk={RENK.mercan} />
      <Baslik t={t} bas={tKan} bitis={son} metin="BLOOD" x={70} y={350} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSorun} bitis={son} metin="PROBLEMS" x={70} y={460} boyut={96} renk={RENK.lacivert} />
      <Etiket t={t} bas={tKanama} bitis={tPlt - 0.1} capa={[700, 300]} konum={[330, 640]} metin="DANGEROUS BLEEDING" renk={RENK.mercan} boyut={26} />
      <Etiket t={t} bas={tPlt} bitis={son} capa={[830, 500]} konum={[330, 640]} metin="LOW PLATELETS" renk={RENK.mercan} boyut={26} />
      <KaynakEtiketi t={t} metin="Allen & Kirby · Am Fam Physician · 2012" bas={tAfp} />
      <Baslik t={t} bas={tKinin} metin="QUININE" x={70} y={330} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tArtik} metin="NO LONGER" x={70} y={440} boyut={96} renk={RENK.mercan} />
      <Baslik t={t} bas={tOner} metin="RECOMMENDED" x={70} y={550} boyut={86} renk={RENK.mercan} />
    </>
  );
};
export default S52;
