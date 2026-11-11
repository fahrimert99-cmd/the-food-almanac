// Sahne 26 — cep saati: "yaklaşık iki yıl" istatistiksel çeviri.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [50, 80, 1780])}>
        <Etiket t={t} bas={K(0, "cognitive")} capa={[420, 560]} konum={[820, 210]} metin="COGNITIVE AGING" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "test scores") - 0.3} capa={[920, 470]} konum={[1560, 830]} metin="TEST SCORES" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "about")} satirlar={["≈ 2 YEARS", "SLOWER AGING?"]} x={1860} y={260} boyut={84} hiza="sag" />
      <Not t={t} bas={K(1, "statistical")} metin="A statistical translation of a small average" x={1860} y={540} hiza="sag" genislik={500} boyut={32} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S26;
