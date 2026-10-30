// Sahne 12 — VITAL tasarımı: seçilmeyenler, günlük doz, plasebo, süre. Şişeler solda; yazılar sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSecme = K(0, "chosen"), tZayif = K(0, "weak"), tDusuk = K(0, "low");
  const tYarisi = K(1, "Half"), tDoz = K(1, "2,000"), tD3 = K(1, "D3"), tPlasebo = K(1, "placebo"), tBes = K(1, "five");
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={tD3} capa={[290, 215]} konum={[760, 110]} metin="VITAMIN D3" renk={RENK.altin} />
        <Etiket t={t} bas={tPlasebo} capa={[660, 460]} konum={[1020, 460]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <Not t={t} bas={tSecme} bitis={tYarisi - 0.1} metin="NOT CHOSEN FOR" x={1100} y={250} boyut={34} agirlik={800} />
      <Liste t={t} isaret="carpi" x={1100} y={320} aralik={92} boyut={40}
        ogeler={[{ bas: tZayif, metin: "WEAK BONES", renk: RENK.mercan, bitis: tYarisi - 0.1 },
                 { bas: tDusuk, metin: "LOW VITAMIN D", renk: RENK.mercan, bitis: tYarisi - 0.1 }]} />
      <BaslikBlok t={t} bas={tDoz} satirlar={b?.satirlar ?? []} x={1860} y={260} boyut={110} hiza="sag" />
      <VurguRozet t={t} bas={tBes} vurgu={b?.vurgu ?? ""} not={b?.not} x={1640} y={540} genislik={440} />
    </>
  );
};

export default S12;
