// Sahne 45 — belirtiler örtüşür; JAMA: önce çölyak taraması.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOver = K(0, "overlapping"), tDoc = K(0, "doctors");
  const tJama = K(1, "2017"), tScr = K(1, "celiac screening"), tDiet = K(1, "gluten-free diet");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tOver} bitis={tJama - 0.1} capa={[640, 500]} konum={[560, 780]} metin="OVERLAPPING SYMPTOMS" renk={RENK.mercan} />
        <Etiket t={t} bas={tScr} bitis={tDiet - 0.1} capa={[500, 420]} konum={[900, 125]} metin="CELIAC SCREENING" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tDiet} capa={[1060, 400]} konum={[1150, 110]} metin="GLUTEN-FREE DIET" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Not t={t} bas={tDoc} bitis={tJama - 0.1} metin="SYMPTOMS ALONE CAN'T TELL THEM APART" x={1620} y={380} hiza="orta" genislik={460} boyut={40} agirlik={800} />
      <VurguRozet t={t} bas={tJama} vurgu="2017" not="JAMA review" x={1620} y={150} renk={RENK.altin} genislik={380} />
      <Baslik t={t} bas={tScr} metin="TEST" x={1620} y={520} boyut={120} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tScr + 0.18} metin="FIRST" x={1620} y={650} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tDiet + 0.5} metin="BEFORE A GLUTEN-FREE DIET STARTS" x={1620} y={760} hiza="orta" genislik={460} boyut={32} agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S45;
