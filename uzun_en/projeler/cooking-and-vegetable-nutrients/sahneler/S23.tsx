// Sahne 23 — Dewanto 2002: domates, likopen hücre duvarında; 88 °C ısıtma.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDom = K(0, "tomatoes"), tLik = K(1, "lycopene"), tKilit = K(1, "locked"), tIsit = K(2, "heated"), t88 = K(2, "88"), tOlc = K(2, "measured");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={tDom} bitis={tLik - 0.2} capa={[1560, 790]} konum={[1700, 900]} metin="TOMATOES" renk={RENK.mercan} />
        <Etiket t={t} bas={tLik} bitis={tKilit - 0.15} capa={[1030, 430]} konum={[1300, 175]} metin="LYCOPENE" renk={RENK.mercan} />
        <Etiket t={t} bas={tKilit} bitis={tIsit - 0.3} capa={[1030, 430]} konum={[1300, 175]} metin="LOCKED IN CELL WALLS" renk={RENK.altin} />
        <Parcaciklar t={t} bas={tIsit} kaynak={[960, 430]} hedef={[960, 200]} adet={30} aralik={0.35} omur={1.8} yayilma={420} kavis={-40}
          boyut={5} tohum="isi" hedefYayilma={260} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.1} />
      <VurguRozet t={t} bas={t88 - 0.1} vurgu="88 °C" not="about 190 °F" x={300} y={160} genislik={400} renk={RENK.mercan} />
      <Baslik t={t} bas={tOlc} metin="WHAT CHANGED?" x={1860} y={150} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S23;
