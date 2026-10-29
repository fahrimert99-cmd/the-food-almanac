// Sahne 33 — bilişsel testler: kum saati, yapboz, 657 kişi.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(0, "memory"), tSaat = K(0, "after"), tSkor = K(1, "combined"), t657 = K(1, "657");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tTest} bitis={tSkor - 0.1} capa={[930, 650]} konum={[930, 880]} metin="MEMORY TESTS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tSaat} bitis={tSkor - 0.1} capa={[547, 480]} konum={[470, 200]} metin="AFTER 2 YEARS" renk={RENK.altin} />
        <Etiket t={t} bas={tSkor} capa={[930, 650]} konum={[930, 880]} metin="ONE COMBINED SCORE" renk={RENK.koyuYesil} />
      </Kamera>
      <VurguRozet t={t} bas={t657} vurgu="657" not="people" x={1000} y={110} genislik={300} boyut={92} renk={RENK.altin} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S33;
