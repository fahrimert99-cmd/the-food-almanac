// Sahne 46 — kan testi antikorlara bakar; NIH: testten önce glütensiz diyete başlama.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(1, "blood test"), tAb = K(1, "antibodies"), tNih = K(2, "NIH"), tNot = K(2, "not starting"), tRes = K(2, "affect");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={tTest} bitis={tNih - 0.1} capa={[667, 480]} konum={[560, 250]} metin="BLOOD TEST" renk={RENK.mercan} />
        <Etiket t={t} bas={tAb} bitis={tNih - 0.1} capa={[1240, 330]} konum={[1000, 130]} metin="ANTIBODIES" renk={RENK.altin} />
        <Etiket t={t} bas={tNot} capa={[1530, 680]} konum={[1440, 530]} metin="NO GLUTEN-FREE YET" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={0.15} bitis={tTest - 0.1} metin="THE REASON" x={400} y={250} boyut={90} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNih} bitis={tRes} metin="NIH ADVICE" x={330} y={230} boyut={80} renk={RENK.altin} />
      <Baslik t={t} bas={tRes} metin="IT CAN AFFECT" x={330} y={230} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tRes + 0.18} metin="THE RESULTS" x={330} y={320} boyut={80} renk={RENK.mercan} />
    </>
  );
};

export default S46;
